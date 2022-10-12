import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'

export type PoolUpdateEventItem = EventItem<
  'LBP.PoolUpdated',
  {
    event: {
      args: true
    }
  }
>

interface ParsedPoolUpdate {
  poolId: Uint8Array
  poolData: LBPPoolDataUpdate
}
