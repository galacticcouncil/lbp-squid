import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v16 from './v16'
import * as v19 from './v19'
import * as v25 from './v25'
import * as v38 from './v38'
import * as v43 from './v43'
import * as v55 from './v55'
import * as v65 from './v65'
import * as v69 from './v69'
import * as v71 from './v71'
import * as v76 from './v76'
import * as v81 from './v81'

export class AssetRegistryAssetIdsStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRegistry'
    }

    protected getName() {
        return 'AssetIds'
    }

    /**
     *  Mapping between asset name and asset id.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'b2f6c9709a4d2ff893536be0ecdbcad0fa597aba78428cfcdfc6fef5a1c5414f'
    }

    /**
     *  Mapping between asset name and asset id.
     */
    get asV16(): AssetRegistryAssetIdsStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Mapping between asset name and asset id.
 */
export interface AssetRegistryAssetIdsStorageV16 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class AssetRegistryAssetLocationsStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRegistry'
    }

    protected getName() {
        return 'AssetLocations'
    }

    /**
     *  Native location of an asset.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'f2401056bfb799c8b98969888a3b2e81e0795ee1df950ec3514e2b0d5589e0fb'
    }

    /**
     *  Native location of an asset.
     */
    get asV16(): AssetRegistryAssetLocationsStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Native location of an asset.
     */
    get isV19(): boolean {
        return this.getTypeHash() === 'eebd4d580263615d6bb10688d4e8eeb0b42cf4cc03c34eeafd73be69f0c15863'
    }

    /**
     *  Native location of an asset.
     */
    get asV19(): AssetRegistryAssetLocationsStorageV19 {
        assert(this.isV19)
        return this as any
    }

    /**
     *  Native location of an asset.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '58dfe00b72f07bf6cab7f6a9e09ab29eb1bddff4ba0c36924d0917313958bca6'
    }

    /**
     *  Native location of an asset.
     */
    get asV25(): AssetRegistryAssetLocationsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Native location of an asset.
 */
export interface AssetRegistryAssetLocationsStorageV16 {
    get(key: number): Promise<(v16.AssetNativeLocation | undefined)>
    getAll(): Promise<v16.AssetNativeLocation[]>
    getMany(keys: number[]): Promise<(v16.AssetNativeLocation | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v16.AssetNativeLocation][]>
    getPairs(key: number): Promise<[k: number, v: v16.AssetNativeLocation][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v16.AssetNativeLocation][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v16.AssetNativeLocation][]>
}

/**
 *  Native location of an asset.
 */
export interface AssetRegistryAssetLocationsStorageV19 {
    get(key: number): Promise<(v19.AssetNativeLocation | undefined)>
    getAll(): Promise<v19.AssetNativeLocation[]>
    getMany(keys: number[]): Promise<(v19.AssetNativeLocation | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v19.AssetNativeLocation][]>
    getPairs(key: number): Promise<[k: number, v: v19.AssetNativeLocation][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v19.AssetNativeLocation][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v19.AssetNativeLocation][]>
}

/**
 *  Native location of an asset.
 */
export interface AssetRegistryAssetLocationsStorageV25 {
    get(key: number): Promise<(v25.AssetLocation | undefined)>
    getAll(): Promise<v25.AssetLocation[]>
    getMany(keys: number[]): Promise<(v25.AssetLocation | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v25.AssetLocation][]>
    getPairs(key: number): Promise<[k: number, v: v25.AssetLocation][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v25.AssetLocation][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v25.AssetLocation][]>
}

export class AssetRegistryAssetMetadataMapStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRegistry'
    }

    protected getName() {
        return 'AssetMetadataMap'
    }

    /**
     *  Metadata of an asset.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'baeb301fe81822ac12911469e04bf8d093313d49518fd2908c00cbdeff57ab9f'
    }

    /**
     *  Metadata of an asset.
     */
    get asV16(): AssetRegistryAssetMetadataMapStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Metadata of an asset.
 */
export interface AssetRegistryAssetMetadataMapStorageV16 {
    get(key: number): Promise<(v16.AssetMetadata | undefined)>
    getAll(): Promise<v16.AssetMetadata[]>
    getMany(keys: number[]): Promise<(v16.AssetMetadata | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v16.AssetMetadata][]>
    getPairs(key: number): Promise<[k: number, v: v16.AssetMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v16.AssetMetadata][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v16.AssetMetadata][]>
}

export class AssetRegistryAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRegistry'
    }

    protected getName() {
        return 'Assets'
    }

    /**
     *  Details of an asset.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'cb2896ed97f409738701c94c2e25f4da4f1016502488fddfaad2d48426d9517d'
    }

    /**
     *  Details of an asset.
     */
    get asV16(): AssetRegistryAssetsStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Details of an asset.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'b41077b00f9666bee941bfa5072e6470d7c3f76cc70583e553991180b004e89a'
    }

    /**
     *  Details of an asset.
     */
    get asV25(): AssetRegistryAssetsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Details of an asset.
 */
export interface AssetRegistryAssetsStorageV16 {
    get(key: number): Promise<(v16.AssetDetails | undefined)>
    getAll(): Promise<v16.AssetDetails[]>
    getMany(keys: number[]): Promise<(v16.AssetDetails | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v16.AssetDetails][]>
    getPairs(key: number): Promise<[k: number, v: v16.AssetDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v16.AssetDetails][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v16.AssetDetails][]>
}

/**
 *  Details of an asset.
 */
export interface AssetRegistryAssetsStorageV25 {
    get(key: number): Promise<(v25.AssetDetails | undefined)>
    getAll(): Promise<v25.AssetDetails[]>
    getMany(keys: number[]): Promise<(v25.AssetDetails | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v25.AssetDetails][]>
    getPairs(key: number): Promise<[k: number, v: v25.AssetDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v25.AssetDetails][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v25.AssetDetails][]>
}

export class AssetRegistryLocationAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRegistry'
    }

    protected getName() {
        return 'LocationAssets'
    }

    /**
     *  Local asset for native location.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '7c78969025e4fa7de4a9311bf227d34b06d9fe004e4e17b682a51ec4d386af57'
    }

    /**
     *  Local asset for native location.
     */
    get asV16(): AssetRegistryLocationAssetsStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Local asset for native location.
     */
    get isV19(): boolean {
        return this.getTypeHash() === '77a10b2caa99f1990cbda235167f510efc6548f5cce6a21628941b1574eef3b9'
    }

    /**
     *  Local asset for native location.
     */
    get asV19(): AssetRegistryLocationAssetsStorageV19 {
        assert(this.isV19)
        return this as any
    }

    /**
     *  Local asset for native location.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '3c043d5ada7fce2b8b426c49f9b15d1308835a7483919400e4c42d24e95b4193'
    }

    /**
     *  Local asset for native location.
     */
    get asV25(): AssetRegistryLocationAssetsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Local asset for native location.
 */
export interface AssetRegistryLocationAssetsStorageV16 {
    get(key: v16.AssetNativeLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: v16.AssetNativeLocation[]): Promise<(number | undefined)[]>
    getKeys(): Promise<v16.AssetNativeLocation[]>
    getKeys(key: v16.AssetNativeLocation): Promise<v16.AssetNativeLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v16.AssetNativeLocation[]>
    getKeysPaged(pageSize: number, key: v16.AssetNativeLocation): AsyncIterable<v16.AssetNativeLocation[]>
    getPairs(): Promise<[k: v16.AssetNativeLocation, v: number][]>
    getPairs(key: v16.AssetNativeLocation): Promise<[k: v16.AssetNativeLocation, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v16.AssetNativeLocation, v: number][]>
    getPairsPaged(pageSize: number, key: v16.AssetNativeLocation): AsyncIterable<[k: v16.AssetNativeLocation, v: number][]>
}

/**
 *  Local asset for native location.
 */
export interface AssetRegistryLocationAssetsStorageV19 {
    get(key: v19.AssetNativeLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: v19.AssetNativeLocation[]): Promise<(number | undefined)[]>
    getKeys(): Promise<v19.AssetNativeLocation[]>
    getKeys(key: v19.AssetNativeLocation): Promise<v19.AssetNativeLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v19.AssetNativeLocation[]>
    getKeysPaged(pageSize: number, key: v19.AssetNativeLocation): AsyncIterable<v19.AssetNativeLocation[]>
    getPairs(): Promise<[k: v19.AssetNativeLocation, v: number][]>
    getPairs(key: v19.AssetNativeLocation): Promise<[k: v19.AssetNativeLocation, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v19.AssetNativeLocation, v: number][]>
    getPairsPaged(pageSize: number, key: v19.AssetNativeLocation): AsyncIterable<[k: v19.AssetNativeLocation, v: number][]>
}

/**
 *  Local asset for native location.
 */
export interface AssetRegistryLocationAssetsStorageV25 {
    get(key: v25.AssetLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: v25.AssetLocation[]): Promise<(number | undefined)[]>
    getKeys(): Promise<v25.AssetLocation[]>
    getKeys(key: v25.AssetLocation): Promise<v25.AssetLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v25.AssetLocation[]>
    getKeysPaged(pageSize: number, key: v25.AssetLocation): AsyncIterable<v25.AssetLocation[]>
    getPairs(): Promise<[k: v25.AssetLocation, v: number][]>
    getPairs(key: v25.AssetLocation): Promise<[k: v25.AssetLocation, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v25.AssetLocation, v: number][]>
    getPairsPaged(pageSize: number, key: v25.AssetLocation): AsyncIterable<[k: v25.AssetLocation, v: number][]>
}

export class AssetRegistryNextAssetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRegistry'
    }

    protected getName() {
        return 'NextAssetId'
    }

    /**
     *  Next available asset id. This is sequential id assigned for each new registered asset.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Next available asset id. This is sequential id assigned for each new registered asset.
     */
    get asV16(): AssetRegistryNextAssetIdStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Next available asset id. This is sequential id assigned for each new registered asset.
 */
export interface AssetRegistryNextAssetIdStorageV16 {
    get(): Promise<number>
}

export class AuthorshipAuthorStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Author'
    }

    /**
     *  Author of current block.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Author of current block.
     */
    get asV16(): AuthorshipAuthorStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Author of current block.
 */
export interface AuthorshipAuthorStorageV16 {
    get(): Promise<(Uint8Array | undefined)>
}

export class AuthorshipDidSetUnclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'DidSetUncles'
    }

    /**
     *  Whether uncles were already set in this block.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether uncles were already set in this block.
     */
    get asV16(): AuthorshipDidSetUnclesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Whether uncles were already set in this block.
 */
export interface AuthorshipDidSetUnclesStorageV16 {
    get(): Promise<boolean>
}

export class AuthorshipUnclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Uncles'
    }

    /**
     *  Uncles
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'e10c952327a3967ba23352da69594b66914b44ebcef7e4703bb69fed952ecdd6'
    }

    /**
     *  Uncles
     */
    get asV16(): AuthorshipUnclesStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Uncles
     */
    get isV25(): boolean {
        return this.getTypeHash() === '320be201dc467df78c8912d3a5ad0cb57cd9b25ab8bff2e738597ffc0a83b551'
    }

    /**
     *  Uncles
     */
    get asV25(): AuthorshipUnclesStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Uncles
 */
export interface AuthorshipUnclesStorageV16 {
    get(): Promise<v16.UncleEntryItem[]>
}

/**
 *  Uncles
 */
export interface AuthorshipUnclesStorageV25 {
    get(): Promise<v25.UncleEntryItem[]>
}

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV16(): BalancesAccountStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV16 {
    get(key: Uint8Array): Promise<v16.AccountData>
    getAll(): Promise<v16.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v16.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.AccountData][]>
}

export class BalancesLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV16(): BalancesLocksStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageV16 {
    get(key: Uint8Array): Promise<v16.BalanceLock[]>
    getAll(): Promise<v16.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<v16.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.BalanceLock[]][]>
}

export class BalancesReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV16(): BalancesReservesStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '9fef068876a219033e80c9d9ef67cd9e3fe6e2aac77e946a7f6f40c8f975bf5b'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV38(): BalancesReservesStorageV38 {
        assert(this.isV38)
        return this as any
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV65(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV65(): BalancesReservesStorageV65 {
        assert(this.isV65)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageV16 {
    get(key: Uint8Array): Promise<v16.ReserveData[]>
    getAll(): Promise<v16.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v16.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.ReserveData[]][]>
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageV38 {
    get(key: Uint8Array): Promise<v38.ReserveData[]>
    getAll(): Promise<v38.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v38.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v38.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v38.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v38.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v38.ReserveData[]][]>
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageV65 {
    get(key: Uint8Array): Promise<v65.ReserveData[]>
    getAll(): Promise<v65.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v65.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v65.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v65.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v65.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v65.ReserveData[]][]>
}

export class BalancesStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asV16(): BalancesStorageVersionStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asV25(): BalancesStorageVersionStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageV16 {
    get(): Promise<v16.Releases>
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageV25 {
    get(): Promise<v25.Releases>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV16(): BalancesTotalIssuanceStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV16 {
    get(): Promise<bigint>
}

export class CollatorSelectionCandidacyBondStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorSelection'
    }

    protected getName() {
        return 'CandidacyBond'
    }

    /**
     *  Fixed deposit bond for each candidate.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Fixed deposit bond for each candidate.
     */
    get asV16(): CollatorSelectionCandidacyBondStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Fixed deposit bond for each candidate.
 */
export interface CollatorSelectionCandidacyBondStorageV16 {
    get(): Promise<bigint>
}

export class CollatorSelectionCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorSelection'
    }

    protected getName() {
        return 'Candidates'
    }

    /**
     *  The (community, limited) collation candidates.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '239ae5a83674078569642b29549b6d89d616b5748799fde8f01f3356f32141fd'
    }

    /**
     *  The (community, limited) collation candidates.
     */
    get asV16(): CollatorSelectionCandidatesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The (community, limited) collation candidates.
 */
export interface CollatorSelectionCandidatesStorageV16 {
    get(): Promise<v16.CandidateInfo[]>
}

export class CollatorSelectionDesiredCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorSelection'
    }

    protected getName() {
        return 'DesiredCandidates'
    }

    /**
     *  Desired number of candidates.
     * 
     *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Desired number of candidates.
     * 
     *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
     */
    get asV16(): CollatorSelectionDesiredCandidatesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Desired number of candidates.
 * 
 *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
 */
export interface CollatorSelectionDesiredCandidatesStorageV16 {
    get(): Promise<number>
}

export class CollatorSelectionInvulnerablesStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorSelection'
    }

    protected getName() {
        return 'Invulnerables'
    }

    /**
     *  The invulnerable, fixed collators.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The invulnerable, fixed collators.
     */
    get asV16(): CollatorSelectionInvulnerablesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The invulnerable, fixed collators.
 */
export interface CollatorSelectionInvulnerablesStorageV16 {
    get(): Promise<Uint8Array[]>
}

export class CollatorSelectionLastAuthoredBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorSelection'
    }

    protected getName() {
        return 'LastAuthoredBlock'
    }

    /**
     *  Last block authored by collator.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  Last block authored by collator.
     */
    get asV16(): CollatorSelectionLastAuthoredBlockStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Last block authored by collator.
 */
export interface CollatorSelectionLastAuthoredBlockStorageV16 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class CouncilMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV25(): CouncilMembersStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV25 {
    get(): Promise<Uint8Array[]>
}

export class CouncilPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV25(): CouncilPrimeStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface CouncilPrimeStorageV25 {
    get(): Promise<(Uint8Array | undefined)>
}

export class CouncilProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV25(): CouncilProposalCountStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV25 {
    get(): Promise<number>
}

export class CouncilProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'f15f18dbb29d2b02a4587232b780e25a2eb024284970ccbd6450ac7a1d09d3ea'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV25(): CouncilProposalOfStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '1ac560650690d36290194953cc63fa6a0a40e9a291bbf1fd8d8822aa80283a2e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV38(): CouncilProposalOfStorageV38 {
        assert(this.isV38)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV43(): boolean {
        return this.getTypeHash() === '6c32784600097763396a9d6ed2cdb8fea2f274fb6bdcdd593ebc3e37e61555d2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV43(): CouncilProposalOfStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV55(): boolean {
        return this.getTypeHash() === 'dc20f54a7aa8bd158193ca1cd81811d531a2f6dd81a31ec231d37a6d502c6eaf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV55(): CouncilProposalOfStorageV55 {
        assert(this.isV55)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV65(): boolean {
        return this.getTypeHash() === '43ec1e4f4a6ba0edbbca67ee06379cba4e8a527fa11bad2dee2fd27970a4dd24'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV65(): CouncilProposalOfStorageV65 {
        assert(this.isV65)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV69(): boolean {
        return this.getTypeHash() === '6a9f8ef74fb009d3a1fd9eab8e5fd5b140259527353a802492fd8805ea46346d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV69(): CouncilProposalOfStorageV69 {
        assert(this.isV69)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV76(): boolean {
        return this.getTypeHash() === '3139bede1891fa32ec68cbfda59e169e3a8ec9dc8a98058e02ac0f7cae6589b2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV76(): CouncilProposalOfStorageV76 {
        assert(this.isV76)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV81(): boolean {
        return this.getTypeHash() === 'c23fea02087dc5044b91542a294db489c177d079476732e191c6595898fed063'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV81(): CouncilProposalOfStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV25 {
    get(key: Uint8Array): Promise<(v25.Call | undefined)>
    getAll(): Promise<v25.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v25.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV38 {
    get(key: Uint8Array): Promise<(v38.Call | undefined)>
    getAll(): Promise<v38.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v38.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v38.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v38.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v38.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v38.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV43 {
    get(key: Uint8Array): Promise<(v43.Call | undefined)>
    getAll(): Promise<v43.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v43.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v43.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v43.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v43.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v43.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV55 {
    get(key: Uint8Array): Promise<(v55.Call | undefined)>
    getAll(): Promise<v55.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v55.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v55.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v55.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v55.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v55.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV65 {
    get(key: Uint8Array): Promise<(v65.Call | undefined)>
    getAll(): Promise<v65.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v65.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v65.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v65.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v65.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v65.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV69 {
    get(key: Uint8Array): Promise<(v69.Call | undefined)>
    getAll(): Promise<v69.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v69.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v69.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v69.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v69.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v69.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV76 {
    get(key: Uint8Array): Promise<(v76.Call | undefined)>
    getAll(): Promise<v76.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v76.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v76.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v76.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v76.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v76.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV81 {
    get(key: Uint8Array): Promise<(v81.Call | undefined)>
    getAll(): Promise<v81.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v81.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v81.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v81.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v81.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v81.Call][]>
}

export class CouncilProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV25(): CouncilProposalsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface CouncilProposalsStorageV25 {
    get(): Promise<Uint8Array[]>
}

export class CouncilVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV25(): CouncilVotingStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface CouncilVotingStorageV25 {
    get(key: Uint8Array): Promise<(v25.Votes | undefined)>
    getAll(): Promise<v25.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v25.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.Votes][]>
}

export class DemocracyBlacklistStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Blacklist'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get asV16(): DemocracyBlacklistStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface DemocracyBlacklistStorageV16 {
    get(key: Uint8Array): Promise<([number, Uint8Array[]] | undefined)>
    getAll(): Promise<[number, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<([number, Uint8Array[]] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
}

export class DemocracyCancellationsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Cancellations'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get asV16(): DemocracyCancellationsStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface DemocracyCancellationsStorageV16 {
    get(key: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<boolean[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: boolean][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: boolean][]>
}

export class DemocracyDepositOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'DepositOf'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get asV16(): DemocracyDepositOfStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DemocracyDepositOfStorageV16 {
    get(key: number): Promise<([Uint8Array[], bigint] | undefined)>
    getAll(): Promise<[Uint8Array[], bigint][]>
    getMany(keys: number[]): Promise<([Uint8Array[], bigint] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
}

export class DemocracyLastTabledWasExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LastTabledWasExternal'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get asV16(): DemocracyLastTabledWasExternalStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface DemocracyLastTabledWasExternalStorageV16 {
    get(): Promise<boolean>
}

export class DemocracyLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Accounts for which there are locks in action which may be removed at some point in the
     *  future. The value is the block number at which the lock expires and may be removed.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  Accounts for which there are locks in action which may be removed at some point in the
     *  future. The value is the block number at which the lock expires and may be removed.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV16(): DemocracyLocksStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Accounts for which there are locks in action which may be removed at some point in the
 *  future. The value is the block number at which the lock expires and may be removed.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface DemocracyLocksStorageV16 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class DemocracyLowestUnbakedStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LowestUnbaked'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get asV16(): DemocracyLowestUnbakedStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface DemocracyLowestUnbakedStorageV16 {
    get(): Promise<number>
}

export class DemocracyNextExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'NextExternal'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'a0dc59850ecbf888b39265215bce88e2141aafdd4f4300c99be6819a82e4ef15'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asV16(): DemocracyNextExternalStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageV16 {
    get(): Promise<([Uint8Array, v16.VoteThreshold] | undefined)>
}

export class DemocracyPreimagesStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Preimages'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV16(): DemocracyPreimagesStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV25(): DemocracyPreimagesStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV16 {
    get(key: Uint8Array): Promise<(v16.PreimageStatus | undefined)>
    getAll(): Promise<v16.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v16.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.PreimageStatus][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV25 {
    get(key: Uint8Array): Promise<(v25.PreimageStatus | undefined)>
    getAll(): Promise<v25.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v25.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.PreimageStatus][]>
}

export class DemocracyPublicPropCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicPropCount'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV16(): DemocracyPublicPropCountStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV16 {
    get(): Promise<number>
}

export class DemocracyPublicPropsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicProps'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV16(): DemocracyPublicPropsStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV16 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

export class DemocracyReferendumCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumCount'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asV16(): DemocracyReferendumCountStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface DemocracyReferendumCountStorageV16 {
    get(): Promise<number>
}

export class DemocracyReferendumInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumInfoOf'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV16(): DemocracyReferendumInfoOfStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV25(): DemocracyReferendumInfoOfStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV16 {
    get(key: number): Promise<(v16.ReferendumInfo | undefined)>
    getAll(): Promise<v16.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v16.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v16.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v16.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v16.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v16.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV25 {
    get(key: number): Promise<(v25.ReferendumInfo | undefined)>
    getAll(): Promise<v25.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v25.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v25.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v25.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v25.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v25.ReferendumInfo][]>
}

export class DemocracyStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'd0303e1bae0fc34655f81e27ee4b2eb0fb0d3ce283cc0e6cd4de7efaeb1119f2'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV16(): DemocracyStorageVersionStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '6db8ed5d5df9fd63b90aeccdc02dcd10fe08fc684dc39aff8104b09be9ab54e9'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV25(): DemocracyStorageVersionStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface DemocracyStorageVersionStorageV16 {
    get(): Promise<(v16.Releases | undefined)>
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface DemocracyStorageVersionStorageV25 {
    get(): Promise<(v25.Type_274 | undefined)>
}

export class DemocracyVotingOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'VotingOf'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '1b8d82fbf262dcaeba801105bb1e0dcfa6b2f7c3b76feb5fa9d27716f50903d2'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asV16(): DemocracyVotingOfStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asV25(): DemocracyVotingOfStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageV16 {
    get(key: Uint8Array): Promise<v16.Voting>
    getAll(): Promise<v16.Voting[]>
    getMany(keys: Uint8Array[]): Promise<v16.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.Voting][]>
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageV25 {
    get(key: Uint8Array): Promise<v25.Voting>
    getAll(): Promise<v25.Voting[]>
    getMany(keys: Uint8Array[]): Promise<v25.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.Voting][]>
}

export class DmpQueueConfigurationStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Configuration'
    }

    /**
     *  The configuration.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'de2fc633d896ffed21e1f630f0a1bfe710ecfa69921c58a4a758e7fd49d0b5a4'
    }

    /**
     *  The configuration.
     */
    get asV16(): DmpQueueConfigurationStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  The configuration.
     */
    get isV81(): boolean {
        return this.getTypeHash() === '67bde14908f93a3aea4aa5877726bd296c59aa66227203739244319bbf5fb443'
    }

    /**
     *  The configuration.
     */
    get asV81(): DmpQueueConfigurationStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageV16 {
    get(): Promise<v16.ConfigData>
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageV81 {
    get(): Promise<v81.ConfigData>
}

export class DmpQueueOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The overweight messages.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
    }

    /**
     *  The overweight messages.
     */
    get asV16(): DmpQueueOverweightStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The overweight messages.
 */
export interface DmpQueueOverweightStorageV16 {
    get(key: bigint): Promise<([number, Uint8Array] | undefined)>
    getAll(): Promise<[number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
}

export class DmpQueuePageIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'PageIndex'
    }

    /**
     *  The page index.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'cad43146ccd742f66da886b2f77b13d96d2c4de637fbb965a7493a2f16c99189'
    }

    /**
     *  The page index.
     */
    get asV16(): DmpQueuePageIndexStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The page index.
 */
export interface DmpQueuePageIndexStorageV16 {
    get(): Promise<v16.PageIndexData>
}

export class DmpQueuePagesStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Pages'
    }

    /**
     *  The queue pages.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '0b9460c8234ca1e6341c95066d20ac8d7e79e3a9b2def20c9450f88ef0ab1b1d'
    }

    /**
     *  The queue pages.
     */
    get asV16(): DmpQueuePagesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The queue pages.
 */
export interface DmpQueuePagesStorageV16 {
    get(key: number): Promise<[number, Uint8Array][]>
    getAll(): Promise<[number, Uint8Array][][]>
    getMany(keys: number[]): Promise<[number, Uint8Array][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, Uint8Array][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, Uint8Array][]][]>
}

export class DusterAccountBlacklistStorage extends StorageBase {
    protected getPrefix() {
        return 'Duster'
    }

    protected getName() {
        return 'AccountBlacklist'
    }

    /**
     *  Accounts excluded from dusting.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '29735300dba5135be0e1e53d771089aba86ed92479018d68d31c9d66cb9816e3'
    }

    /**
     *  Accounts excluded from dusting.
     */
    get asV16(): DusterAccountBlacklistStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Accounts excluded from dusting.
 */
export interface DusterAccountBlacklistStorageV16 {
    get(key: Uint8Array): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: Uint8Array[]): Promise<(null | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: null][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: null][]>
}

export class DusterDustAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Duster'
    }

    protected getName() {
        return 'DustAccount'
    }

    /**
     *  Account to send dust to.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account to send dust to.
     */
    get asV16(): DusterDustAccountStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Account to send dust to.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Account to send dust to.
     */
    get asV38(): DusterDustAccountStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Account to send dust to.
 */
export interface DusterDustAccountStorageV16 {
    get(): Promise<Uint8Array>
}

/**
 *  Account to send dust to.
 */
export interface DusterDustAccountStorageV38 {
    get(): Promise<(Uint8Array | undefined)>
}

export class DusterRewardAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Duster'
    }

    protected getName() {
        return 'RewardAccount'
    }

    /**
     *  Account to take reward from.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account to take reward from.
     */
    get asV16(): DusterRewardAccountStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Account to take reward from.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Account to take reward from.
     */
    get asV38(): DusterRewardAccountStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Account to take reward from.
 */
export interface DusterRewardAccountStorageV16 {
    get(): Promise<Uint8Array>
}

/**
 *  Account to take reward from.
 */
export interface DusterRewardAccountStorageV38 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ElectionsCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'Elections'
    }

    protected getName() {
        return 'Candidates'
    }

    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'adcae43ed1e902c328abdddddb49e0dff8ba91c01e22ef88c186fdf0463008bd'
    }

    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get asV16(): ElectionsCandidatesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The present candidate list. A current member or runner-up can never enter this vector
 *  and is always implicitly assumed to be a candidate.
 * 
 *  Second element is the deposit.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface ElectionsCandidatesStorageV16 {
    get(): Promise<[Uint8Array, bigint][]>
}

export class ElectionsElectionRoundsStorage extends StorageBase {
    protected getPrefix() {
        return 'Elections'
    }

    protected getName() {
        return 'ElectionRounds'
    }

    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    get asV16(): ElectionsElectionRoundsStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface ElectionsElectionRoundsStorageV16 {
    get(): Promise<number>
}

export class ElectionsMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Elections'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get asV16(): ElectionsMembersStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface ElectionsMembersStorageV16 {
    get(): Promise<v16.SeatHolder[]>
}

export class ElectionsRunnersUpStorage extends StorageBase {
    protected getPrefix() {
        return 'Elections'
    }

    protected getName() {
        return 'RunnersUp'
    }

    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    get asV16(): ElectionsRunnersUpStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface ElectionsRunnersUpStorageV16 {
    get(): Promise<v16.SeatHolder[]>
}

export class ElectionsVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Elections'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '402dfebd0f940ad46e7a8f40f06109618105f99668e323b7a2f66bb12e66e352'
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    get asV16(): ElectionsVotingStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface ElectionsVotingStorageV16 {
    get(key: Uint8Array): Promise<v16.Voter>
    getAll(): Promise<v16.Voter[]>
    getMany(keys: Uint8Array[]): Promise<v16.Voter[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.Voter][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.Voter][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.Voter][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.Voter][]>
}

export class ExchangeExchangeAssetsIntentionCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Exchange'
    }

    protected getName() {
        return 'ExchangeAssetsIntentionCount'
    }

    /**
     *  Intention count for current block
     */
    get isV16(): boolean {
        return this.getTypeHash() === '41d107d8804760c60452c36f4677b29c987678b8fec179ecaec1902539deb294'
    }

    /**
     *  Intention count for current block
     */
    get asV16(): ExchangeExchangeAssetsIntentionCountStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Intention count for current block
 */
export interface ExchangeExchangeAssetsIntentionCountStorageV16 {
    get(key: [number, number]): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [number, number][]): Promise<number[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key: [number, number]): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key: [number, number]): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: number][]>
    getPairs(key: [number, number]): Promise<[k: [number, number], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: number][]>
    getPairsPaged(pageSize: number, key: [number, number]): AsyncIterable<[k: [number, number], v: number][]>
}

export class ExchangeExchangeAssetsIntentionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Exchange'
    }

    protected getName() {
        return 'ExchangeAssetsIntentions'
    }

    /**
     *  Registered intentions for current block
     *  Stored as ( asset_a, asset_b ) combination where asset_a is meant to be exchanged for asset_b ( asset_a < asset_b)
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'efdab041201d85d1751707e79085cfdde8aa2db4e93558e39076a8b553cfaf84'
    }

    /**
     *  Registered intentions for current block
     *  Stored as ( asset_a, asset_b ) combination where asset_a is meant to be exchanged for asset_b ( asset_a < asset_b)
     */
    get asV16(): ExchangeExchangeAssetsIntentionsStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Registered intentions for current block
     *  Stored as ( asset_a, asset_b ) combination where asset_a is meant to be exchanged for asset_b ( asset_a < asset_b)
     */
    get isV25(): boolean {
        return this.getTypeHash() === '98fb8bb6c24167c2ed5183d81bf3806a67b356a9eb4cdb6da1d7f9c83be96858'
    }

    /**
     *  Registered intentions for current block
     *  Stored as ( asset_a, asset_b ) combination where asset_a is meant to be exchanged for asset_b ( asset_a < asset_b)
     */
    get asV25(): ExchangeExchangeAssetsIntentionsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Registered intentions for current block
 *  Stored as ( asset_a, asset_b ) combination where asset_a is meant to be exchanged for asset_b ( asset_a < asset_b)
 */
export interface ExchangeExchangeAssetsIntentionsStorageV16 {
    get(key: [number, number]): Promise<v16.Intention[]>
    getAll(): Promise<v16.Intention[][]>
    getMany(keys: [number, number][]): Promise<v16.Intention[][]>
    getKeys(): Promise<[number, number][]>
    getKeys(key: [number, number]): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key: [number, number]): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v16.Intention[]][]>
    getPairs(key: [number, number]): Promise<[k: [number, number], v: v16.Intention[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v16.Intention[]][]>
    getPairsPaged(pageSize: number, key: [number, number]): AsyncIterable<[k: [number, number], v: v16.Intention[]][]>
}

/**
 *  Registered intentions for current block
 *  Stored as ( asset_a, asset_b ) combination where asset_a is meant to be exchanged for asset_b ( asset_a < asset_b)
 */
export interface ExchangeExchangeAssetsIntentionsStorageV25 {
    get(key: [number, number]): Promise<v25.ExchangeIntention[]>
    getAll(): Promise<v25.ExchangeIntention[][]>
    getMany(keys: [number, number][]): Promise<v25.ExchangeIntention[][]>
    getKeys(): Promise<[number, number][]>
    getKeys(key: [number, number]): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key: [number, number]): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v25.ExchangeIntention[]][]>
    getPairs(key: [number, number]): Promise<[k: [number, number], v: v25.ExchangeIntention[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v25.ExchangeIntention[]][]>
    getPairsPaged(pageSize: number, key: [number, number]): AsyncIterable<[k: [number, number], v: v25.ExchangeIntention[]][]>
}

export class IdentityIdentityOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'IdentityOf'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV55(): boolean {
        return this.getTypeHash() === 'eee9529c5197f7a5f8200e155d78bab0a612de49bd6c8941e539265edf54c3aa'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV55(): IdentityIdentityOfStorageV55 {
        assert(this.isV55)
        return this as any
    }
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityIdentityOfStorageV55 {
    get(key: Uint8Array): Promise<(v55.Registration | undefined)>
    getAll(): Promise<v55.Registration[]>
    getMany(keys: Uint8Array[]): Promise<(v55.Registration | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v55.Registration][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v55.Registration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v55.Registration][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v55.Registration][]>
}

export class IdentityRegistrarsStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'Registrars'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get isV55(): boolean {
        return this.getTypeHash() === 'd53feea500c88336983c65706eeb51794b1fc991a17d6d33663d49aeb47b12b6'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get asV55(): IdentityRegistrarsStorageV55 {
        assert(this.isV55)
        return this as any
    }
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface IdentityRegistrarsStorageV55 {
    get(): Promise<(v55.RegistrarInfo | undefined)[]>
}

export class IdentitySubsOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SubsOf'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isV55(): boolean {
        return this.getTypeHash() === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asV55(): IdentitySubsOfStorageV55 {
        assert(this.isV55)
        return this as any
    }
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentitySubsOfStorageV55 {
    get(key: Uint8Array): Promise<[bigint, Uint8Array[]]>
    getAll(): Promise<[bigint, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, Uint8Array[]][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
}

export class IdentitySuperOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SuperOf'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get isV55(): boolean {
        return this.getTypeHash() === '3e2404306f316847b5946856f8222df193ecb9ace5e509cd9f8808145fd9b792'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get asV55(): IdentitySuperOfStorageV55 {
        assert(this.isV55)
        return this as any
    }
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface IdentitySuperOfStorageV55 {
    get(key: Uint8Array): Promise<([Uint8Array, v55.Data] | undefined)>
    getAll(): Promise<[Uint8Array, v55.Data][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, v55.Data] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, v55.Data]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, v55.Data]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v55.Data]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, v55.Data]][]>
}

export class Instance1CollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV16(): Instance1CollectiveMembersStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance1CollectiveMembersStorageV16 {
    get(): Promise<Uint8Array[]>
}

export class Instance1CollectivePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV16(): Instance1CollectivePrimeStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface Instance1CollectivePrimeStorageV16 {
    get(): Promise<(Uint8Array | undefined)>
}

export class Instance1CollectiveProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV16(): Instance1CollectiveProposalCountStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance1CollectiveProposalCountStorageV16 {
    get(): Promise<number>
}

export class Instance1CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'd348a1fbf955ec113abf057b3f63821bc2abdce459502f94f9c2f9f9d1d2ffb2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV16(): Instance1CollectiveProposalOfStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV19(): boolean {
        return this.getTypeHash() === '316d3f189b3daac25473a2e9a3537d9c1cf05be71bebce97b8f45dbbdfe3400c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV19(): Instance1CollectiveProposalOfStorageV19 {
        assert(this.isV19)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV16 {
    get(key: Uint8Array): Promise<(v16.Proposal | undefined)>
    getAll(): Promise<v16.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v16.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV19 {
    get(key: Uint8Array): Promise<(v19.Proposal | undefined)>
    getAll(): Promise<v19.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v19.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v19.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v19.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v19.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v19.Proposal][]>
}

export class Instance1CollectiveProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV16(): Instance1CollectiveProposalsStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface Instance1CollectiveProposalsStorageV16 {
    get(): Promise<Uint8Array[]>
}

export class Instance1CollectiveVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV16(): Instance1CollectiveVotingStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface Instance1CollectiveVotingStorageV16 {
    get(key: Uint8Array): Promise<(v16.Votes | undefined)>
    getAll(): Promise<v16.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v16.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.Votes][]>
}

export class Instance2CollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV16(): Instance2CollectiveMembersStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance2CollectiveMembersStorageV16 {
    get(): Promise<Uint8Array[]>
}

export class Instance2CollectivePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV16(): Instance2CollectivePrimeStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface Instance2CollectivePrimeStorageV16 {
    get(): Promise<(Uint8Array | undefined)>
}

export class Instance2CollectiveProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV16(): Instance2CollectiveProposalCountStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance2CollectiveProposalCountStorageV16 {
    get(): Promise<number>
}

export class Instance2CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'd348a1fbf955ec113abf057b3f63821bc2abdce459502f94f9c2f9f9d1d2ffb2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV16(): Instance2CollectiveProposalOfStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV19(): boolean {
        return this.getTypeHash() === '316d3f189b3daac25473a2e9a3537d9c1cf05be71bebce97b8f45dbbdfe3400c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV19(): Instance2CollectiveProposalOfStorageV19 {
        assert(this.isV19)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV16 {
    get(key: Uint8Array): Promise<(v16.Proposal | undefined)>
    getAll(): Promise<v16.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v16.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV19 {
    get(key: Uint8Array): Promise<(v19.Proposal | undefined)>
    getAll(): Promise<v19.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v19.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v19.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v19.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v19.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v19.Proposal][]>
}

export class Instance2CollectiveProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV16(): Instance2CollectiveProposalsStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface Instance2CollectiveProposalsStorageV16 {
    get(): Promise<Uint8Array[]>
}

export class Instance2CollectiveVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV16(): Instance2CollectiveVotingStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface Instance2CollectiveVotingStorageV16 {
    get(key: Uint8Array): Promise<(v16.Votes | undefined)>
    getAll(): Promise<v16.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v16.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.Votes][]>
}

export class LBPFeeCollectorWithAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'LBP'
    }

    protected getName() {
        return 'FeeCollectorWithAsset'
    }

    /**
     *  Storage used for tracking existing fee collectors
     *  Not more than one fee collector per asset possible
     */
    get isV38(): boolean {
        return this.getTypeHash() === 'ebdf043edab397a5ed3d655551fad928a7307d1bde214adf993157ad9d1521e0'
    }

    /**
     *  Storage used for tracking existing fee collectors
     *  Not more than one fee collector per asset possible
     */
    get asV38(): LBPFeeCollectorWithAssetStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Storage used for tracking existing fee collectors
 *  Not more than one fee collector per asset possible
 */
export interface LBPFeeCollectorWithAssetStorageV38 {
    get(key1: Uint8Array, key2: number): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: [Uint8Array, number][]): Promise<boolean[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: boolean][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: boolean][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: boolean][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: boolean][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: boolean][]>
}

export class LBPPoolDataStorage extends StorageBase {
    protected getPrefix() {
        return 'LBP'
    }

    protected getName() {
        return 'PoolData'
    }

    /**
     *  Details of a pool.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '607034eacf71ca9a6b098cf17989230a200f0a2e0fa4fb0eb027dbcd9e0a5b77'
    }

    /**
     *  Details of a pool.
     */
    get asV16(): LBPPoolDataStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Details of a pool.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'd69333e6537c39deb92990a3d51aca063a89c113c5ad9ae45e06c058b5d83e86'
    }

    /**
     *  Details of a pool.
     */
    get asV25(): LBPPoolDataStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  Details of a pool.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '122378a7b6f80edd2b209a84c4ae915782df86cf92d66d0932085716a7dbccf9'
    }

    /**
     *  Details of a pool.
     */
    get asV38(): LBPPoolDataStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Details of a pool.
 */
export interface LBPPoolDataStorageV16 {
    get(key: Uint8Array): Promise<v16.Pool>
    getAll(): Promise<v16.Pool[]>
    getMany(keys: Uint8Array[]): Promise<v16.Pool[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.Pool][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.Pool][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.Pool][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.Pool][]>
}

/**
 *  Details of a pool.
 */
export interface LBPPoolDataStorageV25 {
    get(key: Uint8Array): Promise<v25.Pool>
    getAll(): Promise<v25.Pool[]>
    getMany(keys: Uint8Array[]): Promise<v25.Pool[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.Pool][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.Pool][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.Pool][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.Pool][]>
}

/**
 *  Details of a pool.
 */
export interface LBPPoolDataStorageV38 {
    get(key: Uint8Array): Promise<(v38.Pool | undefined)>
    getAll(): Promise<v38.Pool[]>
    getMany(keys: Uint8Array[]): Promise<(v38.Pool | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v38.Pool][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v38.Pool][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v38.Pool][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v38.Pool][]>
}

export class LiquidityMiningDepositDataStorage extends StorageBase {
    protected getPrefix() {
        return 'LiquidityMining'
    }

    protected getName() {
        return 'DepositData'
    }

    /**
     *  Deposit details.
     */
    get isV43(): boolean {
        return this.getTypeHash() === 'a95b5e9ff8224bfbdadfb66fa6375b6c301db05f1d95a50d44d9acf021b7d9a2'
    }

    /**
     *  Deposit details.
     */
    get asV43(): LiquidityMiningDepositDataStorageV43 {
        assert(this.isV43)
        return this as any
    }
}

/**
 *  Deposit details.
 */
export interface LiquidityMiningDepositDataStorageV43 {
    get(key: bigint): Promise<(v43.Deposit | undefined)>
    getAll(): Promise<v43.Deposit[]>
    getMany(keys: bigint[]): Promise<(v43.Deposit | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v43.Deposit][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v43.Deposit][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v43.Deposit][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v43.Deposit][]>
}

export class LiquidityMiningGlobalPoolDataStorage extends StorageBase {
    protected getPrefix() {
        return 'LiquidityMining'
    }

    protected getName() {
        return 'GlobalPoolData'
    }

    /**
     *  Global pool details.
     */
    get isV43(): boolean {
        return this.getTypeHash() === '7c30e81ddc9331a03b57c4399dafb2f234ac8b51def590598699361d943606c1'
    }

    /**
     *  Global pool details.
     */
    get asV43(): LiquidityMiningGlobalPoolDataStorageV43 {
        assert(this.isV43)
        return this as any
    }
}

/**
 *  Global pool details.
 */
export interface LiquidityMiningGlobalPoolDataStorageV43 {
    get(key: number): Promise<(v43.GlobalPool | undefined)>
    getAll(): Promise<v43.GlobalPool[]>
    getMany(keys: number[]): Promise<(v43.GlobalPool | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v43.GlobalPool][]>
    getPairs(key: number): Promise<[k: number, v: v43.GlobalPool][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v43.GlobalPool][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v43.GlobalPool][]>
}

export class LiquidityMiningLiquidityPoolDataStorage extends StorageBase {
    protected getPrefix() {
        return 'LiquidityMining'
    }

    protected getName() {
        return 'LiquidityPoolData'
    }

    /**
     *  Liquidity pool yield farm details.
     */
    get isV43(): boolean {
        return this.getTypeHash() === '0ddd5a5c43c54d55a1ee2fbb49922411223db7440196eecb35d8e4b996522c19'
    }

    /**
     *  Liquidity pool yield farm details.
     */
    get asV43(): LiquidityMiningLiquidityPoolDataStorageV43 {
        assert(this.isV43)
        return this as any
    }
}

/**
 *  Liquidity pool yield farm details.
 */
export interface LiquidityMiningLiquidityPoolDataStorageV43 {
    get(key1: number, key2: Uint8Array): Promise<(v43.LiquidityPoolYieldFarm | undefined)>
    getAll(): Promise<v43.LiquidityPoolYieldFarm[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v43.LiquidityPoolYieldFarm | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v43.LiquidityPoolYieldFarm][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v43.LiquidityPoolYieldFarm][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v43.LiquidityPoolYieldFarm][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v43.LiquidityPoolYieldFarm][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v43.LiquidityPoolYieldFarm][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v43.LiquidityPoolYieldFarm][]>
}

export class LiquidityMiningLiquidityPoolMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'LiquidityMining'
    }

    protected getName() {
        return 'LiquidityPoolMetadata'
    }

    /**
     *  `LiquidityPoolYieldFarm` metadata holding: `(asset pair, existing nfts count, global pool id)`
     */
    get isV43(): boolean {
        return this.getTypeHash() === '18d37ca9f72162ef1898c3b8fa52f7c28f7bb1a8d940a0ecc75b558128c64c21'
    }

    /**
     *  `LiquidityPoolYieldFarm` metadata holding: `(asset pair, existing nfts count, global pool id)`
     */
    get asV43(): LiquidityMiningLiquidityPoolMetadataStorageV43 {
        assert(this.isV43)
        return this as any
    }
}

/**
 *  `LiquidityPoolYieldFarm` metadata holding: `(asset pair, existing nfts count, global pool id)`
 */
export interface LiquidityMiningLiquidityPoolMetadataStorageV43 {
    get(key: number): Promise<([v43.AssetPair, bigint, number] | undefined)>
    getAll(): Promise<[v43.AssetPair, bigint, number][]>
    getMany(keys: number[]): Promise<([v43.AssetPair, bigint, number] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [v43.AssetPair, bigint, number]][]>
    getPairs(key: number): Promise<[k: number, v: [v43.AssetPair, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [v43.AssetPair, bigint, number]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [v43.AssetPair, bigint, number]][]>
}

export class LiquidityMiningNftInstanceSequencerStorage extends StorageBase {
    protected getPrefix() {
        return 'LiquidityMining'
    }

    protected getName() {
        return 'NftInstanceSequencer'
    }

    /**
     *  Sequencer for nft part of nft id.
     */
    get isV43(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Sequencer for nft part of nft id.
     */
    get asV43(): LiquidityMiningNftInstanceSequencerStorageV43 {
        assert(this.isV43)
        return this as any
    }
}

/**
 *  Sequencer for nft part of nft id.
 */
export interface LiquidityMiningNftInstanceSequencerStorageV43 {
    get(): Promise<bigint>
}

export class LiquidityMiningPoolIdSequencerStorage extends StorageBase {
    protected getPrefix() {
        return 'LiquidityMining'
    }

    protected getName() {
        return 'PoolIdSequencer'
    }

    /**
     *  Id sequencer for `GlobalPool` and `LiquidityPoolYieldFarm`.
     */
    get isV43(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Id sequencer for `GlobalPool` and `LiquidityPoolYieldFarm`.
     */
    get asV43(): LiquidityMiningPoolIdSequencerStorageV43 {
        assert(this.isV43)
        return this as any
    }
}

/**
 *  Id sequencer for `GlobalPool` and `LiquidityPoolYieldFarm`.
 */
export interface LiquidityMiningPoolIdSequencerStorageV43 {
    get(): Promise<number>
}

export class MarketplaceMarketplaceInstancesStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'MarketplaceInstances'
    }

    /**
     *  Stores Marketplace info
     */
    get isV43(): boolean {
        return this.getTypeHash() === 'ec3139d8177301e4bbb71dba0f7f87a90af07d567a590d5351248daa469359c5'
    }

    /**
     *  Stores Marketplace info
     */
    get asV43(): MarketplaceMarketplaceInstancesStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  Stores Marketplace info
     */
    get isV76(): boolean {
        return this.getTypeHash() === '0b32a4fd1061c4591a526e2f7beddcab1e709b87ccc64182c0c1d19fdf718abd'
    }

    /**
     *  Stores Marketplace info
     */
    get asV76(): MarketplaceMarketplaceInstancesStorageV76 {
        assert(this.isV76)
        return this as any
    }
}

/**
 *  Stores Marketplace info
 */
export interface MarketplaceMarketplaceInstancesStorageV43 {
    get(key1: bigint, key2: bigint): Promise<(v43.Royalty | undefined)>
    getAll(): Promise<v43.Royalty[]>
    getMany(keys: [bigint, bigint][]): Promise<(v43.Royalty | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v43.Royalty][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v43.Royalty][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v43.Royalty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v43.Royalty][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v43.Royalty][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v43.Royalty][]>
}

/**
 *  Stores Marketplace info
 */
export interface MarketplaceMarketplaceInstancesStorageV76 {
    get(key1: bigint, key2: bigint): Promise<(v76.Royalty | undefined)>
    getAll(): Promise<v76.Royalty[]>
    getMany(keys: [bigint, bigint][]): Promise<(v76.Royalty | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v76.Royalty][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v76.Royalty][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v76.Royalty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v76.Royalty][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v76.Royalty][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v76.Royalty][]>
}

export class MarketplaceMarketplaceItemsStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'MarketplaceItems'
    }

    /**
     *  Stores Marketplace info
     */
    get isV81(): boolean {
        return this.getTypeHash() === '0b32a4fd1061c4591a526e2f7beddcab1e709b87ccc64182c0c1d19fdf718abd'
    }

    /**
     *  Stores Marketplace info
     */
    get asV81(): MarketplaceMarketplaceItemsStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  Stores Marketplace info
 */
export interface MarketplaceMarketplaceItemsStorageV81 {
    get(key1: bigint, key2: bigint): Promise<(v81.Royalty | undefined)>
    getAll(): Promise<v81.Royalty[]>
    getMany(keys: [bigint, bigint][]): Promise<(v81.Royalty | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v81.Royalty][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v81.Royalty][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v81.Royalty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v81.Royalty][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v81.Royalty][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v81.Royalty][]>
}

export class MarketplaceOffersStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'Offers'
    }

    /**
     *  Stores offer info
     */
    get isV43(): boolean {
        return this.getTypeHash() === '3f58318baf55451d4557850a495785a0bf8f8be774aada4e44650361d075dc91'
    }

    /**
     *  Stores offer info
     */
    get asV43(): MarketplaceOffersStorageV43 {
        assert(this.isV43)
        return this as any
    }
}

/**
 *  Stores offer info
 */
export interface MarketplaceOffersStorageV43 {
    get(key1: [bigint, bigint], key2: Uint8Array): Promise<(v43.Offer | undefined)>
    getAll(): Promise<v43.Offer[]>
    getMany(keys: [[bigint, bigint], Uint8Array][]): Promise<(v43.Offer | undefined)[]>
    getKeys(): Promise<[[bigint, bigint], Uint8Array][]>
    getKeys(key1: [bigint, bigint]): Promise<[[bigint, bigint], Uint8Array][]>
    getKeys(key1: [bigint, bigint], key2: Uint8Array): Promise<[[bigint, bigint], Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[[bigint, bigint], Uint8Array][]>
    getKeysPaged(pageSize: number, key1: [bigint, bigint]): AsyncIterable<[[bigint, bigint], Uint8Array][]>
    getKeysPaged(pageSize: number, key1: [bigint, bigint], key2: Uint8Array): AsyncIterable<[[bigint, bigint], Uint8Array][]>
    getPairs(): Promise<[k: [[bigint, bigint], Uint8Array], v: v43.Offer][]>
    getPairs(key1: [bigint, bigint]): Promise<[k: [[bigint, bigint], Uint8Array], v: v43.Offer][]>
    getPairs(key1: [bigint, bigint], key2: Uint8Array): Promise<[k: [[bigint, bigint], Uint8Array], v: v43.Offer][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [[bigint, bigint], Uint8Array], v: v43.Offer][]>
    getPairsPaged(pageSize: number, key1: [bigint, bigint]): AsyncIterable<[k: [[bigint, bigint], Uint8Array], v: v43.Offer][]>
    getPairsPaged(pageSize: number, key1: [bigint, bigint], key2: Uint8Array): AsyncIterable<[k: [[bigint, bigint], Uint8Array], v: v43.Offer][]>
}

export class MarketplacePricesStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'Prices'
    }

    /**
     *  Stores token info
     */
    get isV43(): boolean {
        return this.getTypeHash() === '6171308606be5e36859904603d84665b2843b644cf5292eff2e75efc57206ab0'
    }

    /**
     *  Stores token info
     */
    get asV43(): MarketplacePricesStorageV43 {
        assert(this.isV43)
        return this as any
    }
}

/**
 *  Stores token info
 */
export interface MarketplacePricesStorageV43 {
    get(key1: bigint, key2: bigint): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: bigint][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: bigint][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: bigint][]>
}

export class MultiTransactionPaymentAcceptedCurrenciesStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTransactionPayment'
    }

    protected getName() {
        return 'AcceptedCurrencies'
    }

    /**
     *  Curated list of currencies which fees can be paid with
     */
    get isV16(): boolean {
        return this.getTypeHash() === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
    }

    /**
     *  Curated list of currencies which fees can be paid with
     */
    get asV16(): MultiTransactionPaymentAcceptedCurrenciesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Curated list of currencies which fees can be paid with
 */
export interface MultiTransactionPaymentAcceptedCurrenciesStorageV16 {
    get(key: number): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class MultiTransactionPaymentAcceptedCurrencyPriceStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTransactionPayment'
    }

    protected getName() {
        return 'AcceptedCurrencyPrice'
    }

    /**
     *  Block storage for accepted currency price
     */
    get isV38(): boolean {
        return this.getTypeHash() === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
    }

    /**
     *  Block storage for accepted currency price
     */
    get asV38(): MultiTransactionPaymentAcceptedCurrencyPriceStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Block storage for accepted currency price
 */
export interface MultiTransactionPaymentAcceptedCurrencyPriceStorageV38 {
    get(key: number): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class MultiTransactionPaymentAccountCurrencyMapStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTransactionPayment'
    }

    protected getName() {
        return 'AccountCurrencyMap'
    }

    /**
     *  Account currency map
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  Account currency map
     */
    get asV16(): MultiTransactionPaymentAccountCurrencyMapStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Account currency map
 */
export interface MultiTransactionPaymentAccountCurrencyMapStorageV16 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class MultiTransactionPaymentAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTransactionPayment'
    }

    protected getName() {
        return 'Authorities'
    }

    get isV16(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    get asV16(): MultiTransactionPaymentAuthoritiesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

export interface MultiTransactionPaymentAuthoritiesStorageV16 {
    get(): Promise<Uint8Array[]>
}

export class MultiTransactionPaymentFallbackAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTransactionPayment'
    }

    protected getName() {
        return 'FallbackAccount'
    }

    /**
     *  Account to use when pool does not exist.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Account to use when pool does not exist.
     */
    get asV16(): MultiTransactionPaymentFallbackAccountStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Account to use when pool does not exist.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Account to use when pool does not exist.
     */
    get asV38(): MultiTransactionPaymentFallbackAccountStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Account to use when pool does not exist.
 */
export interface MultiTransactionPaymentFallbackAccountStorageV16 {
    get(): Promise<Uint8Array>
}

/**
 *  Account to use when pool does not exist.
 */
export interface MultiTransactionPaymentFallbackAccountStorageV38 {
    get(): Promise<(Uint8Array | undefined)>
}

export class MultisigCallsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Calls'
    }

    get isV55(): boolean {
        return this.getTypeHash() === 'f2c625a45f7e4212d08a35de621ee69426ec65ab8200e29512887abb064620ab'
    }

    get asV55(): MultisigCallsStorageV55 {
        assert(this.isV55)
        return this as any
    }
}

export interface MultisigCallsStorageV55 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, bigint] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, bigint][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
}

export class MultisigMultisigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Multisigs'
    }

    /**
     *  The set of open multisig operations.
     */
    get isV55(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asV55(): MultisigMultisigsStorageV55 {
        assert(this.isV55)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigMultisigsStorageV55 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v55.Multisig | undefined)>
    getAll(): Promise<v55.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v55.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v55.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v55.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v55.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v55.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v55.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v55.Multisig][]>
}

export class NFTClassesStorage extends StorageBase {
    protected getPrefix() {
        return 'NFT'
    }

    protected getName() {
        return 'Classes'
    }

    /**
     *  Stores class info
     */
    get isV38(): boolean {
        return this.getTypeHash() === 'b54bfb9304ad7cfffb67fe42834b827a2e7375c8ac371ff001f284424c0aa6d2'
    }

    /**
     *  Stores class info
     */
    get asV38(): NFTClassesStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Stores class info
 */
export interface NFTClassesStorageV38 {
    get(key: bigint): Promise<(v38.ClassInfo | undefined)>
    getAll(): Promise<v38.ClassInfo[]>
    getMany(keys: bigint[]): Promise<(v38.ClassInfo | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v38.ClassInfo][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v38.ClassInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v38.ClassInfo][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v38.ClassInfo][]>
}

export class NFTCollectionsStorage extends StorageBase {
    protected getPrefix() {
        return 'NFT'
    }

    protected getName() {
        return 'Collections'
    }

    /**
     *  Stores collection info
     */
    get isV81(): boolean {
        return this.getTypeHash() === '2f36f07d6aa58ffd17f947fc775944e4e753cd26febd71470ea29a7baa7e88f9'
    }

    /**
     *  Stores collection info
     */
    get asV81(): NFTCollectionsStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  Stores collection info
 */
export interface NFTCollectionsStorageV81 {
    get(key: bigint): Promise<(v81.CollectionInfo | undefined)>
    getAll(): Promise<v81.CollectionInfo[]>
    getMany(keys: bigint[]): Promise<(v81.CollectionInfo | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v81.CollectionInfo][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v81.CollectionInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v81.CollectionInfo][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v81.CollectionInfo][]>
}

export class NFTInstancesStorage extends StorageBase {
    protected getPrefix() {
        return 'NFT'
    }

    protected getName() {
        return 'Instances'
    }

    /**
     *  Stores instance info
     */
    get isV38(): boolean {
        return this.getTypeHash() === '873e9356d599039c4394718673bd5ff92fb310e018cc20443389ba4e4241e7c9'
    }

    /**
     *  Stores instance info
     */
    get asV38(): NFTInstancesStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Stores instance info
 */
export interface NFTInstancesStorageV38 {
    get(key1: bigint, key2: bigint): Promise<(v38.InstanceInfo | undefined)>
    getAll(): Promise<v38.InstanceInfo[]>
    getMany(keys: [bigint, bigint][]): Promise<(v38.InstanceInfo | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v38.InstanceInfo][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v38.InstanceInfo][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v38.InstanceInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v38.InstanceInfo][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v38.InstanceInfo][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v38.InstanceInfo][]>
}

export class NFTItemsStorage extends StorageBase {
    protected getPrefix() {
        return 'NFT'
    }

    protected getName() {
        return 'Items'
    }

    /**
     *  Stores item info
     */
    get isV81(): boolean {
        return this.getTypeHash() === '873e9356d599039c4394718673bd5ff92fb310e018cc20443389ba4e4241e7c9'
    }

    /**
     *  Stores item info
     */
    get asV81(): NFTItemsStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  Stores item info
 */
export interface NFTItemsStorageV81 {
    get(key1: bigint, key2: bigint): Promise<(v81.ItemInfo | undefined)>
    getAll(): Promise<v81.ItemInfo[]>
    getMany(keys: [bigint, bigint][]): Promise<(v81.ItemInfo | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v81.ItemInfo][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v81.ItemInfo][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v81.ItemInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v81.ItemInfo][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v81.ItemInfo][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v81.ItemInfo][]>
}

export class NFTPoolItemPriceStorage extends StorageBase {
    protected getPrefix() {
        return 'NFT'
    }

    protected getName() {
        return 'PoolItemPrice'
    }

    /**
     *  Stores prices for NFT pools
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'c60786ebbc4dd7f20f5911f36dece58e68e1ea1999dd7d19c9475efbf8920067'
    }

    /**
     *  Stores prices for NFT pools
     */
    get asV16(): NFTPoolItemPriceStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Stores prices for NFT pools
 */
export interface NFTPoolItemPriceStorageV16 {
    get(key: bigint): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: bigint[]): Promise<bigint[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint][]>
}

export class OrmlNftClassesStorage extends StorageBase {
    protected getPrefix() {
        return 'OrmlNft'
    }

    protected getName() {
        return 'Classes'
    }

    /**
     *  Store class info.
     * 
     *  Returns `None` if class info not set or removed.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'a40ff9e27e43bc80921e28a85dba8041a9f8474ae2a9a30c5943f8b9ac7a321b'
    }

    /**
     *  Store class info.
     * 
     *  Returns `None` if class info not set or removed.
     */
    get asV16(): OrmlNftClassesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Store class info.
 * 
 *  Returns `None` if class info not set or removed.
 */
export interface OrmlNftClassesStorageV16 {
    get(key: bigint): Promise<(v16.ClassInfoOf | undefined)>
    getAll(): Promise<v16.ClassInfoOf[]>
    getMany(keys: bigint[]): Promise<(v16.ClassInfoOf | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v16.ClassInfoOf][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v16.ClassInfoOf][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v16.ClassInfoOf][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v16.ClassInfoOf][]>
}

export class OrmlNftNextClassIdStorage extends StorageBase {
    protected getPrefix() {
        return 'OrmlNft'
    }

    protected getName() {
        return 'NextClassId'
    }

    /**
     *  Next available class ID.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Next available class ID.
     */
    get asV16(): OrmlNftNextClassIdStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Next available class ID.
 */
export interface OrmlNftNextClassIdStorageV16 {
    get(): Promise<bigint>
}

export class OrmlNftNextTokenIdStorage extends StorageBase {
    protected getPrefix() {
        return 'OrmlNft'
    }

    protected getName() {
        return 'NextTokenId'
    }

    /**
     *  Next available token ID.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '43b982039ae5001e5469d456793336462840c3b4fa3cbcd14a3d0ca39b847f1b'
    }

    /**
     *  Next available token ID.
     */
    get asV16(): OrmlNftNextTokenIdStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Next available token ID.
 */
export interface OrmlNftNextTokenIdStorageV16 {
    get(key: bigint): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: bigint[]): Promise<bigint[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint][]>
}

export class OrmlNftTokensStorage extends StorageBase {
    protected getPrefix() {
        return 'OrmlNft'
    }

    protected getName() {
        return 'Tokens'
    }

    /**
     *  Store token info.
     * 
     *  Returns `None` if token info not set or removed.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '686fb53f92739d9b28d4fcc03b721cc01c62e7b9fa2d093b61f3cefdb92737ff'
    }

    /**
     *  Store token info.
     * 
     *  Returns `None` if token info not set or removed.
     */
    get asV16(): OrmlNftTokensStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Store token info.
 * 
 *  Returns `None` if token info not set or removed.
 */
export interface OrmlNftTokensStorageV16 {
    get(key1: bigint, key2: bigint): Promise<(v16.TokenInfoOf | undefined)>
    getAll(): Promise<v16.TokenInfoOf[]>
    getMany(keys: [bigint, bigint][]): Promise<(v16.TokenInfoOf | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v16.TokenInfoOf][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v16.TokenInfoOf][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v16.TokenInfoOf][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v16.TokenInfoOf][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v16.TokenInfoOf][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v16.TokenInfoOf][]>
}

export class OrmlNftTokensByOwnerStorage extends StorageBase {
    protected getPrefix() {
        return 'OrmlNft'
    }

    protected getName() {
        return 'TokensByOwner'
    }

    /**
     *  Token existence check by owner and class ID.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '54769f30d14c88a309d9c660c3dd8f961dc27052302bcfed434c70e2cbabbfe2'
    }

    /**
     *  Token existence check by owner and class ID.
     */
    get asV16(): OrmlNftTokensByOwnerStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Token existence check by owner and class ID.
 */
export interface OrmlNftTokensByOwnerStorageV16 {
    get(key1: Uint8Array, key2: bigint, key3: bigint): Promise<null>
    getAll(): Promise<null[]>
    getMany(keys: [Uint8Array, bigint, bigint][]): Promise<null[]>
    getKeys(): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getPairs(): Promise<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairs(key1: Uint8Array, key2: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairs(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: null][]>
}

export class ParachainInfoParachainIdStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainInfo'
    }

    protected getName() {
        return 'ParachainId'
    }

    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asV16(): ParachainInfoParachainIdStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

export interface ParachainInfoParachainIdStorageV16 {
    get(): Promise<number>
}

export class ParachainSystemAnnouncedHrmpMessagesPerCandidateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'AnnouncedHrmpMessagesPerCandidate'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get asV16(): ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
 *  announcing the weight of `on_initialize` and `on_finalize`.
 */
export interface ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageV16 {
    get(): Promise<number>
}

export class ParachainSystemAuthorizedUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'AuthorizedUpgrade'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get asV16(): ParachainSystemAuthorizedUpgradeStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface ParachainSystemAuthorizedUpgradeStorageV16 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemCustomValidationHeadDataStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'CustomValidationHeadData'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get asV38(): ParachainSystemCustomValidationHeadDataStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  A custom head data that should be returned as result of `validate_block`.
 * 
 *  See [`Pallet::set_custom_validation_head_data`] for more information.
 */
export interface ParachainSystemCustomValidationHeadDataStorageV38 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemDidSetValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'DidSetValidationCode'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get isV16(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get asV16(): ParachainSystemDidSetValidationCodeStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Were the validation data set to notify the relay chain?
 */
export interface ParachainSystemDidSetValidationCodeStorageV16 {
    get(): Promise<boolean>
}

export class ParachainSystemHostConfigurationStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HostConfiguration'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'e7770235be9d14ed134fc6d0effb398cdedbf1010adc4f3555004a1d10de49d3'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV16(): ParachainSystemHostConfigurationStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '76792d33ff147d490bc5f8e4454e476c4ef71aae7021fd1a44f96974f263af9b'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV38(): ParachainSystemHostConfigurationStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemHostConfigurationStorageV16 {
    get(): Promise<(v16.AbridgedHostConfiguration | undefined)>
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemHostConfigurationStorageV38 {
    get(): Promise<(v38.V1AbridgedHostConfiguration | undefined)>
}

export class ParachainSystemHrmpOutboundMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HrmpOutboundMessages'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '0330a7423804895204dc06607d196d45bbec59edfd3f4f38c868daa9e880928c'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV16(): ParachainSystemHrmpOutboundMessagesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  HRMP messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpOutboundMessagesStorageV16 {
    get(): Promise<v16.OutboundHrmpMessage[]>
}

export class ParachainSystemHrmpWatermarkStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HrmpWatermark'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV16(): ParachainSystemHrmpWatermarkStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  HRMP watermark that was set in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpWatermarkStorageV16 {
    get(): Promise<number>
}

export class ParachainSystemLastDmqMqcHeadStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastDmqMqcHead'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asV16(): ParachainSystemLastDmqMqcHeadStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The last downward message queue chain head we have observed.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastDmqMqcHeadStorageV16 {
    get(): Promise<Uint8Array>
}

export class ParachainSystemLastHrmpMqcHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastHrmpMqcHeads'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '26057692e067e44d8eec686a8711f8b87a11679701c3afa133f7b9da8f327999'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asV16(): ParachainSystemLastHrmpMqcHeadsStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The message queue chain heads we have observed per each channel incoming channel.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastHrmpMqcHeadsStorageV16 {
    get(): Promise<[number, Uint8Array][]>
}

export class ParachainSystemLastRelayChainBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastRelayChainBlockNumber'
    }

    /**
     *  The relay chain block number associated with the last parachain block.
     */
    get isV81(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The relay chain block number associated with the last parachain block.
     */
    get asV81(): ParachainSystemLastRelayChainBlockNumberStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  The relay chain block number associated with the last parachain block.
 */
export interface ParachainSystemLastRelayChainBlockNumberStorageV81 {
    get(): Promise<number>
}

export class ParachainSystemLastUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastUpgrade'
    }

    /**
     *  The last relay parent block number at which we signalled the code upgrade.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The last relay parent block number at which we signalled the code upgrade.
     */
    get asV16(): ParachainSystemLastUpgradeStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The last relay parent block number at which we signalled the code upgrade.
 */
export interface ParachainSystemLastUpgradeStorageV16 {
    get(): Promise<number>
}

export class ParachainSystemNewValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'NewValidationCode'
    }

    /**
     *  New validation code that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  New validation code that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get asV16(): ParachainSystemNewValidationCodeStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  New validation code that was set in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block if no other pallet already set
 *  the value.
 */
export interface ParachainSystemNewValidationCodeStorageV16 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemPendingRelayChainBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingRelayChainBlockNumber'
    }

    /**
     *  We need to store the new validation function for the span between
     *  setting it and applying it. If it has a
     *  value, then [`PendingValidationCode`] must have a real value, and
     *  together will coordinate the block number where the upgrade will happen.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  We need to store the new validation function for the span between
     *  setting it and applying it. If it has a
     *  value, then [`PendingValidationCode`] must have a real value, and
     *  together will coordinate the block number where the upgrade will happen.
     */
    get asV16(): ParachainSystemPendingRelayChainBlockNumberStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  We need to store the new validation function for the span between
 *  setting it and applying it. If it has a
 *  value, then [`PendingValidationCode`] must have a real value, and
 *  together will coordinate the block number where the upgrade will happen.
 */
export interface ParachainSystemPendingRelayChainBlockNumberStorageV16 {
    get(): Promise<(number | undefined)>
}

export class ParachainSystemPendingUpwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingUpwardMessages'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get asV16(): ParachainSystemPendingUpwardMessagesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Upward messages that are still pending and not yet send to the relay chain.
 */
export interface ParachainSystemPendingUpwardMessagesStorageV16 {
    get(): Promise<Uint8Array[]>
}

export class ParachainSystemPendingValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingValidationCode'
    }

    /**
     *  The new validation function we will upgrade to when the relay chain
     *  reaches [`PendingRelayChainBlockNumber`]. A real validation function must
     *  exist here as long as [`PendingRelayChainBlockNumber`] is set.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '8199405308c9981e32f632f64a8758ba69af0e625da26ff6d6670b81cc1f1647'
    }

    /**
     *  The new validation function we will upgrade to when the relay chain
     *  reaches [`PendingRelayChainBlockNumber`]. A real validation function must
     *  exist here as long as [`PendingRelayChainBlockNumber`] is set.
     */
    get asV16(): ParachainSystemPendingValidationCodeStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The new validation function we will upgrade to when the relay chain
 *  reaches [`PendingRelayChainBlockNumber`]. A real validation function must
 *  exist here as long as [`PendingRelayChainBlockNumber`] is set.
 */
export interface ParachainSystemPendingValidationCodeStorageV16 {
    get(): Promise<Uint8Array>
}

export class ParachainSystemProcessedDownwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ProcessedDownwardMessages'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV16(): ParachainSystemProcessedDownwardMessagesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Number of downward messages processed in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemProcessedDownwardMessagesStorageV16 {
    get(): Promise<number>
}

export class ParachainSystemRelayStateProofStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'RelayStateProof'
    }

    /**
     *  The state proof for the last relay parent block.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV81(): boolean {
        return this.getTypeHash() === '38f79414b788123884c7cc1e6c6ca89331d3264f4bdcf6dff4501d6b20966908'
    }

    /**
     *  The state proof for the last relay parent block.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV81(): ParachainSystemRelayStateProofStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  The state proof for the last relay parent block.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelayStateProofStorageV81 {
    get(): Promise<(v81.StorageProof | undefined)>
}

export class ParachainSystemRelevantMessagingStateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'RelevantMessagingState'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'a8475d62c5be29375db2b2aca3d863bedb2fca1d10144f0c95b18e80ccbd3559'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV16(): ParachainSystemRelevantMessagingStateStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '24e0311e0ec9634d6acff6e06aa83b4bd4c57957b8f7525bf0dd22f0a73d7b09'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV25(): ParachainSystemRelevantMessagingStateStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The snapshot of some state related to messaging relevant to the current parachain as per
 *  the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelevantMessagingStateStorageV16 {
    get(): Promise<(v16.MessagingStateSnapshot | undefined)>
}

/**
 *  The snapshot of some state related to messaging relevant to the current parachain as per
 *  the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelevantMessagingStateStorageV25 {
    get(): Promise<(v25.MessagingStateSnapshot | undefined)>
}

export class ParachainSystemReservedDmpWeightOverrideStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ReservedDmpWeightOverride'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV16(): ParachainSystemReservedDmpWeightOverrideStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV81(): boolean {
        return this.getTypeHash() === '1e8de4f65927863b2d720c007e917cc371de0d6c8aee8f5e19251fcf4c5a171b'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV81(): ParachainSystemReservedDmpWeightOverrideStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageV16 {
    get(): Promise<(bigint | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageV81 {
    get(): Promise<(v81.Weight | undefined)>
}

export class ParachainSystemReservedXcmpWeightOverrideStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ReservedXcmpWeightOverride'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV16(): ParachainSystemReservedXcmpWeightOverrideStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isV81(): boolean {
        return this.getTypeHash() === '1e8de4f65927863b2d720c007e917cc371de0d6c8aee8f5e19251fcf4c5a171b'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV81(): ParachainSystemReservedXcmpWeightOverrideStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageV16 {
    get(): Promise<(bigint | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageV81 {
    get(): Promise<(v81.Weight | undefined)>
}

export class ParachainSystemUpgradeRestrictionSignalStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'UpgradeRestrictionSignal'
    }

    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '2236db14165f1386be95c2e72a22524bdd6b93f6d64e4b0b39d54e03f1f1bee2'
    }

    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    get asV25(): ParachainSystemUpgradeRestrictionSignalStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
 *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
 *  candidate will be invalid.
 * 
 *  This storage item is a mirror of the corresponding value for the current parachain from the
 *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
 *  set after the inherent.
 */
export interface ParachainSystemUpgradeRestrictionSignalStorageV25 {
    get(): Promise<(v25.V1UpgradeRestriction | undefined)>
}

export class ParachainSystemUpwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'UpwardMessages'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV16(): ParachainSystemUpwardMessagesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Upward messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemUpwardMessagesStorageV16 {
    get(): Promise<Uint8Array[]>
}

export class ParachainSystemValidationDataStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ValidationData'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'fb37759067a991bce599d3fbe39ee38b99d63716a96357c3a39bf04c66e2579d'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     */
    get asV16(): ParachainSystemValidationDataStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The [`PersistedValidationData`] set for this block.
 */
export interface ParachainSystemValidationDataStorageV16 {
    get(): Promise<(v16.PersistedValidationData | undefined)>
}

export class PolkadotXcmAssetTrapsStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'AssetTraps'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get isV38(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get asV38(): PolkadotXcmAssetTrapsStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface PolkadotXcmAssetTrapsStorageV38 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class PolkadotXcmCurrentMigrationStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'CurrentMigration'
    }

    /**
     *  The current migration's stage, if any.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
    }

    /**
     *  The current migration's stage, if any.
     */
    get asV38(): PolkadotXcmCurrentMigrationStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The current migration's stage, if any.
 */
export interface PolkadotXcmCurrentMigrationStorageV38 {
    get(): Promise<(v38.VersionMigrationStage | undefined)>
}

export class PolkadotXcmQueriesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'Queries'
    }

    /**
     *  The ongoing queries.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '8497eae9bd9ecc14a9d7da5daf99074e5fb888ce8b1254175ebacb93a450f902'
    }

    /**
     *  The ongoing queries.
     */
    get asV38(): PolkadotXcmQueriesStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The ongoing queries.
 */
export interface PolkadotXcmQueriesStorageV38 {
    get(key: bigint): Promise<(v38.QueryStatus | undefined)>
    getAll(): Promise<v38.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v38.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v38.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v38.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v38.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v38.QueryStatus][]>
}

export class PolkadotXcmQueryCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'QueryCounter'
    }

    /**
     *  The latest available query index.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The latest available query index.
     */
    get asV38(): PolkadotXcmQueryCounterStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The latest available query index.
 */
export interface PolkadotXcmQueryCounterStorageV38 {
    get(): Promise<bigint>
}

export class PolkadotXcmSafeXcmVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'SafeXcmVersion'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get isV38(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get asV38(): PolkadotXcmSafeXcmVersionStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface PolkadotXcmSafeXcmVersionStorageV38 {
    get(): Promise<(number | undefined)>
}

export class PolkadotXcmSupportedVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'SupportedVersion'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV38(): boolean {
        return this.getTypeHash() === 'bf203870a932f637011bee3e0dae76dc35a120f80e5ac7fb32e2dbede4fd5795'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV38(): PolkadotXcmSupportedVersionStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface PolkadotXcmSupportedVersionStorageV38 {
    get(key1: number, key2: v38.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v38.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v38.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v38.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v38.VersionedMultiLocation): Promise<[number, v38.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v38.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v38.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v38.VersionedMultiLocation): AsyncIterable<[number, v38.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v38.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v38.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v38.VersionedMultiLocation): Promise<[k: [number, v38.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v38.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v38.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v38.VersionedMultiLocation): AsyncIterable<[k: [number, v38.VersionedMultiLocation], v: number][]>
}

export class PolkadotXcmVersionDiscoveryQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionDiscoveryQueue'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '16a258fa3891b3d97c16b446ca40a6dbafd16eb5bc2936a51286241b38207f42'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV38(): PolkadotXcmVersionDiscoveryQueueStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface PolkadotXcmVersionDiscoveryQueueStorageV38 {
    get(): Promise<[v38.VersionedMultiLocation, number][]>
}

export class PolkadotXcmVersionNotifiersStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionNotifiers'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV38(): boolean {
        return this.getTypeHash() === 'c04d92c1d09bb51782b185c1fa4f78678bd7c63c2388986e2fe34f2f1e02cf9a'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV38(): PolkadotXcmVersionNotifiersStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface PolkadotXcmVersionNotifiersStorageV38 {
    get(key1: number, key2: v38.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v38.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v38.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v38.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v38.VersionedMultiLocation): Promise<[number, v38.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v38.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v38.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v38.VersionedMultiLocation): AsyncIterable<[number, v38.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v38.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v38.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v38.VersionedMultiLocation): Promise<[k: [number, v38.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v38.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v38.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v38.VersionedMultiLocation): AsyncIterable<[k: [number, v38.VersionedMultiLocation], v: bigint][]>
}

export class PolkadotXcmVersionNotifyTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionNotifyTargets'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV38(): boolean {
        return this.getTypeHash() === 'be7b24532d6af66a6c35ced8427c3201e32a7ab9e2a0c901f57c6d5a416ddc46'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV38(): PolkadotXcmVersionNotifyTargetsStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface PolkadotXcmVersionNotifyTargetsStorageV38 {
    get(key1: number, key2: v38.VersionedMultiLocation): Promise<([bigint, bigint, number] | undefined)>
    getAll(): Promise<[bigint, bigint, number][]>
    getMany(keys: [number, v38.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(): Promise<[number, v38.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v38.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v38.VersionedMultiLocation): Promise<[number, v38.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v38.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v38.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v38.VersionedMultiLocation): AsyncIterable<[number, v38.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v38.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number): Promise<[k: [number, v38.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number, key2: v38.VersionedMultiLocation): Promise<[k: [number, v38.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v38.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v38.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v38.VersionedMultiLocation): AsyncIterable<[k: [number, v38.VersionedMultiLocation], v: [bigint, bigint, number]][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV38(): PreimagePreimageForStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV38 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class PreimageStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'StatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isV38(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV38(): PreimageStatusForStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV38 {
    get(key: Uint8Array): Promise<(v38.RequestStatus | undefined)>
    getAll(): Promise<v38.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v38.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v38.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v38.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v38.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v38.RequestStatus][]>
}

export class PriceOracleNewAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'PriceOracle'
    }

    protected getName() {
        return 'NewAssets'
    }

    /**
     *  Sorted array of newly registered assets.
     *  All assets are processed and removed from the storage at the end of a block.
     *  Trades start to be processed from the next block.
     *  All trades in the same block as the asset registration are ignored.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Sorted array of newly registered assets.
     *  All assets are processed and removed from the storage at the end of a block.
     *  Trades start to be processed from the next block.
     *  All trades in the same block as the asset registration are ignored.
     */
    get asV25(): PriceOracleNewAssetsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Sorted array of newly registered assets.
 *  All assets are processed and removed from the storage at the end of a block.
 *  Trades start to be processed from the next block.
 *  All trades in the same block as the asset registration are ignored.
 */
export interface PriceOracleNewAssetsStorageV25 {
    get(): Promise<Uint8Array[]>
}

export class PriceOraclePriceDataAccumulatorStorage extends StorageBase {
    protected getPrefix() {
        return 'PriceOracle'
    }

    protected getName() {
        return 'PriceDataAccumulator'
    }

    /**
     *  Processed or partially processed data generated by trades.
     *  Data generated by trades are processed sequentially.
     *  Each new entry is combined with the previous value to produce new intermediate value.
     *  The last entry creates the resulting average price and volume.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'b29533540b398ce961c1073ab479afb7d33db21007ff97da187ed257230960d5'
    }

    /**
     *  Processed or partially processed data generated by trades.
     *  Data generated by trades are processed sequentially.
     *  Each new entry is combined with the previous value to produce new intermediate value.
     *  The last entry creates the resulting average price and volume.
     */
    get asV25(): PriceOraclePriceDataAccumulatorStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Processed or partially processed data generated by trades.
 *  Data generated by trades are processed sequentially.
 *  Each new entry is combined with the previous value to produce new intermediate value.
 *  The last entry creates the resulting average price and volume.
 */
export interface PriceOraclePriceDataAccumulatorStorageV25 {
    get(key: Uint8Array): Promise<v25.PriceEntry>
    getAll(): Promise<v25.PriceEntry[]>
    getMany(keys: Uint8Array[]): Promise<v25.PriceEntry[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.PriceEntry][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.PriceEntry][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.PriceEntry][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.PriceEntry][]>
}

export class PriceOraclePriceDataHundredStorage extends StorageBase {
    protected getPrefix() {
        return 'PriceOracle'
    }

    protected getName() {
        return 'PriceDataHundred'
    }

    /**
     *  The last ten average values corresponding to the last hundred blocks.
     *  Each average value corresponds to an interval of length ten blocks.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '9ee4d8e5181251ecc66d25cf48d1a00ad0c91f0f3dad29971ca870736b77ebc3'
    }

    /**
     *  The last ten average values corresponding to the last hundred blocks.
     *  Each average value corresponds to an interval of length ten blocks.
     */
    get asV25(): PriceOraclePriceDataHundredStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The last ten average values corresponding to the last hundred blocks.
 *  Each average value corresponds to an interval of length ten blocks.
 */
export interface PriceOraclePriceDataHundredStorageV25 {
    get(key: Uint8Array): Promise<v25.BucketQueue>
    getAll(): Promise<v25.BucketQueue[]>
    getMany(keys: Uint8Array[]): Promise<v25.BucketQueue[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.BucketQueue][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.BucketQueue][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.BucketQueue][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.BucketQueue][]>
}

export class PriceOraclePriceDataTenStorage extends StorageBase {
    protected getPrefix() {
        return 'PriceOracle'
    }

    protected getName() {
        return 'PriceDataTen'
    }

    /**
     *  The last ten average values corresponding to the last ten blocks.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'f333f16a6fb50f0f665203b91c0984f1750fef3f3f01e1ff0316809e84680f94'
    }

    /**
     *  The last ten average values corresponding to the last ten blocks.
     */
    get asV25(): PriceOraclePriceDataTenStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The last ten average values corresponding to the last ten blocks.
 */
export interface PriceOraclePriceDataTenStorageV25 {
    get(): Promise<[Uint8Array, v25.BucketQueue][]>
}

export class PriceOraclePriceDataThousandStorage extends StorageBase {
    protected getPrefix() {
        return 'PriceOracle'
    }

    protected getName() {
        return 'PriceDataThousand'
    }

    /**
     *  The last ten average values corresponding to the last thousand blocks.
     *  Each average value corresponds to an interval of length hundred blocks.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '9ee4d8e5181251ecc66d25cf48d1a00ad0c91f0f3dad29971ca870736b77ebc3'
    }

    /**
     *  The last ten average values corresponding to the last thousand blocks.
     *  Each average value corresponds to an interval of length hundred blocks.
     */
    get asV25(): PriceOraclePriceDataThousandStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The last ten average values corresponding to the last thousand blocks.
 *  Each average value corresponds to an interval of length hundred blocks.
 */
export interface PriceOraclePriceDataThousandStorageV25 {
    get(key: Uint8Array): Promise<v25.BucketQueue>
    getAll(): Promise<v25.BucketQueue[]>
    getMany(keys: Uint8Array[]): Promise<v25.BucketQueue[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.BucketQueue][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.BucketQueue][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.BucketQueue][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.BucketQueue][]>
}

export class PriceOracleTrackedAssetsCountStorage extends StorageBase {
    protected getPrefix() {
        return 'PriceOracle'
    }

    protected getName() {
        return 'TrackedAssetsCount'
    }

    /**
     *  The number of assets registered and handled by this pallet.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of assets registered and handled by this pallet.
     */
    get asV25(): PriceOracleTrackedAssetsCountStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The number of assets registered and handled by this pallet.
 */
export interface PriceOracleTrackedAssetsCountStorageV25 {
    get(): Promise<number>
}

export class ProxyAnnouncementsStorage extends StorageBase {
    protected getPrefix() {
        return 'Proxy'
    }

    protected getName() {
        return 'Announcements'
    }

    /**
     *  The announcements made by the proxy (key).
     */
    get isV38(): boolean {
        return this.getTypeHash() === 'b93d53c53a308d910b0304bf5593bd71084bcf177629ea67da68b9026f4b417c'
    }

    /**
     *  The announcements made by the proxy (key).
     */
    get asV38(): ProxyAnnouncementsStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The announcements made by the proxy (key).
 */
export interface ProxyAnnouncementsStorageV38 {
    get(key: Uint8Array): Promise<[v38.Announcement[], bigint]>
    getAll(): Promise<[v38.Announcement[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v38.Announcement[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v38.Announcement[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v38.Announcement[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v38.Announcement[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v38.Announcement[], bigint]][]>
}

export class ProxyProxiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Proxy'
    }

    protected getName() {
        return 'Proxies'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '4bb33eca13f5c1bd4dd925e1a077ee920e0ddc91f94bd24d512083c3a518d98d'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV38(): ProxyProxiesStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV38 {
    get(key: Uint8Array): Promise<[v38.ProxyDefinition[], bigint]>
    getAll(): Promise<[v38.ProxyDefinition[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v38.ProxyDefinition[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v38.ProxyDefinition[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v38.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v38.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v38.ProxyDefinition[], bigint]][]>
}

export class SchedulerAgendaStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Agenda'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '31bbe18003fc86850f0c6fe7138669a47eda5aba33721844bf617551e872bfe7'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV16(): SchedulerAgendaStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV19(): boolean {
        return this.getTypeHash() === 'c31c72fc489482b869227bc212b8e3464dcaea7cb26b9b6c6878892ff4a58212'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV19(): SchedulerAgendaStorageV19 {
        assert(this.isV19)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '8cd9f28277f6b0fb32dfadf12a18d48ae236c3766a7a735e215d71a27b84e7a6'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV25(): SchedulerAgendaStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV38(): boolean {
        return this.getTypeHash() === 'e2ddc63d3c4106a42317a348f931660f531839b7b9de34b7d8b2fcda8f686b52'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV38(): SchedulerAgendaStorageV38 {
        assert(this.isV38)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV43(): boolean {
        return this.getTypeHash() === '6a35088b1a9a1f86c3ab8393f1255fe24e09377498c544b91718a5c3d04b9b24'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV43(): SchedulerAgendaStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV55(): boolean {
        return this.getTypeHash() === 'a2252d4c25985d9b4eed24739edd00bd17691393e8c05ea68676e358234b1d93'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV55(): SchedulerAgendaStorageV55 {
        assert(this.isV55)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV65(): boolean {
        return this.getTypeHash() === 'af55b3ff4157b2d4eceaa7eed527cfae44a5f4ba2fb29e743de117577adde883'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV65(): SchedulerAgendaStorageV65 {
        assert(this.isV65)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV69(): boolean {
        return this.getTypeHash() === '813543211fc8126011f7c529bf89d455be4c58abbbef03c85d5749d5b36b3e6d'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV69(): SchedulerAgendaStorageV69 {
        assert(this.isV69)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV76(): boolean {
        return this.getTypeHash() === '0444e5301ba11c9e6785ef36c5ec6071d4371efcb2468c70444d440d82ecfa4c'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV76(): SchedulerAgendaStorageV76 {
        assert(this.isV76)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV81(): boolean {
        return this.getTypeHash() === '57ef602c1293eda5e9227242f72c7d191467e8e9b86661c1449ac6b36cc68faa'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV81(): SchedulerAgendaStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV16 {
    get(key: number): Promise<(v16.Scheduled | undefined)[]>
    getAll(): Promise<(v16.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v16.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v16.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v16.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v16.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v16.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV19 {
    get(key: number): Promise<(v19.Scheduled | undefined)[]>
    getAll(): Promise<(v19.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v19.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v19.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v19.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v19.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v19.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV25 {
    get(key: number): Promise<(v25.ScheduledV2 | undefined)[]>
    getAll(): Promise<(v25.ScheduledV2 | undefined)[][]>
    getMany(keys: number[]): Promise<(v25.ScheduledV2 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v25.ScheduledV2 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v25.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v25.ScheduledV2 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v25.ScheduledV2 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV38 {
    get(key: number): Promise<(v38.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v38.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v38.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v38.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v38.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v38.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v38.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV43 {
    get(key: number): Promise<(v43.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v43.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v43.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v43.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v43.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v43.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v43.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV55 {
    get(key: number): Promise<(v55.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v55.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v55.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v55.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v55.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v55.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v55.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV65 {
    get(key: number): Promise<(v65.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v65.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v65.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v65.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v65.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v65.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v65.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV69 {
    get(key: number): Promise<(v69.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v69.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v69.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v69.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v69.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v69.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v69.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV76 {
    get(key: number): Promise<(v76.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v76.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v76.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v76.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v76.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v76.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v76.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV81 {
    get(key: number): Promise<(v81.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v81.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v81.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v81.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v81.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v81.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v81.ScheduledV3 | undefined)[]][]>
}

export class SchedulerLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Lookup'
    }

    /**
     *  Lookup from identity to the block number and index of the task.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'd134b5bb4dad116817692e25dce47c836fbbb31d353d5749d4fc370b62e7286b'
    }

    /**
     *  Lookup from identity to the block number and index of the task.
     */
    get asV16(): SchedulerLookupStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Lookup from identity to the block number and index of the task.
 */
export interface SchedulerLookupStorageV16 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

export class SchedulerStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV16(): SchedulerStorageVersionStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '72d0250d593d30b1f3add64f6929fbab3a893f86a141cd017b38d4d3bda0330d'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV25(): SchedulerStorageVersionStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface SchedulerStorageVersionStorageV16 {
    get(): Promise<v16.Releases>
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface SchedulerStorageVersionStorageV25 {
    get(): Promise<v25.Type_258>
}

export class SessionCurrentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'CurrentIndex'
    }

    /**
     *  Current index of the session.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Current index of the session.
     */
    get asV16(): SessionCurrentIndexStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Current index of the session.
 */
export interface SessionCurrentIndexStorageV16 {
    get(): Promise<number>
}

export class SessionDisabledValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'DisabledValidators'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The set is cleared when `on_session_ending` returns a new set of identities.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The set is cleared when `on_session_ending` returns a new set of identities.
     */
    get asV16(): SessionDisabledValidatorsStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Indices of disabled validators.
 * 
 *  The set is cleared when `on_session_ending` returns a new set of identities.
 */
export interface SessionDisabledValidatorsStorageV16 {
    get(): Promise<number[]>
}

export class SessionKeyOwnerStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'KeyOwner'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '1c05e6d248d0d3f2ef2467d3e23031e7885220321b761d4eda9deda33530daa1'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asV16(): SessionKeyOwnerStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asV25(): SessionKeyOwnerStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageV16 {
    get(key: [number, Uint8Array]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key: [number, Uint8Array]): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key: [number, Uint8Array]): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairs(key: [number, Uint8Array]): Promise<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [number, Uint8Array]): AsyncIterable<[k: [number, Uint8Array], v: Uint8Array][]>
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageV25 {
    get(key: [Uint8Array, Uint8Array]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key: [Uint8Array, Uint8Array]): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairs(key: [Uint8Array, Uint8Array]): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
}

export class SessionNextKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'NextKeys'
    }

    /**
     *  The next session keys for a validator.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '06459dcdcc89901e73a147d4ae82c4f75070451bf16eb7d34c12175a2b1401b7'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV16(): SessionNextKeysStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  The next session keys for a validator.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '631bdf50943dc1aa6eef0e538bc5f8db41fca7120b2bae11b9c7ad84ada29964'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV25(): SessionNextKeysStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV16 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, Uint8Array, Uint8Array][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, Uint8Array, Uint8Array] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV25 {
    get(key: Uint8Array): Promise<(v25.SessionKeys | undefined)>
    getAll(): Promise<v25.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(v25.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.SessionKeys][]>
}

export class SessionQueuedChangedStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedChanged'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get asV16(): SessionQueuedChangedStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface SessionQueuedChangedStorageV16 {
    get(): Promise<boolean>
}

export class SessionQueuedKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedKeys'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '97d429a9c24aed732193c357ecc2cbf69fd3bc9a616ef550f35af306547d9189'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV16(): SessionQueuedKeysStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '88cd205a98ff7b5562f0d030266b07e3566fdf283e05e6bd4c2405710a6a3b90'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV25(): SessionQueuedKeysStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV16 {
    get(): Promise<[Uint8Array, [Uint8Array, Uint8Array, Uint8Array, Uint8Array]][]>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV25 {
    get(): Promise<[Uint8Array, v25.SessionKeys][]>
}

export class SessionValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The current set of validators.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of validators.
     */
    get asV16(): SessionValidatorsStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The current set of validators.
 */
export interface SessionValidatorsStorageV16 {
    get(): Promise<Uint8Array[]>
}

export class SudoKeyStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'Key'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV16(): SudoKeyStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV38(): SudoKeyStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV16 {
    get(): Promise<Uint8Array>
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV38 {
    get(): Promise<(Uint8Array | undefined)>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV16(): SystemAccountStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV16 {
    get(key: Uint8Array): Promise<v16.AccountInfo>
    getAll(): Promise<v16.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v16.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.AccountInfo][]>
}

export class SystemAllExtrinsicsLenStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AllExtrinsicsLen'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asV16(): SystemAllExtrinsicsLenStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageV16 {
    get(): Promise<(number | undefined)>
}

export class SystemBlockHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockHash'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asV16(): SystemBlockHashStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageV16 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemBlockWeightStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockWeight'
    }

    /**
     *  The current weight for the block.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
    }

    /**
     *  The current weight for the block.
     */
    get asV16(): SystemBlockWeightStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  The current weight for the block.
     */
    get isV81(): boolean {
        return this.getTypeHash() === 'd35f09c6f3fd2f6e93d9006f364b5b6e91ce1207594e51247070364731dba424'
    }

    /**
     *  The current weight for the block.
     */
    get asV81(): SystemBlockWeightStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV16 {
    get(): Promise<v16.ConsumedWeight>
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV81 {
    get(): Promise<v81.PerDispatchClass>
}

export class SystemDigestStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Digest'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '1d49db8c467b8ce13c8d27dfc1293265e11d9e73050b590ac44aa31ca0eec876'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV16(): SystemDigestStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '08ab0f1eb08eb281a0be5123646d1a04bf4254218b3b8617ed26e880f8eaa52f'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV25(): SystemDigestStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV38(): SystemDigestStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV16 {
    get(): Promise<v16.DigestOf>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV25 {
    get(): Promise<v25.Digest>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV38 {
    get(): Promise<v38.Digest>
}

export class SystemEventCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventCount'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asV16(): SystemEventCountStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageV16 {
    get(): Promise<number>
}

export class SystemEventTopicsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventTopics'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get asV16(): SystemEventTopicsStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface SystemEventTopicsStorageV16 {
    get(key: Uint8Array): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: Uint8Array[]): Promise<[number, number][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
}

export class SystemEventsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Events'
    }

    /**
     *  Events deposited for the current block.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'e9bd65eee7845a402aea0ecc3f846219b6891f3fe5a054deb5e98ce2f75bef12'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV16(): SystemEventsStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV19(): boolean {
        return this.getTypeHash() === '7ff1d5c81977d32af277ce45eaa8eb442f43ecb648b58b390a58aedde7457de2'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV19(): SystemEventsStorageV19 {
        assert(this.isV19)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '10e70da0555cb9d8169a0b20aca33238a5dc5aa06878169c5ef32d6edebc1f67'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV25(): SystemEventsStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '45df96522ce217198addac073d04b93d8bdeac57a30ea940bfe0c5a2c033c760'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV38(): SystemEventsStorageV38 {
        assert(this.isV38)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV43(): boolean {
        return this.getTypeHash() === 'd74e653bdc089915cf79523e09885d8105726c50cdb92981f96b064ba236395d'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV43(): SystemEventsStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV55(): boolean {
        return this.getTypeHash() === '260b975d39f9437bfa3affe98db174c961e9c8ef0bf191f52e3e9a9e5ab563ab'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV55(): SystemEventsStorageV55 {
        assert(this.isV55)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV65(): boolean {
        return this.getTypeHash() === 'd9f3e9a00cc60fb5ad4e74eb778a1c0b505bdc3917043d7c7948a962b8bebd41'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV65(): SystemEventsStorageV65 {
        assert(this.isV65)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV69(): boolean {
        return this.getTypeHash() === '50eabdd8720b7a0903e9569f57dc45832654c1895657f7ee45489741b365f784'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV69(): SystemEventsStorageV69 {
        assert(this.isV69)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV71(): boolean {
        return this.getTypeHash() === '5a42b4af4d1bf96f7846c46892425aee1ee4ba0d44dced3299d20e5812c2c60a'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV71(): SystemEventsStorageV71 {
        assert(this.isV71)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV76(): boolean {
        return this.getTypeHash() === '95148f20c44e940e3d42ca32af4d578404e6919eff41ffda0418cc86757a72d5'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV76(): SystemEventsStorageV76 {
        assert(this.isV76)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV81(): boolean {
        return this.getTypeHash() === '406e53e2a10a20e3b7738872d5fd6482e46d0619389839a30c7dd5aab9f6006a'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV81(): SystemEventsStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV16 {
    get(): Promise<v16.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV19 {
    get(): Promise<v19.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV25 {
    get(): Promise<v25.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV38 {
    get(): Promise<v38.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV43 {
    get(): Promise<v43.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV55 {
    get(): Promise<v55.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV65 {
    get(): Promise<v65.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV69 {
    get(): Promise<v69.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV71 {
    get(): Promise<v71.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV76 {
    get(): Promise<v76.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV81 {
    get(): Promise<v81.EventRecord[]>
}

export class SystemExecutionPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExecutionPhase'
    }

    /**
     *  The execution phase of the block.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asV16(): SystemExecutionPhaseStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageV16 {
    get(): Promise<(v16.Phase | undefined)>
}

export class SystemExtrinsicCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicCount'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asV16(): SystemExtrinsicCountStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageV16 {
    get(): Promise<(number | undefined)>
}

export class SystemExtrinsicDataStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicData'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asV16(): SystemExtrinsicDataStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageV16 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemLastRuntimeUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'LastRuntimeUpgrade'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asV16(): SystemLastRuntimeUpgradeStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageV16 {
    get(): Promise<(v16.LastRuntimeUpgradeInfo | undefined)>
}

export class SystemNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Number'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asV16(): SystemNumberStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageV16 {
    get(): Promise<number>
}

export class SystemParentHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ParentHash'
    }

    /**
     *  Hash of the previous block.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asV16(): SystemParentHashStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageV16 {
    get(): Promise<Uint8Array>
}

export class SystemUpgradedToTripleRefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToTripleRefCount'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asV16(): SystemUpgradedToTripleRefCountStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageV16 {
    get(): Promise<boolean>
}

export class SystemUpgradedToU32RefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToU32RefCount'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asV16(): SystemUpgradedToU32RefCountStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageV16 {
    get(): Promise<boolean>
}

export class TechnicalCommitteeMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV25(): TechnicalCommitteeMembersStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface TechnicalCommitteeMembersStorageV25 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV25(): TechnicalCommitteePrimeStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface TechnicalCommitteePrimeStorageV25 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TechnicalCommitteeProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV25(): TechnicalCommitteeProposalCountStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface TechnicalCommitteeProposalCountStorageV25 {
    get(): Promise<number>
}

export class TechnicalCommitteeProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'f15f18dbb29d2b02a4587232b780e25a2eb024284970ccbd6450ac7a1d09d3ea'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV25(): TechnicalCommitteeProposalOfStorageV25 {
        assert(this.isV25)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '1ac560650690d36290194953cc63fa6a0a40e9a291bbf1fd8d8822aa80283a2e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV38(): TechnicalCommitteeProposalOfStorageV38 {
        assert(this.isV38)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV43(): boolean {
        return this.getTypeHash() === '6c32784600097763396a9d6ed2cdb8fea2f274fb6bdcdd593ebc3e37e61555d2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV43(): TechnicalCommitteeProposalOfStorageV43 {
        assert(this.isV43)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV55(): boolean {
        return this.getTypeHash() === 'dc20f54a7aa8bd158193ca1cd81811d531a2f6dd81a31ec231d37a6d502c6eaf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV55(): TechnicalCommitteeProposalOfStorageV55 {
        assert(this.isV55)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV65(): boolean {
        return this.getTypeHash() === '43ec1e4f4a6ba0edbbca67ee06379cba4e8a527fa11bad2dee2fd27970a4dd24'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV65(): TechnicalCommitteeProposalOfStorageV65 {
        assert(this.isV65)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV69(): boolean {
        return this.getTypeHash() === '6a9f8ef74fb009d3a1fd9eab8e5fd5b140259527353a802492fd8805ea46346d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV69(): TechnicalCommitteeProposalOfStorageV69 {
        assert(this.isV69)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV76(): boolean {
        return this.getTypeHash() === '3139bede1891fa32ec68cbfda59e169e3a8ec9dc8a98058e02ac0f7cae6589b2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV76(): TechnicalCommitteeProposalOfStorageV76 {
        assert(this.isV76)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV81(): boolean {
        return this.getTypeHash() === 'c23fea02087dc5044b91542a294db489c177d079476732e191c6595898fed063'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV81(): TechnicalCommitteeProposalOfStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV25 {
    get(key: Uint8Array): Promise<(v25.Call | undefined)>
    getAll(): Promise<v25.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v25.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV38 {
    get(key: Uint8Array): Promise<(v38.Call | undefined)>
    getAll(): Promise<v38.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v38.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v38.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v38.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v38.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v38.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV43 {
    get(key: Uint8Array): Promise<(v43.Call | undefined)>
    getAll(): Promise<v43.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v43.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v43.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v43.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v43.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v43.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV55 {
    get(key: Uint8Array): Promise<(v55.Call | undefined)>
    getAll(): Promise<v55.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v55.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v55.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v55.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v55.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v55.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV65 {
    get(key: Uint8Array): Promise<(v65.Call | undefined)>
    getAll(): Promise<v65.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v65.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v65.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v65.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v65.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v65.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV69 {
    get(key: Uint8Array): Promise<(v69.Call | undefined)>
    getAll(): Promise<v69.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v69.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v69.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v69.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v69.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v69.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV76 {
    get(key: Uint8Array): Promise<(v76.Call | undefined)>
    getAll(): Promise<v76.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v76.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v76.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v76.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v76.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v76.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV81 {
    get(key: Uint8Array): Promise<(v81.Call | undefined)>
    getAll(): Promise<v81.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v81.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v81.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v81.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v81.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v81.Call][]>
}

export class TechnicalCommitteeProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV25(): TechnicalCommitteeProposalsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface TechnicalCommitteeProposalsStorageV25 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteeVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV25(): TechnicalCommitteeVotingStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface TechnicalCommitteeVotingStorageV25 {
    get(key: Uint8Array): Promise<(v25.Votes | undefined)>
    getAll(): Promise<v25.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v25.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.Votes][]>
}

export class TimestampDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'DidUpdate'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get isV16(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asV16(): TimestampDidUpdateStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageV16 {
    get(): Promise<boolean>
}

export class TimestampNowStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'Now'
    }

    /**
     *  Current time for the current block.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asV16(): TimestampNowStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageV16 {
    get(): Promise<bigint>
}

export class TipsReasonsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tips'
    }

    protected getName() {
        return 'Reasons'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV25(): TipsReasonsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TipsReasonsStorageV25 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class TipsTipsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tips'
    }

    protected getName() {
        return 'Tips'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV25(): TipsTipsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsTipsStorageV25 {
    get(key: Uint8Array): Promise<(v25.OpenTip | undefined)>
    getAll(): Promise<v25.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v25.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v25.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v25.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v25.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v25.OpenTip][]>
}

export class TokensAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'Accounts'
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'a26051f141f21fd7c93e2a182d6c1e4f8761450a5c353a10a92cab5378a9b5a5'
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get asV16(): TokensAccountsStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'f23ccc2edbd0e524d74d373fab61041d022935fc96a13cb996c4083b37cae759'
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get asV25(): TokensAccountsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface TokensAccountsStorageV16 {
    get(key1: Uint8Array, key2: number): Promise<v16.AccountData>
    getAll(): Promise<v16.AccountData[]>
    getMany(keys: [Uint8Array, number][]): Promise<v16.AccountData[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v16.AccountData][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v16.AccountData][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v16.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v16.AccountData][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v16.AccountData][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v16.AccountData][]>
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface TokensAccountsStorageV25 {
    get(key1: Uint8Array, key2: number): Promise<v25.Type_357>
    getAll(): Promise<v25.Type_357[]>
    getMany(keys: [Uint8Array, number][]): Promise<v25.Type_357[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v25.Type_357][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v25.Type_357][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v25.Type_357][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v25.Type_357][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v25.Type_357][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v25.Type_357][]>
}

export class TokensLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '238a915ae24ea0b842e9a0f183a18b8fc61717395c9bcccf66d5d20dc078f84d'
    }

    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV16(): TokensLocksStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '94d13c37bf173a8e289a7abf6d778dc28e075e16963c06c041136f789ac66572'
    }

    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV25(): TokensLocksStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Any liquidity locks of a token type under an account.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface TokensLocksStorageV16 {
    get(key1: Uint8Array, key2: number): Promise<v16.BalanceLock[]>
    getAll(): Promise<v16.BalanceLock[][]>
    getMany(keys: [Uint8Array, number][]): Promise<v16.BalanceLock[][]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v16.BalanceLock[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v16.BalanceLock[]][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v16.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v16.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v16.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v16.BalanceLock[]][]>
}

/**
 *  Any liquidity locks of a token type under an account.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface TokensLocksStorageV25 {
    get(key1: Uint8Array, key2: number): Promise<v25.Type_355[]>
    getAll(): Promise<v25.Type_355[][]>
    getMany(keys: [Uint8Array, number][]): Promise<v25.Type_355[][]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v25.Type_355[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v25.Type_355[]][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v25.Type_355[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v25.Type_355[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v25.Type_355[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v25.Type_355[]][]>
}

export class TokensReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV81(): boolean {
        return this.getTypeHash() === 'c52f3724d73e06d2d6c3be04d1e6f5b30b553f6cc103fb0f712f1e4e918f9f8e'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV81(): TokensReservesStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface TokensReservesStorageV81 {
    get(key1: Uint8Array, key2: number): Promise<v81.ReserveData[]>
    getAll(): Promise<v81.ReserveData[][]>
    getMany(keys: [Uint8Array, number][]): Promise<v81.ReserveData[][]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v81.ReserveData[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v81.ReserveData[]][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v81.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v81.ReserveData[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v81.ReserveData[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v81.ReserveData[]][]>
}

export class TokensTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total issuance of a token type.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The total issuance of a token type.
     */
    get asV16(): TokensTotalIssuanceStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The total issuance of a token type.
 */
export interface TokensTotalIssuanceStorageV16 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class TransactionPausePausedTransactionsStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPause'
    }

    protected getName() {
        return 'PausedTransactions'
    }

    /**
     *  The paused transaction map
     * 
     *  map (PalletNameBytes, FunctionNameBytes) => Option<()>
     */
    get isV65(): boolean {
        return this.getTypeHash() === 'b84898f3d187596a7b6e3678769d37269c8b37c42ad19309d36b974ad9f3d352'
    }

    /**
     *  The paused transaction map
     * 
     *  map (PalletNameBytes, FunctionNameBytes) => Option<()>
     */
    get asV65(): TransactionPausePausedTransactionsStorageV65 {
        assert(this.isV65)
        return this as any
    }
}

/**
 *  The paused transaction map
 * 
 *  map (PalletNameBytes, FunctionNameBytes) => Option<()>
 */
export interface TransactionPausePausedTransactionsStorageV65 {
    get(key: [Uint8Array, Uint8Array]): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(null | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key: [Uint8Array, Uint8Array]): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairs(key: [Uint8Array, Uint8Array]): Promise<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[k: [Uint8Array, Uint8Array], v: null][]>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isV16(): boolean {
        return this.getTypeHash() === '8840628264db1877ef5c3718a00459d4b519de0922f813836237f71320a25aa6'
    }

    get asV16(): TransactionPaymentNextFeeMultiplierStorageV16 {
        assert(this.isV16)
        return this as any
    }

    get isV25(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV25(): TransactionPaymentNextFeeMultiplierStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageV16 {
    get(): Promise<bigint>
}

export interface TransactionPaymentNextFeeMultiplierStorageV25 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isV16(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    get asV16(): TransactionPaymentStorageVersionStorageV16 {
        assert(this.isV16)
        return this as any
    }

    get isV25(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asV25(): TransactionPaymentStorageVersionStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageV16 {
    get(): Promise<v16.Releases>
}

export interface TransactionPaymentStorageVersionStorageV25 {
    get(): Promise<v25.Type_154>
}

export class TreasuryApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Approvals'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get asV16(): TreasuryApprovalsStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface TreasuryApprovalsStorageV16 {
    get(): Promise<number[]>
}

export class TreasuryProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Number of proposals that have been made.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of proposals that have been made.
     */
    get asV16(): TreasuryProposalCountStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Number of proposals that have been made.
 */
export interface TreasuryProposalCountStorageV16 {
    get(): Promise<number>
}

export class TreasuryProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  Proposals that have been made.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV16(): TreasuryProposalsStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV16 {
    get(key: number): Promise<(v16.TreasuryProposal | undefined)>
    getAll(): Promise<v16.TreasuryProposal[]>
    getMany(keys: number[]): Promise<(v16.TreasuryProposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v16.TreasuryProposal][]>
    getPairs(key: number): Promise<[k: number, v: v16.TreasuryProposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v16.TreasuryProposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v16.TreasuryProposal][]>
}

export class TreasuryReasonsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Reasons'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV16(): TreasuryReasonsStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TreasuryReasonsStorageV16 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class TreasuryTipsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Tips'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV16(): TreasuryTipsStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TreasuryTipsStorageV16 {
    get(key: Uint8Array): Promise<(v16.OpenTip | undefined)>
    getAll(): Promise<v16.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v16.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.OpenTip][]>
}

export class UniquesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The assets held by any given account; set out this way so that assets owned by a single
     *  account can be enumerated.
     */
    get isV38(): boolean {
        return this.getTypeHash() === 'dd717df0f824c1616e58c0f411648150ead9ba80eb70d3fa1d3ce17cf15cdb99'
    }

    /**
     *  The assets held by any given account; set out this way so that assets owned by a single
     *  account can be enumerated.
     */
    get asV38(): UniquesAccountStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The assets held by any given account; set out this way so that assets owned by a single
 *  account can be enumerated.
 */
export interface UniquesAccountStorageV38 {
    get(key1: Uint8Array, key2: bigint, key3: bigint): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: [Uint8Array, bigint, bigint][]): Promise<(null | undefined)[]>
    getKeys(): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getPairs(): Promise<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairs(key1: Uint8Array, key2: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairs(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: null][]>
}

export class UniquesAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'Asset'
    }

    /**
     *  The assets in existence and their ownership details.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '473a8db9ad3cadcd73a4d1d940a1b477f877f8a199d89bcf4b57a170d7e2e7fb'
    }

    /**
     *  The assets in existence and their ownership details.
     */
    get asV38(): UniquesAssetStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The assets in existence and their ownership details.
 */
export interface UniquesAssetStorageV38 {
    get(key1: bigint, key2: bigint): Promise<(v38.InstanceDetails | undefined)>
    getAll(): Promise<v38.InstanceDetails[]>
    getMany(keys: [bigint, bigint][]): Promise<(v38.InstanceDetails | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v38.InstanceDetails][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v38.InstanceDetails][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v38.InstanceDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v38.InstanceDetails][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v38.InstanceDetails][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v38.InstanceDetails][]>
}

export class UniquesAttributeStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'Attribute'
    }

    /**
     *  Metadata of an asset class.
     */
    get isV38(): boolean {
        return this.getTypeHash() === 'a3a0ccec7ada073a05ca828d16c2decda5dc3aaf3545c5c22f508123c0751a45'
    }

    /**
     *  Metadata of an asset class.
     */
    get asV38(): UniquesAttributeStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Metadata of an asset class.
 */
export interface UniquesAttributeStorageV38 {
    get(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<([Uint8Array, bigint] | undefined)>
    getAll(): Promise<[Uint8Array, bigint][]>
    getMany(keys: [bigint, (bigint | undefined), Uint8Array][]): Promise<([Uint8Array, bigint] | undefined)[]>
    getKeys(): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint, key2: (bigint | undefined)): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: (bigint | undefined)): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: (bigint | undefined), key3: Uint8Array): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getPairs(): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: [Uint8Array, bigint]][]>
    getPairs(key1: bigint): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: [Uint8Array, bigint]][]>
    getPairs(key1: bigint, key2: (bigint | undefined)): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: [Uint8Array, bigint]][]>
    getPairs(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: [Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: [Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: [Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: (bigint | undefined)): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: [Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: (bigint | undefined), key3: Uint8Array): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: [Uint8Array, bigint]][]>
}

export class UniquesClassStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'Class'
    }

    /**
     *  Details of an asset class.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '64b5101df343156a22be92d239c86e3010267e182a902a0c77b89a0150e1eb2a'
    }

    /**
     *  Details of an asset class.
     */
    get asV38(): UniquesClassStorageV38 {
        assert(this.isV38)
        return this as any
    }

    /**
     *  Details of a collection.
     */
    get isV81(): boolean {
        return this.getTypeHash() === '73a840238efb8714da70fd9dd693522d9b2f2a675103b7104133e1e222977fbb'
    }

    /**
     *  Details of a collection.
     */
    get asV81(): UniquesClassStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  Details of an asset class.
 */
export interface UniquesClassStorageV38 {
    get(key: bigint): Promise<(v38.ClassDetails | undefined)>
    getAll(): Promise<v38.ClassDetails[]>
    getMany(keys: bigint[]): Promise<(v38.ClassDetails | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v38.ClassDetails][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v38.ClassDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v38.ClassDetails][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v38.ClassDetails][]>
}

/**
 *  Details of a collection.
 */
export interface UniquesClassStorageV81 {
    get(key: bigint): Promise<(v81.CollectionDetails | undefined)>
    getAll(): Promise<v81.CollectionDetails[]>
    getMany(keys: bigint[]): Promise<(v81.CollectionDetails | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v81.CollectionDetails][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v81.CollectionDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v81.CollectionDetails][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v81.CollectionDetails][]>
}

export class UniquesClassAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'ClassAccount'
    }

    /**
     *  The classes owned by any given account; set out this way so that classes owned by a single
     *  account can be enumerated.
     */
    get isV38(): boolean {
        return this.getTypeHash() === 'aa05d715557dda88cd21e53b8460b3ef83dc91868ade890f7afcc69de18cb707'
    }

    /**
     *  The classes owned by any given account; set out this way so that classes owned by a single
     *  account can be enumerated.
     */
    get asV38(): UniquesClassAccountStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The classes owned by any given account; set out this way so that classes owned by a single
 *  account can be enumerated.
 */
export interface UniquesClassAccountStorageV38 {
    get(key1: Uint8Array, key2: bigint): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: [Uint8Array, bigint][]): Promise<(null | undefined)[]>
    getKeys(): Promise<[Uint8Array, bigint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint): Promise<[Uint8Array, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[Uint8Array, bigint][]>
    getPairs(): Promise<[k: [Uint8Array, bigint], v: null][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, bigint], v: null][]>
    getPairs(key1: Uint8Array, key2: bigint): Promise<[k: [Uint8Array, bigint], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, bigint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, bigint], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[k: [Uint8Array, bigint], v: null][]>
}

export class UniquesClassMetadataOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'ClassMetadataOf'
    }

    /**
     *  Metadata of an asset class.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '4ca83ab7415e7250d6c720a9930f95ae0d08c121898b5e01b38abf9add691411'
    }

    /**
     *  Metadata of an asset class.
     */
    get asV38(): UniquesClassMetadataOfStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Metadata of an asset class.
 */
export interface UniquesClassMetadataOfStorageV38 {
    get(key: bigint): Promise<(v38.ClassMetadata | undefined)>
    getAll(): Promise<v38.ClassMetadata[]>
    getMany(keys: bigint[]): Promise<(v38.ClassMetadata | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v38.ClassMetadata][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v38.ClassMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v38.ClassMetadata][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v38.ClassMetadata][]>
}

export class UniquesCollectionMaxSupplyStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'CollectionMaxSupply'
    }

    /**
     *  Keeps track of the number of items a collection might have.
     */
    get isV81(): boolean {
        return this.getTypeHash() === '9f62a6a8b43200f35fa1fc57463869be42d2dc9a1bddbdf57ca30f05c51d6786'
    }

    /**
     *  Keeps track of the number of items a collection might have.
     */
    get asV81(): UniquesCollectionMaxSupplyStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  Keeps track of the number of items a collection might have.
 */
export interface UniquesCollectionMaxSupplyStorageV81 {
    get(key: bigint): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: number][]>
    getPairs(key: bigint): Promise<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: number][]>
}

export class UniquesInstanceMetadataOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'InstanceMetadataOf'
    }

    /**
     *  Metadata of an asset instance.
     */
    get isV38(): boolean {
        return this.getTypeHash() === 'b930ce9a1c8bff9d1191f22c2274c59d0c049903864e92d1c09b9b65303145cd'
    }

    /**
     *  Metadata of an asset instance.
     */
    get asV38(): UniquesInstanceMetadataOfStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Metadata of an asset instance.
 */
export interface UniquesInstanceMetadataOfStorageV38 {
    get(key1: bigint, key2: bigint): Promise<(v38.InstanceMetadata | undefined)>
    getAll(): Promise<v38.InstanceMetadata[]>
    getMany(keys: [bigint, bigint][]): Promise<(v38.InstanceMetadata | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v38.InstanceMetadata][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v38.InstanceMetadata][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v38.InstanceMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v38.InstanceMetadata][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v38.InstanceMetadata][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v38.InstanceMetadata][]>
}

export class UniquesItemPriceOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'ItemPriceOf'
    }

    /**
     *  Price of an asset instance.
     */
    get isV81(): boolean {
        return this.getTypeHash() === 'aeb23c868d0bbc880699b1dcae9f5c78b89d50c31eb7324014031d29d7806afa'
    }

    /**
     *  Price of an asset instance.
     */
    get asV81(): UniquesItemPriceOfStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  Price of an asset instance.
 */
export interface UniquesItemPriceOfStorageV81 {
    get(key1: bigint, key2: bigint): Promise<([bigint, (Uint8Array | undefined)] | undefined)>
    getAll(): Promise<[bigint, (Uint8Array | undefined)][]>
    getMany(keys: [bigint, bigint][]): Promise<([bigint, (Uint8Array | undefined)] | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: [bigint, (Uint8Array | undefined)]][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: [bigint, (Uint8Array | undefined)]][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: [bigint, (Uint8Array | undefined)]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: [bigint, (Uint8Array | undefined)]][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: [bigint, (Uint8Array | undefined)]][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: [bigint, (Uint8Array | undefined)]][]>
}

export class UniquesOwnershipAcceptanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Uniques'
    }

    protected getName() {
        return 'OwnershipAcceptance'
    }

    /**
     *  The collection, if any, of which an account is willing to take ownership.
     */
    get isV81(): boolean {
        return this.getTypeHash() === '009da6de235ea9f0b5ac0b37d404d4fe998946da2f8f3e9c0899035c6d182a52'
    }

    /**
     *  The collection, if any, of which an account is willing to take ownership.
     */
    get asV81(): UniquesOwnershipAcceptanceStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  The collection, if any, of which an account is willing to take ownership.
 */
export interface UniquesOwnershipAcceptanceStorageV81 {
    get(key: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class UnknownTokensAbstractFungibleBalancesStorage extends StorageBase {
    protected getPrefix() {
        return 'UnknownTokens'
    }

    protected getName() {
        return 'AbstractFungibleBalances'
    }

    /**
     *  Abstract fungible balances under a given location and a abstract
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get isV16(): boolean {
        return this.getTypeHash() === '76f77ba33cbe0e1ec5c1aefed9ad4b21c46c08afeb15a0d75d9403da3780bf4b'
    }

    /**
     *  Abstract fungible balances under a given location and a abstract
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get asV16(): UnknownTokensAbstractFungibleBalancesStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Abstract fungible balances under a given location and a abstract
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get isV19(): boolean {
        return this.getTypeHash() === '4ea57721630110b955e0333c45bd0ff4ee172aa08927c05754bbf799a9158665'
    }

    /**
     *  Abstract fungible balances under a given location and a abstract
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get asV19(): UnknownTokensAbstractFungibleBalancesStorageV19 {
        assert(this.isV19)
        return this as any
    }

    /**
     *  Abstract fungible balances under a given location and a abstract
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'f6cf7e5c9878cef27f99d1df60d9721e0034a66cd864d15d65a9196bb951c149'
    }

    /**
     *  Abstract fungible balances under a given location and a abstract
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get asV25(): UnknownTokensAbstractFungibleBalancesStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Abstract fungible balances under a given location and a abstract
 *  fungible id.
 * 
 *  double_map: who, asset_id => u128
 */
export interface UnknownTokensAbstractFungibleBalancesStorageV16 {
    get(key1: v16.MultiLocation, key2: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [v16.MultiLocation, Uint8Array][]): Promise<bigint[]>
    getKeys(): Promise<[v16.MultiLocation, Uint8Array][]>
    getKeys(key1: v16.MultiLocation): Promise<[v16.MultiLocation, Uint8Array][]>
    getKeys(key1: v16.MultiLocation, key2: Uint8Array): Promise<[v16.MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v16.MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v16.MultiLocation): AsyncIterable<[v16.MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v16.MultiLocation, key2: Uint8Array): AsyncIterable<[v16.MultiLocation, Uint8Array][]>
    getPairs(): Promise<[k: [v16.MultiLocation, Uint8Array], v: bigint][]>
    getPairs(key1: v16.MultiLocation): Promise<[k: [v16.MultiLocation, Uint8Array], v: bigint][]>
    getPairs(key1: v16.MultiLocation, key2: Uint8Array): Promise<[k: [v16.MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v16.MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v16.MultiLocation): AsyncIterable<[k: [v16.MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v16.MultiLocation, key2: Uint8Array): AsyncIterable<[k: [v16.MultiLocation, Uint8Array], v: bigint][]>
}

/**
 *  Abstract fungible balances under a given location and a abstract
 *  fungible id.
 * 
 *  double_map: who, asset_id => u128
 */
export interface UnknownTokensAbstractFungibleBalancesStorageV19 {
    get(key1: v19.MultiLocation, key2: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [v19.MultiLocation, Uint8Array][]): Promise<bigint[]>
    getKeys(): Promise<[v19.MultiLocation, Uint8Array][]>
    getKeys(key1: v19.MultiLocation): Promise<[v19.MultiLocation, Uint8Array][]>
    getKeys(key1: v19.MultiLocation, key2: Uint8Array): Promise<[v19.MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v19.MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v19.MultiLocation): AsyncIterable<[v19.MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v19.MultiLocation, key2: Uint8Array): AsyncIterable<[v19.MultiLocation, Uint8Array][]>
    getPairs(): Promise<[k: [v19.MultiLocation, Uint8Array], v: bigint][]>
    getPairs(key1: v19.MultiLocation): Promise<[k: [v19.MultiLocation, Uint8Array], v: bigint][]>
    getPairs(key1: v19.MultiLocation, key2: Uint8Array): Promise<[k: [v19.MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v19.MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v19.MultiLocation): AsyncIterable<[k: [v19.MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v19.MultiLocation, key2: Uint8Array): AsyncIterable<[k: [v19.MultiLocation, Uint8Array], v: bigint][]>
}

/**
 *  Abstract fungible balances under a given location and a abstract
 *  fungible id.
 * 
 *  double_map: who, asset_id => u128
 */
export interface UnknownTokensAbstractFungibleBalancesStorageV25 {
    get(key1: v25.V1MultiLocation, key2: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [v25.V1MultiLocation, Uint8Array][]): Promise<bigint[]>
    getKeys(): Promise<[v25.V1MultiLocation, Uint8Array][]>
    getKeys(key1: v25.V1MultiLocation): Promise<[v25.V1MultiLocation, Uint8Array][]>
    getKeys(key1: v25.V1MultiLocation, key2: Uint8Array): Promise<[v25.V1MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v25.V1MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v25.V1MultiLocation): AsyncIterable<[v25.V1MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v25.V1MultiLocation, key2: Uint8Array): AsyncIterable<[v25.V1MultiLocation, Uint8Array][]>
    getPairs(): Promise<[k: [v25.V1MultiLocation, Uint8Array], v: bigint][]>
    getPairs(key1: v25.V1MultiLocation): Promise<[k: [v25.V1MultiLocation, Uint8Array], v: bigint][]>
    getPairs(key1: v25.V1MultiLocation, key2: Uint8Array): Promise<[k: [v25.V1MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v25.V1MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v25.V1MultiLocation): AsyncIterable<[k: [v25.V1MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v25.V1MultiLocation, key2: Uint8Array): AsyncIterable<[k: [v25.V1MultiLocation, Uint8Array], v: bigint][]>
}

export class UnknownTokensConcreteFungibleBalancesStorage extends StorageBase {
    protected getPrefix() {
        return 'UnknownTokens'
    }

    protected getName() {
        return 'ConcreteFungibleBalances'
    }

    /**
     *  Concrete fungible balances under a given location and a concrete
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'a12e7769d9cd3cbefef79a25e6816019dd2da62222ca3f513b71b4f1d0a20e38'
    }

    /**
     *  Concrete fungible balances under a given location and a concrete
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get asV16(): UnknownTokensConcreteFungibleBalancesStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Concrete fungible balances under a given location and a concrete
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get isV19(): boolean {
        return this.getTypeHash() === '51060ad8ac34770d8a579693bb72b3bb8e31b9ef2564c854fbcfd3bf87a51990'
    }

    /**
     *  Concrete fungible balances under a given location and a concrete
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get asV19(): UnknownTokensConcreteFungibleBalancesStorageV19 {
        assert(this.isV19)
        return this as any
    }

    /**
     *  Concrete fungible balances under a given location and a concrete
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get isV25(): boolean {
        return this.getTypeHash() === 'a1d05d2a23ba410062fdbbbbea5e8c90763e56102572e63e7d9a78dff938ef51'
    }

    /**
     *  Concrete fungible balances under a given location and a concrete
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get asV25(): UnknownTokensConcreteFungibleBalancesStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Concrete fungible balances under a given location and a concrete
 *  fungible id.
 * 
 *  double_map: who, asset_id => u128
 */
export interface UnknownTokensConcreteFungibleBalancesStorageV16 {
    get(key1: v16.MultiLocation, key2: v16.MultiLocation): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [v16.MultiLocation, v16.MultiLocation][]): Promise<bigint[]>
    getKeys(): Promise<[v16.MultiLocation, v16.MultiLocation][]>
    getKeys(key1: v16.MultiLocation): Promise<[v16.MultiLocation, v16.MultiLocation][]>
    getKeys(key1: v16.MultiLocation, key2: v16.MultiLocation): Promise<[v16.MultiLocation, v16.MultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v16.MultiLocation, v16.MultiLocation][]>
    getKeysPaged(pageSize: number, key1: v16.MultiLocation): AsyncIterable<[v16.MultiLocation, v16.MultiLocation][]>
    getKeysPaged(pageSize: number, key1: v16.MultiLocation, key2: v16.MultiLocation): AsyncIterable<[v16.MultiLocation, v16.MultiLocation][]>
    getPairs(): Promise<[k: [v16.MultiLocation, v16.MultiLocation], v: bigint][]>
    getPairs(key1: v16.MultiLocation): Promise<[k: [v16.MultiLocation, v16.MultiLocation], v: bigint][]>
    getPairs(key1: v16.MultiLocation, key2: v16.MultiLocation): Promise<[k: [v16.MultiLocation, v16.MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v16.MultiLocation, v16.MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v16.MultiLocation): AsyncIterable<[k: [v16.MultiLocation, v16.MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v16.MultiLocation, key2: v16.MultiLocation): AsyncIterable<[k: [v16.MultiLocation, v16.MultiLocation], v: bigint][]>
}

/**
 *  Concrete fungible balances under a given location and a concrete
 *  fungible id.
 * 
 *  double_map: who, asset_id => u128
 */
export interface UnknownTokensConcreteFungibleBalancesStorageV19 {
    get(key1: v19.MultiLocation, key2: v19.MultiLocation): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [v19.MultiLocation, v19.MultiLocation][]): Promise<bigint[]>
    getKeys(): Promise<[v19.MultiLocation, v19.MultiLocation][]>
    getKeys(key1: v19.MultiLocation): Promise<[v19.MultiLocation, v19.MultiLocation][]>
    getKeys(key1: v19.MultiLocation, key2: v19.MultiLocation): Promise<[v19.MultiLocation, v19.MultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v19.MultiLocation, v19.MultiLocation][]>
    getKeysPaged(pageSize: number, key1: v19.MultiLocation): AsyncIterable<[v19.MultiLocation, v19.MultiLocation][]>
    getKeysPaged(pageSize: number, key1: v19.MultiLocation, key2: v19.MultiLocation): AsyncIterable<[v19.MultiLocation, v19.MultiLocation][]>
    getPairs(): Promise<[k: [v19.MultiLocation, v19.MultiLocation], v: bigint][]>
    getPairs(key1: v19.MultiLocation): Promise<[k: [v19.MultiLocation, v19.MultiLocation], v: bigint][]>
    getPairs(key1: v19.MultiLocation, key2: v19.MultiLocation): Promise<[k: [v19.MultiLocation, v19.MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v19.MultiLocation, v19.MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v19.MultiLocation): AsyncIterable<[k: [v19.MultiLocation, v19.MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v19.MultiLocation, key2: v19.MultiLocation): AsyncIterable<[k: [v19.MultiLocation, v19.MultiLocation], v: bigint][]>
}

/**
 *  Concrete fungible balances under a given location and a concrete
 *  fungible id.
 * 
 *  double_map: who, asset_id => u128
 */
export interface UnknownTokensConcreteFungibleBalancesStorageV25 {
    get(key1: v25.V1MultiLocation, key2: v25.V1MultiLocation): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [v25.V1MultiLocation, v25.V1MultiLocation][]): Promise<bigint[]>
    getKeys(): Promise<[v25.V1MultiLocation, v25.V1MultiLocation][]>
    getKeys(key1: v25.V1MultiLocation): Promise<[v25.V1MultiLocation, v25.V1MultiLocation][]>
    getKeys(key1: v25.V1MultiLocation, key2: v25.V1MultiLocation): Promise<[v25.V1MultiLocation, v25.V1MultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v25.V1MultiLocation, v25.V1MultiLocation][]>
    getKeysPaged(pageSize: number, key1: v25.V1MultiLocation): AsyncIterable<[v25.V1MultiLocation, v25.V1MultiLocation][]>
    getKeysPaged(pageSize: number, key1: v25.V1MultiLocation, key2: v25.V1MultiLocation): AsyncIterable<[v25.V1MultiLocation, v25.V1MultiLocation][]>
    getPairs(): Promise<[k: [v25.V1MultiLocation, v25.V1MultiLocation], v: bigint][]>
    getPairs(key1: v25.V1MultiLocation): Promise<[k: [v25.V1MultiLocation, v25.V1MultiLocation], v: bigint][]>
    getPairs(key1: v25.V1MultiLocation, key2: v25.V1MultiLocation): Promise<[k: [v25.V1MultiLocation, v25.V1MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v25.V1MultiLocation, v25.V1MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v25.V1MultiLocation): AsyncIterable<[k: [v25.V1MultiLocation, v25.V1MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v25.V1MultiLocation, key2: v25.V1MultiLocation): AsyncIterable<[k: [v25.V1MultiLocation, v25.V1MultiLocation], v: bigint][]>
}

export class VestingVestingSchedulesStorage extends StorageBase {
    protected getPrefix() {
        return 'Vesting'
    }

    protected getName() {
        return 'VestingSchedules'
    }

    /**
     *  Vesting schedules of an account.
     * 
     *  VestingSchedules: map AccountId => Vec<VestingSchedule>
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'd1025301ffa60f04c50bb1007ecb356d52103dd9c366150de1ba80c6e043ac2f'
    }

    /**
     *  Vesting schedules of an account.
     * 
     *  VestingSchedules: map AccountId => Vec<VestingSchedule>
     */
    get asV16(): VestingVestingSchedulesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Vesting schedules of an account.
 * 
 *  VestingSchedules: map AccountId => Vec<VestingSchedule>
 */
export interface VestingVestingSchedulesStorageV16 {
    get(key: Uint8Array): Promise<v16.VestingScheduleOf[]>
    getAll(): Promise<v16.VestingScheduleOf[][]>
    getMany(keys: Uint8Array[]): Promise<v16.VestingScheduleOf[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v16.VestingScheduleOf[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v16.VestingScheduleOf[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v16.VestingScheduleOf[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v16.VestingScheduleOf[]][]>
}

export class XYKPoolAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'XYK'
    }

    protected getName() {
        return 'PoolAssets'
    }

    /**
     *  Asset pair in a pool.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '8cb809946d08d9fe36339617df99e6f136b8d6108b6845510132e1f0b84b7af2'
    }

    /**
     *  Asset pair in a pool.
     */
    get asV16(): XYKPoolAssetsStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Asset pair in a pool.
     */
    get isV25(): boolean {
        return this.getTypeHash() === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
    }

    /**
     *  Asset pair in a pool.
     */
    get asV25(): XYKPoolAssetsStorageV25 {
        assert(this.isV25)
        return this as any
    }
}

/**
 *  Asset pair in a pool.
 */
export interface XYKPoolAssetsStorageV16 {
    get(key: Uint8Array): Promise<[number, number]>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<[number, number][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

/**
 *  Asset pair in a pool.
 */
export interface XYKPoolAssetsStorageV25 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

export class XYKShareTokenStorage extends StorageBase {
    protected getPrefix() {
        return 'XYK'
    }

    protected getName() {
        return 'ShareToken'
    }

    /**
     *  Asset id storage for shared pool tokens
     */
    get isV16(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  Asset id storage for shared pool tokens
     */
    get asV16(): XYKShareTokenStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Asset id storage for shared pool tokens
 */
export interface XYKShareTokenStorageV16 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class XYKTotalLiquidityStorage extends StorageBase {
    protected getPrefix() {
        return 'XYK'
    }

    protected getName() {
        return 'TotalLiquidity'
    }

    /**
     *  Total liquidity in a pool.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '0bac40afaf72ceea5a87ae2baaa5fe7f69915323f3293bdd970e7790a9d968c0'
    }

    /**
     *  Total liquidity in a pool.
     */
    get asV16(): XYKTotalLiquidityStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Total liquidity in a pool.
 */
export interface XYKTotalLiquidityStorageV16 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class XYKWarehouseLMActiveYieldFarmStorage extends StorageBase {
    protected getPrefix() {
        return 'XYKWarehouseLM'
    }

    protected getName() {
        return 'ActiveYieldFarm'
    }

    /**
     *  Active(farms able to receive LP shares deposits) yield farms.
     */
    get isV81(): boolean {
        return this.getTypeHash() === '7cc5b6d5407dcbcf81c931c295c6fc4aa9cb2afb69a27d4e06a0e638f0ff4679'
    }

    /**
     *  Active(farms able to receive LP shares deposits) yield farms.
     */
    get asV81(): XYKWarehouseLMActiveYieldFarmStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  Active(farms able to receive LP shares deposits) yield farms.
 */
export interface XYKWarehouseLMActiveYieldFarmStorageV81 {
    get(key1: Uint8Array, key2: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [Uint8Array, number][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: number][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: number][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: number][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: number][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: number][]>
}

export class XYKWarehouseLMDepositStorage extends StorageBase {
    protected getPrefix() {
        return 'XYKWarehouseLM'
    }

    protected getName() {
        return 'Deposit'
    }

    /**
     *  Deposit details.
     */
    get isV81(): boolean {
        return this.getTypeHash() === 'b656d2ad6464af6d413312931745db11953a0cd8b71bac716613a18fbfffa34a'
    }

    /**
     *  Deposit details.
     */
    get asV81(): XYKWarehouseLMDepositStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  Deposit details.
 */
export interface XYKWarehouseLMDepositStorageV81 {
    get(key: bigint): Promise<(v81.DepositData | undefined)>
    getAll(): Promise<v81.DepositData[]>
    getMany(keys: bigint[]): Promise<(v81.DepositData | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v81.DepositData][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v81.DepositData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v81.DepositData][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v81.DepositData][]>
}

export class XYKWarehouseLMDepositSequencerStorage extends StorageBase {
    protected getPrefix() {
        return 'XYKWarehouseLM'
    }

    protected getName() {
        return 'DepositSequencer'
    }

    get isV81(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV81(): XYKWarehouseLMDepositSequencerStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

export interface XYKWarehouseLMDepositSequencerStorageV81 {
    get(): Promise<bigint>
}

export class XYKWarehouseLMFarmSequencerStorage extends StorageBase {
    protected getPrefix() {
        return 'XYKWarehouseLM'
    }

    protected getName() {
        return 'FarmSequencer'
    }

    /**
     *  Id sequencer for `GlobalFarm` and `YieldFarm`.
     */
    get isV81(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Id sequencer for `GlobalFarm` and `YieldFarm`.
     */
    get asV81(): XYKWarehouseLMFarmSequencerStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  Id sequencer for `GlobalFarm` and `YieldFarm`.
 */
export interface XYKWarehouseLMFarmSequencerStorageV81 {
    get(): Promise<number>
}

export class XYKWarehouseLMGlobalFarmStorage extends StorageBase {
    protected getPrefix() {
        return 'XYKWarehouseLM'
    }

    protected getName() {
        return 'GlobalFarm'
    }

    get isV81(): boolean {
        return this.getTypeHash() === 'b7d29a459a44dac4bb28c709423d749854231c2aaf1e6dd74ce959ca5f349a96'
    }

    get asV81(): XYKWarehouseLMGlobalFarmStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

export interface XYKWarehouseLMGlobalFarmStorageV81 {
    get(key: number): Promise<(v81.GlobalFarmData | undefined)>
    getAll(): Promise<v81.GlobalFarmData[]>
    getMany(keys: number[]): Promise<(v81.GlobalFarmData | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v81.GlobalFarmData][]>
    getPairs(key: number): Promise<[k: number, v: v81.GlobalFarmData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v81.GlobalFarmData][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v81.GlobalFarmData][]>
}

export class XYKWarehouseLMYieldFarmStorage extends StorageBase {
    protected getPrefix() {
        return 'XYKWarehouseLM'
    }

    protected getName() {
        return 'YieldFarm'
    }

    /**
     *  Yield farm details.
     */
    get isV81(): boolean {
        return this.getTypeHash() === '0f0204c0d0641c4546bec12693ec48997b8fc8c730fff7076909be4edaff8f4d'
    }

    /**
     *  Yield farm details.
     */
    get asV81(): XYKWarehouseLMYieldFarmStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  Yield farm details.
 */
export interface XYKWarehouseLMYieldFarmStorageV81 {
    get(key1: Uint8Array, key2: number, key3: number): Promise<(v81.YieldFarmData | undefined)>
    getAll(): Promise<v81.YieldFarmData[]>
    getMany(keys: [Uint8Array, number, number][]): Promise<(v81.YieldFarmData | undefined)[]>
    getKeys(): Promise<[Uint8Array, number, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number, number][]>
    getKeys(key1: Uint8Array, key2: number, key3: number): Promise<[Uint8Array, number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number, key3: number): AsyncIterable<[Uint8Array, number, number][]>
    getPairs(): Promise<[k: [Uint8Array, number, number], v: v81.YieldFarmData][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number, number], v: v81.YieldFarmData][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number, number], v: v81.YieldFarmData][]>
    getPairs(key1: Uint8Array, key2: number, key3: number): Promise<[k: [Uint8Array, number, number], v: v81.YieldFarmData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number, number], v: v81.YieldFarmData][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number, number], v: v81.YieldFarmData][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number, number], v: v81.YieldFarmData][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number, key3: number): AsyncIterable<[k: [Uint8Array, number, number], v: v81.YieldFarmData][]>
}

export class XcmpQueueInboundXcmpMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'InboundXcmpMessages'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '7bf0d83d361216e18f7bca971cbf4fbd433158d3be6ac33fe278fb6d9bfb0469'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get asV16(): XcmpQueueInboundXcmpMessagesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
 */
export interface XcmpQueueInboundXcmpMessagesStorageV16 {
    get(key1: number, key2: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class XcmpQueueInboundXcmpStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'InboundXcmpStatus'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '48f3de6a738f03ae3c729fdf2adfbcc7dd58a2d62c1e81c228ac332b7237c8c2'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get asV16(): XcmpQueueInboundXcmpStatusStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '9463adeec55c62de9270b726721d07d1258e861fc23bcadc753e06286f1e9d94'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get asV38(): XcmpQueueInboundXcmpStatusStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  Status of the inbound XCMP channels.
 */
export interface XcmpQueueInboundXcmpStatusStorageV16 {
    get(): Promise<[number, v16.InboundStatus, [number, v16.XcmpMessageFormat][]][]>
}

/**
 *  Status of the inbound XCMP channels.
 */
export interface XcmpQueueInboundXcmpStatusStorageV38 {
    get(): Promise<v38.InboundChannelDetails[]>
}

export class XcmpQueueOutboundXcmpMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OutboundXcmpMessages'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'f8f791196403322746e9b911cdffc1dfb7880ff624b4765b5515d8264f7df7b2'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get asV16(): XcmpQueueOutboundXcmpMessagesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  The messages outbound in a given XCMP channel.
 */
export interface XcmpQueueOutboundXcmpMessagesStorageV16 {
    get(key1: number, key2: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class XcmpQueueOutboundXcmpStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OutboundXcmpStatus'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '2284f25ad36d908dd9054d516baba1c7da89eb5dbefc09e2f88eaad6bd217ebf'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get asV16(): XcmpQueueOutboundXcmpStatusStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '0803a0634571a8cfdaa8b16757a06e235664ceb84c144cf0d5953fd2dd0f7f3a'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get asV38(): XcmpQueueOutboundXcmpStatusStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
 *  and last outbound message. If the two indices are equal, then it indicates an empty
 *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
 *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
 *  case of the need to send a high-priority signal message this block.
 *  The bool is true if there is a signal message waiting to be sent.
 */
export interface XcmpQueueOutboundXcmpStatusStorageV16 {
    get(): Promise<[number, v16.OutboundStatus, boolean, number, number][]>
}

/**
 *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
 *  and last outbound message. If the two indices are equal, then it indicates an empty
 *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
 *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
 *  case of the need to send a high-priority signal message this block.
 *  The bool is true if there is a signal message waiting to be sent.
 */
export interface XcmpQueueOutboundXcmpStatusStorageV38 {
    get(): Promise<v38.OutboundChannelDetails[]>
}

export class XcmpQueueOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '2eb096a3f66cc2d3a7f63f9f097c63bad7d960c4949a759a34865c7919f65122'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get asV38(): XcmpQueueOverweightStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These message stay in this storage map until they are manually dispatched via
 *  `service_overweight`.
 */
export interface XcmpQueueOverweightStorageV38 {
    get(key: bigint): Promise<([number, number, Uint8Array] | undefined)>
    getAll(): Promise<[number, number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, number, Uint8Array]][]>
}

export class XcmpQueueOverweightCountStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OverweightCount'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get isV38(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get asV38(): XcmpQueueOverweightCountStorageV38 {
        assert(this.isV38)
        return this as any
    }
}

/**
 *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
 *  available free overweight index.
 */
export interface XcmpQueueOverweightCountStorageV38 {
    get(): Promise<bigint>
}

export class XcmpQueueQueueConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'QueueConfig'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isV16(): boolean {
        return this.getTypeHash() === '4eee4c318310895e220c6e665c876bf76f75ef8f5530bcd8f8ea1d5b966ff46f'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asV16(): XcmpQueueQueueConfigStorageV16 {
        assert(this.isV16)
        return this as any
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isV38(): boolean {
        return this.getTypeHash() === 'bc17b84c06c7e0df3f2684c76020e6d76ff231be948076edbe6751b00937b0b1'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asV38(): XcmpQueueQueueConfigStorageV38 {
        assert(this.isV38)
        return this as any
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isV81(): boolean {
        return this.getTypeHash() === 'b9e7fe75fd5e16e066448c0d0a704aec5c90e5e751ca04108c2b35ab00764560'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asV81(): XcmpQueueQueueConfigStorageV81 {
        assert(this.isV81)
        return this as any
    }
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageV16 {
    get(): Promise<v16.QueueConfigData>
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageV38 {
    get(): Promise<v38.QueueConfigData>
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageV81 {
    get(): Promise<v81.QueueConfigData>
}

export class XcmpQueueQueueSuspendedStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'QueueSuspended'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get isV43(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get asV43(): XcmpQueueQueueSuspendedStorageV43 {
        assert(this.isV43)
        return this as any
    }
}

/**
 *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
 */
export interface XcmpQueueQueueSuspendedStorageV43 {
    get(): Promise<boolean>
}

export class XcmpQueueSignalMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'SignalMessages'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get isV16(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get asV16(): XcmpQueueSignalMessagesStorageV16 {
        assert(this.isV16)
        return this as any
    }
}

/**
 *  Any signal messages waiting to be sent.
 */
export interface XcmpQueueSignalMessagesStorageV16 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}
