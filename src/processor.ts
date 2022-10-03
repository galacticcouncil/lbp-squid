// import { lookupArchive } from '@subsquid/archive-registry'
// import * as ss58 from '@subsquid/ss58'

import * as hexUtil from '@subsquid/util-internal-hex'

import {
  BatchBlock,
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor,
} from '@subsquid/substrate-processor'
import {
  Entity,
  EntityClass,
  Store,
  TypeormDatabase,
} from '@subsquid/typeorm-store'
import { In, Like } from 'typeorm'
import {
  Account,
  Pool,
  PoolType,
  LBPPoolData,
  Transfer,
  HistoricalPoolPriceData,
} from './model'
import {
  BalancesTransferEvent,
  LbpPoolCreatedEvent,
  LbpPoolUpdatedEvent,
  TokensTransferEvent,
  XykPoolCreatedEvent,
} from './types/events'
import { SystemAccountStorage, TokensAccountsStorage } from './types/storage'
import { ParachainSystemSetValidationDataCall } from './types/calls'

import { isNotNullOrUndefined } from './helpers'

const processor = new SubstrateBatchProcessor()
  .setBatchSize(500)
  .setDataSource({
    // Lookup archive by the network name in the Subsquid registry
    // archive: lookupArchive("kusama", {release: "FireSquid"})

    // Use archive created by archive/docker-compose.yml
    archive: 'http://localhost:8888/graphql',
    chain: 'wss://rpc.hydration.dev/',

    // Use other remote archive
    // archive: 'https://basilisk-devnet-firesquid.play.hydration.cloud/',
  })
  .addEvent('Balances.Transfer', {
    data: {
      event: {
        args: true,
        extrinsic: {
          hash: true,
          fee: true,
        },
      },
    },
  })
  .addEvent('Tokens.Transfer', {
    data: {
      event: {
        args: true,
        extrinsic: {
          hash: true,
          fee: true,
        },
      },
    },
  })
  .addEvent('XYK.PoolCreated', {
    data: {
      event: {
        args: true,
      },
    },
  })
  .addEvent('LBP.PoolUpdated', {
    data: {
      event: {
        args: true,
      },
    },
  })
  .addEvent('LBP.PoolCreated', {
    data: {
      event: {
        args: true,
      },
    },
  })
  .addCall('ParachainSystem.set_validation_data', {})

type Item = BatchProcessorItem<typeof processor>
type Ctx = BatchContext<Store, Item>

processor.run(new TypeormDatabase(), async (ctx) => {
  let transfersData = getTransfers(ctx)
  let poolsData = await getPools(ctx)
  const lbpPoolsUpdates = await getLBPPoolUpdates(ctx)

  let accountIds = new Set<string>()
  for (let t of transfersData) {
    accountIds.add(t.from)
    accountIds.add(t.to)
  }

  for (let p of poolsData) {
    accountIds.add(p.id)
    if (p.lbpPoolData?.owner) accountIds.add(p.lbpPoolData.owner)
    if (p.lbpPoolData?.feeCollector) accountIds.add(p.lbpPoolData.feeCollector)
  }

  for (let p in lbpPoolsUpdates) {
    accountIds.add(lbpPoolsUpdates[p].owner)
    accountIds.add(lbpPoolsUpdates[p].feeCollector)
  }

  let accounts = await ctx.store
    .findBy(Account, { id: In([...accountIds]) })
    .then((accounts) => {
      return new Map(accounts.map((a) => [a.id, a]))
    })

  let transfers: Transfer[] = []

  for (let t of transfersData) {
    let { id, assetId, extrinsicHash, amount, fee, blockNumber } = t

    let from = getAccount(accounts, t.from)
    let to = getAccount(accounts, t.to)

    transfers.push(
      new Transfer({
        id,
        assetId,
        extrinsicHash,
        from,
        to,
        amount,
        fee,
      }),
    )
  }

  let pools: Pool[] = []
  let lbpPoolsData = new Map<string, LBPPoolData>()

  for (let p of poolsData) {
    let {
      id,
      assetAId,
      assetBId,
      assetABalance,
      assetBBalance,
      poolType,
      createdAt,
      lbpPoolData,
    } = p

    if (lbpPoolData) {
      lbpPoolsData.set(
        id,
        new LBPPoolData({
          id: id,
          owner: getAccount(accounts, lbpPoolData.owner),
          feeCollector: getAccount(accounts, lbpPoolData.feeCollector),
          fee: lbpPoolData.fee,
          initialWeight: lbpPoolData.initialWeight,
          finalWeight: lbpPoolData.finalWeight,
        }),
      )
    }
    pools.push(
      new Pool({
        id: id,
        account: getAccount(accounts, id),
        assetAId,
        assetBId,
        assetABalance,
        assetBBalance,
        createdAt,
        poolType,
      }),
    )
  }

  const poolsPriceData: HistoricalPoolPriceData[] = []

  const lbpPools = await ctx.store.findBy(Pool, { poolType: PoolType.LBP })

  const poolPriceData = await getPoolPriceData(ctx, lbpPools)

  for (let p of poolPriceData) {
    poolsPriceData.push(new HistoricalPoolPriceData(p))
  }

  for (let p in lbpPoolsUpdates) {
    const data = lbpPoolsData.get(p)
    const newData = lbpPoolsUpdates[p]

    if (!data) return

    data.owner = getAccount(accounts, newData.owner)
    data.feeCollector = getAccount(accounts, newData.feeCollector)
    data.initialWeight = newData.initialWeight
    data.finalWeight = newData.finalWeight
    data.repayTarget = newData.repayTarget
    data.startBlockNumber = newData.startBlockNumber
    data.endBlockNumber = newData.endBlockNumber
  }

  await ctx.store.save(Array.from(accounts.values()))
  await ctx.store.insert(transfers)
  await ctx.store.insert(pools)
  await ctx.store.insert(Array.from(lbpPoolsData.values()))
  await ctx.store.insert(poolsPriceData)
})

async function getLBPPoolUpdates(ctx: Ctx) {
  const updates: { [key: string]: LBPPoolDataUpdate } = {}
  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.name == 'LBP.PoolUpdated') {
        const e = new LbpPoolUpdatedEvent(ctx, item.event).asV72
        const data = e.data

        updates[hexUtil.toHex(e.pool)] = {
          startBlockNumber: data.start,
          endBlockNumber: data.end,
          repayTarget: data.repayTarget,
          fee: data.fee,
          initialWeight: data.initialWeight,
          finalWeight: data.finalWeight,
          feeCollector: hexUtil.toHex(data.feeCollector),
          owner: hexUtil.toHex(data.owner),
        }
      }
    }
  }
  return updates
}

async function getPoolPriceData(
  ctx: Ctx,
  pools: Pool[],
): Promise<PoolPriceData[]> {
  let poolPrices: Promise<PoolPriceData | null>[] = []
  ctx
  for (let block of ctx.blocks) {
    if (block.header.height < 127000) continue // TODO TESTNET DEBUG -> REMOVE ME
    for (let item of block.items) {
      if (item.name == 'ParachainSystem.set_validation_data') {
        let c = new ParachainSystemSetValidationDataCall(ctx, item.call).asV72
        const relayChainBlockNumber = c.data.validationData.relayParentNumber
        const parachainBlockNumber = block.header.height

        poolPrices = poolPrices.concat(
          pools.map(
            async (p) =>
              new Promise<PoolPriceData | null>((resolve) => {
                if (p.createdAt > parachainBlockNumber) {
                  resolve(null)
                  return
                }

                Promise.all([
                  getAssetBalance(ctx, block, p.assetAId, p.id),
                  getAssetBalance(ctx, block, p.assetBId, p.id),
                ]).then(([assetABalance, assetBBalance]) => {
                  resolve({
                    id: p.id + '-' + parachainBlockNumber,
                    poolType: p.poolType,
                    assetABalance: assetABalance,
                    assetBBalance: assetBBalance,
                    pool: p,
                    relayChainBlockHeight: relayChainBlockNumber,
                    paraChainBlockHeight: parachainBlockNumber,
                  })
                })
              }),
          ),
        )
      }
    }
  }

  return (await Promise.all(poolPrices)).filter(isNotNullOrUndefined)
}

function getTransfers(ctx: Ctx): TransferEvent[] {
  let transfers: TransferEvent[] = []
  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.name == 'Balances.Transfer') {
        let e = new BalancesTransferEvent(ctx, item.event).asV72
        transfers.push({
          id: item.event.id,
          assetId: 0,
          blockNumber: block.header.height,
          timestamp: new Date(block.header.timestamp),
          extrinsicHash: item.event.extrinsic?.hash,
          from: hexUtil.toHex(e.from),
          to: hexUtil.toHex(e.to),
          amount: e.amount,
          fee: item.event.extrinsic?.fee || 0n,
        })
      } else if (item.name == 'Tokens.Transfer') {
        let e = new TokensTransferEvent(ctx, item.event).asV72
        transfers.push({
          id: item.event.id,
          assetId: e.currencyId,
          blockNumber: block.header.height,
          timestamp: new Date(block.header.timestamp),
          extrinsicHash: item.event.extrinsic?.hash,
          from: hexUtil.toHex(e.from),
          to: hexUtil.toHex(e.to),
          amount: e.amount,
          fee: item.event.extrinsic?.fee || 0n,
        })
      }
    }
  }
  return transfers
}

async function getPools(ctx: Ctx): Promise<PoolCreatedEvent[]> {
  let pools: PoolCreatedEvent[] = []
  for (let block of ctx.blocks) {
    if (block.header.height < 127000) continue // TODO TESTNET DEBUG -> REMOVE ME
    for (let item of block.items) {
      if (item.name == 'XYK.PoolCreated') {
        const e = new XykPoolCreatedEvent(ctx, item.event).asV72

        const assetABalance = await getAssetBalance(
          ctx,
          block,
          e.assetA,
          hexUtil.toHex(e.pool),
        )

        const assetBBalance = await getAssetBalance(
          ctx,
          block,
          e.assetB,
          hexUtil.toHex(e.pool),
        )

        pools.push({
          id: hexUtil.toHex(e.pool),
          assetAId: e.assetA,
          assetBId: e.assetB,
          assetABalance,
          assetBBalance,
          createdAt: block.header.height,
          poolType: PoolType.XYK,
        })
      } else if (item.name == 'LBP.PoolCreated') {
        const e = new LbpPoolCreatedEvent(ctx, item.event).asV72

        const assetABalance = await getAssetBalance(
          ctx,
          block,
          e.data.assets[0],
          hexUtil.toHex(e.pool),
        )

        const assetBBalance = await getAssetBalance(
          ctx,
          block,
          e.data.assets[1],
          hexUtil.toHex(e.pool),
        )

        pools.push({
          id: hexUtil.toHex(e.pool),
          assetAId: e.data.assets[0],
          assetBId: e.data.assets[1],
          assetABalance,
          assetBBalance,
          createdAt: block.header.height,
          poolType: PoolType.LBP,
          lbpPoolData: {
            owner: hexUtil.toHex(e.data.owner),
            feeCollector: hexUtil.toHex(e.data.feeCollector),
            fee: e.data.fee,
            initialWeight: e.data.initialWeight,
            finalWeight: e.data.finalWeight,
          },
        })
      }
    }
  }
  return pools
}

function getAccount(m: Map<string, Account>, id: string): Account {
  let acc = m.get(id)
  if (acc == null) {
    acc = new Account()
    acc.id = id
    m.set(id, acc)
  }
  return acc
}

async function getAssetBalance(
  ctx: Ctx,
  block: BatchBlock<Item>,
  assetId: number,
  account: string,
) {
  if (assetId === 0) {
    const storage = new SystemAccountStorage(ctx, block.header)
    return storage
      .getAsV72(hexUtil.decodeHex(account))
      .then((data) => data.data.free)
  } else {
    const storage = new TokensAccountsStorage(ctx, block.header)
    return storage
      .getAsV72(hexUtil.decodeHex(account), assetId)
      .then((data) => data.free)
  }
}
