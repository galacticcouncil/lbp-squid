import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v42 from './v42'
import * as v55 from './v55'
import * as v62 from './v62'
import * as v65 from './v65'
import * as v67 from './v67'
import * as v68 from './v68'
import * as v71 from './v71'
import * as v75 from './v75'
import * as v81 from './v81'
import * as v87 from './v87'
import * as v88 from './v88'

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
    get isV42(): boolean {
        return this.getTypeHash() === 'b2f6c9709a4d2ff893536be0ecdbcad0fa597aba78428cfcdfc6fef5a1c5414f'
    }

    /**
     *  Mapping between asset name and asset id.
     */
    get asV42(): AssetRegistryAssetIdsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Mapping between asset name and asset id.
 */
export interface AssetRegistryAssetIdsStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '58dfe00b72f07bf6cab7f6a9e09ab29eb1bddff4ba0c36924d0917313958bca6'
    }

    /**
     *  Native location of an asset.
     */
    get asV42(): AssetRegistryAssetLocationsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Native location of an asset.
 */
export interface AssetRegistryAssetLocationsStorageV42 {
    get(key: number): Promise<(v42.AssetLocation | undefined)>
    getAll(): Promise<v42.AssetLocation[]>
    getMany(keys: number[]): Promise<(v42.AssetLocation | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v42.AssetLocation][]>
    getPairs(key: number): Promise<[k: number, v: v42.AssetLocation][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v42.AssetLocation][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v42.AssetLocation][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'baeb301fe81822ac12911469e04bf8d093313d49518fd2908c00cbdeff57ab9f'
    }

    /**
     *  Metadata of an asset.
     */
    get asV42(): AssetRegistryAssetMetadataMapStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Metadata of an asset.
 */
export interface AssetRegistryAssetMetadataMapStorageV42 {
    get(key: number): Promise<(v42.AssetMetadata | undefined)>
    getAll(): Promise<v42.AssetMetadata[]>
    getMany(keys: number[]): Promise<(v42.AssetMetadata | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v42.AssetMetadata][]>
    getPairs(key: number): Promise<[k: number, v: v42.AssetMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v42.AssetMetadata][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v42.AssetMetadata][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'b41077b00f9666bee941bfa5072e6470d7c3f76cc70583e553991180b004e89a'
    }

    /**
     *  Details of an asset.
     */
    get asV42(): AssetRegistryAssetsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Details of an asset.
 */
export interface AssetRegistryAssetsStorageV42 {
    get(key: number): Promise<(v42.AssetDetails | undefined)>
    getAll(): Promise<v42.AssetDetails[]>
    getMany(keys: number[]): Promise<(v42.AssetDetails | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v42.AssetDetails][]>
    getPairs(key: number): Promise<[k: number, v: v42.AssetDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v42.AssetDetails][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v42.AssetDetails][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '3c043d5ada7fce2b8b426c49f9b15d1308835a7483919400e4c42d24e95b4193'
    }

    /**
     *  Local asset for native location.
     */
    get asV42(): AssetRegistryLocationAssetsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Local asset for native location.
 */
export interface AssetRegistryLocationAssetsStorageV42 {
    get(key: v42.AssetLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: v42.AssetLocation[]): Promise<(number | undefined)[]>
    getKeys(): Promise<v42.AssetLocation[]>
    getKeys(key: v42.AssetLocation): Promise<v42.AssetLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v42.AssetLocation[]>
    getKeysPaged(pageSize: number, key: v42.AssetLocation): AsyncIterable<v42.AssetLocation[]>
    getPairs(): Promise<[k: v42.AssetLocation, v: number][]>
    getPairs(key: v42.AssetLocation): Promise<[k: v42.AssetLocation, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v42.AssetLocation, v: number][]>
    getPairsPaged(pageSize: number, key: v42.AssetLocation): AsyncIterable<[k: v42.AssetLocation, v: number][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Next available asset id. This is sequential id assigned for each new registered asset.
     */
    get asV42(): AssetRegistryNextAssetIdStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Next available asset id. This is sequential id assigned for each new registered asset.
 */
export interface AssetRegistryNextAssetIdStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Author of current block.
     */
    get asV42(): AuthorshipAuthorStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Author of current block.
 */
export interface AuthorshipAuthorStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether uncles were already set in this block.
     */
    get asV42(): AuthorshipDidSetUnclesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Whether uncles were already set in this block.
 */
export interface AuthorshipDidSetUnclesStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '320be201dc467df78c8912d3a5ad0cb57cd9b25ab8bff2e738597ffc0a83b551'
    }

    /**
     *  Uncles
     */
    get asV42(): AuthorshipUnclesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Uncles
 */
export interface AuthorshipUnclesStorageV42 {
    get(): Promise<v42.UncleEntryItem[]>
}

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV42(): BalancesAccountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV42 {
    get(key: Uint8Array): Promise<v42.AccountData>
    getAll(): Promise<v42.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v42.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.AccountData][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV42(): BalancesLocksStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageV42 {
    get(key: Uint8Array): Promise<v42.BalanceLock[]>
    getAll(): Promise<v42.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<v42.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.BalanceLock[]][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '9fef068876a219033e80c9d9ef67cd9e3fe6e2aac77e946a7f6f40c8f975bf5b'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV42(): BalancesReservesStorageV42 {
        assert(this.isV42)
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
export interface BalancesReservesStorageV42 {
    get(key: Uint8Array): Promise<v42.ReserveData[]>
    getAll(): Promise<v42.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v42.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.ReserveData[]][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asV42(): BalancesStorageVersionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageV42 {
    get(): Promise<v42.Releases>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV42(): BalancesTotalIssuanceStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV42 {
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
     *  Fixed amount to deposit to become a collator.
     * 
     *  When a collator calls `leave_intent` they immediately receive the deposit back.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Fixed amount to deposit to become a collator.
     * 
     *  When a collator calls `leave_intent` they immediately receive the deposit back.
     */
    get asV42(): CollatorSelectionCandidacyBondStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Fixed amount to deposit to become a collator.
 * 
 *  When a collator calls `leave_intent` they immediately receive the deposit back.
 */
export interface CollatorSelectionCandidacyBondStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '239ae5a83674078569642b29549b6d89d616b5748799fde8f01f3356f32141fd'
    }

    /**
     *  The (community, limited) collation candidates.
     */
    get asV42(): CollatorSelectionCandidatesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The (community, limited) collation candidates.
 */
export interface CollatorSelectionCandidatesStorageV42 {
    get(): Promise<v42.CandidateInfo[]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Desired number of candidates.
     * 
     *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
     */
    get asV42(): CollatorSelectionDesiredCandidatesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Desired number of candidates.
 * 
 *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
 */
export interface CollatorSelectionDesiredCandidatesStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The invulnerable, fixed collators.
     */
    get asV42(): CollatorSelectionInvulnerablesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The invulnerable, fixed collators.
 */
export interface CollatorSelectionInvulnerablesStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  Last block authored by collator.
     */
    get asV42(): CollatorSelectionLastAuthoredBlockStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Last block authored by collator.
 */
export interface CollatorSelectionLastAuthoredBlockStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV42(): CouncilMembersStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV42(): CouncilPrimeStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface CouncilPrimeStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV42(): CouncilProposalCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '6c32784600097763396a9d6ed2cdb8fea2f274fb6bdcdd593ebc3e37e61555d2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV42(): CouncilProposalOfStorageV42 {
        assert(this.isV42)
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
    get isV62(): boolean {
        return this.getTypeHash() === '43ec1e4f4a6ba0edbbca67ee06379cba4e8a527fa11bad2dee2fd27970a4dd24'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV62(): CouncilProposalOfStorageV62 {
        assert(this.isV62)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV67(): boolean {
        return this.getTypeHash() === 'd2fae7f5686547803664d6cd2bcaefd969ca5b3b2ecfc86b2db86610adb3b67b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV67(): CouncilProposalOfStorageV67 {
        assert(this.isV67)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV68(): boolean {
        return this.getTypeHash() === '6a9f8ef74fb009d3a1fd9eab8e5fd5b140259527353a802492fd8805ea46346d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV68(): CouncilProposalOfStorageV68 {
        assert(this.isV68)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV75(): boolean {
        return this.getTypeHash() === '3139bede1891fa32ec68cbfda59e169e3a8ec9dc8a98058e02ac0f7cae6589b2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV75(): CouncilProposalOfStorageV75 {
        assert(this.isV75)
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

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV87(): boolean {
        return this.getTypeHash() === 'dc65debe57b5d6c4ab77c91c888de66fabe2402be7101e21c5e7aaac19057aaa'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV87(): CouncilProposalOfStorageV87 {
        assert(this.isV87)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV42 {
    get(key: Uint8Array): Promise<(v42.Call | undefined)>
    getAll(): Promise<v42.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v42.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.Call][]>
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
export interface CouncilProposalOfStorageV62 {
    get(key: Uint8Array): Promise<(v62.Call | undefined)>
    getAll(): Promise<v62.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v62.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v62.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v62.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v62.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v62.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV67 {
    get(key: Uint8Array): Promise<(v67.Call | undefined)>
    getAll(): Promise<v67.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v67.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v67.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v67.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v67.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v67.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV68 {
    get(key: Uint8Array): Promise<(v68.Call | undefined)>
    getAll(): Promise<v68.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v68.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v68.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v68.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v68.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v68.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV75 {
    get(key: Uint8Array): Promise<(v75.Call | undefined)>
    getAll(): Promise<v75.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v75.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v75.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v75.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v75.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v75.Call][]>
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV87 {
    get(key: Uint8Array): Promise<(v87.Call | undefined)>
    getAll(): Promise<v87.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v87.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v87.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v87.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v87.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v87.Call][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV42(): CouncilProposalsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface CouncilProposalsStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV42(): CouncilVotingStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface CouncilVotingStorageV42 {
    get(key: Uint8Array): Promise<(v42.Votes | undefined)>
    getAll(): Promise<v42.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v42.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.Votes][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get asV42(): DemocracyBlacklistStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface DemocracyBlacklistStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get asV42(): DemocracyCancellationsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface DemocracyCancellationsStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get asV42(): DemocracyDepositOfStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DemocracyDepositOfStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get asV42(): DemocracyLastTabledWasExternalStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface DemocracyLastTabledWasExternalStorageV42 {
    get(): Promise<boolean>
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get asV42(): DemocracyLowestUnbakedStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface DemocracyLowestUnbakedStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'a0dc59850ecbf888b39265215bce88e2141aafdd4f4300c99be6819a82e4ef15'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asV42(): DemocracyNextExternalStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageV42 {
    get(): Promise<([Uint8Array, v42.VoteThreshold] | undefined)>
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
    get isV42(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV42(): DemocracyPreimagesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV42 {
    get(key: Uint8Array): Promise<(v42.PreimageStatus | undefined)>
    getAll(): Promise<v42.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v42.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.PreimageStatus][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV42(): DemocracyPublicPropCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV42(): DemocracyPublicPropsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asV42(): DemocracyReferendumCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface DemocracyReferendumCountStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV42(): DemocracyReferendumInfoOfStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV42 {
    get(key: number): Promise<(v42.ReferendumInfo | undefined)>
    getAll(): Promise<v42.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v42.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v42.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v42.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v42.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v42.ReferendumInfo][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '6db8ed5d5df9fd63b90aeccdc02dcd10fe08fc684dc39aff8104b09be9ab54e9'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asV42(): DemocracyStorageVersionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface DemocracyStorageVersionStorageV42 {
    get(): Promise<(v42.Type_295 | undefined)>
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
    get isV42(): boolean {
        return this.getTypeHash() === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asV42(): DemocracyVotingOfStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageV42 {
    get(key: Uint8Array): Promise<v42.Voting>
    getAll(): Promise<v42.Voting[]>
    getMany(keys: Uint8Array[]): Promise<v42.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.Voting][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'de2fc633d896ffed21e1f630f0a1bfe710ecfa69921c58a4a758e7fd49d0b5a4'
    }

    /**
     *  The configuration.
     */
    get asV42(): DmpQueueConfigurationStorageV42 {
        assert(this.isV42)
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
export interface DmpQueueConfigurationStorageV42 {
    get(): Promise<v42.ConfigData>
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
    get isV42(): boolean {
        return this.getTypeHash() === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
    }

    /**
     *  The overweight messages.
     */
    get asV42(): DmpQueueOverweightStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The overweight messages.
 */
export interface DmpQueueOverweightStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'cad43146ccd742f66da886b2f77b13d96d2c4de637fbb965a7493a2f16c99189'
    }

    /**
     *  The page index.
     */
    get asV42(): DmpQueuePageIndexStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The page index.
 */
export interface DmpQueuePageIndexStorageV42 {
    get(): Promise<v42.PageIndexData>
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
    get isV42(): boolean {
        return this.getTypeHash() === '0b9460c8234ca1e6341c95066d20ac8d7e79e3a9b2def20c9450f88ef0ab1b1d'
    }

    /**
     *  The queue pages.
     */
    get asV42(): DmpQueuePagesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The queue pages.
 */
export interface DmpQueuePagesStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '29735300dba5135be0e1e53d771089aba86ed92479018d68d31c9d66cb9816e3'
    }

    /**
     *  Accounts excluded from dusting.
     */
    get asV42(): DusterAccountBlacklistStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Accounts excluded from dusting.
 */
export interface DusterAccountBlacklistStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Account to send dust to.
     */
    get asV42(): DusterDustAccountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Account to send dust to.
 */
export interface DusterDustAccountStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Account to take reward from.
     */
    get asV42(): DusterRewardAccountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Account to take reward from.
 */
export interface DusterRewardAccountStorageV42 {
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
    get isV42(): boolean {
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
    get asV42(): ElectionsCandidatesStorageV42 {
        assert(this.isV42)
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
export interface ElectionsCandidatesStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    get asV42(): ElectionsElectionRoundsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface ElectionsElectionRoundsStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    get asV42(): ElectionsMembersStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface ElectionsMembersStorageV42 {
    get(): Promise<v42.SeatHolder[]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
    }

    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    get asV42(): ElectionsRunnersUpStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface ElectionsRunnersUpStorageV42 {
    get(): Promise<v42.SeatHolder[]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '402dfebd0f940ad46e7a8f40f06109618105f99668e323b7a2f66bb12e66e352'
    }

    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    get asV42(): ElectionsVotingStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface ElectionsVotingStorageV42 {
    get(key: Uint8Array): Promise<v42.Voter>
    getAll(): Promise<v42.Voter[]>
    getMany(keys: Uint8Array[]): Promise<v42.Voter[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.Voter][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.Voter][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.Voter][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.Voter][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '41d107d8804760c60452c36f4677b29c987678b8fec179ecaec1902539deb294'
    }

    /**
     *  Intention count for current block
     */
    get asV42(): ExchangeExchangeAssetsIntentionCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Intention count for current block
 */
export interface ExchangeExchangeAssetsIntentionCountStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '98fb8bb6c24167c2ed5183d81bf3806a67b356a9eb4cdb6da1d7f9c83be96858'
    }

    /**
     *  Registered intentions for current block
     *  Stored as ( asset_a, asset_b ) combination where asset_a is meant to be exchanged for asset_b ( asset_a < asset_b)
     */
    get asV42(): ExchangeExchangeAssetsIntentionsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Registered intentions for current block
 *  Stored as ( asset_a, asset_b ) combination where asset_a is meant to be exchanged for asset_b ( asset_a < asset_b)
 */
export interface ExchangeExchangeAssetsIntentionsStorageV42 {
    get(key: [number, number]): Promise<v42.ExchangeIntention[]>
    getAll(): Promise<v42.ExchangeIntention[][]>
    getMany(keys: [number, number][]): Promise<v42.ExchangeIntention[][]>
    getKeys(): Promise<[number, number][]>
    getKeys(key: [number, number]): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key: [number, number]): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v42.ExchangeIntention[]][]>
    getPairs(key: [number, number]): Promise<[k: [number, number], v: v42.ExchangeIntention[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v42.ExchangeIntention[]][]>
    getPairsPaged(pageSize: number, key: [number, number]): AsyncIterable<[k: [number, number], v: v42.ExchangeIntention[]][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'ebdf043edab397a5ed3d655551fad928a7307d1bde214adf993157ad9d1521e0'
    }

    /**
     *  Storage used for tracking existing fee collectors
     *  Not more than one fee collector per asset possible
     */
    get asV42(): LBPFeeCollectorWithAssetStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Storage used for tracking existing fee collectors
 *  Not more than one fee collector per asset possible
 */
export interface LBPFeeCollectorWithAssetStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '122378a7b6f80edd2b209a84c4ae915782df86cf92d66d0932085716a7dbccf9'
    }

    /**
     *  Details of a pool.
     */
    get asV42(): LBPPoolDataStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Details of a pool.
 */
export interface LBPPoolDataStorageV42 {
    get(key: Uint8Array): Promise<(v42.Pool | undefined)>
    getAll(): Promise<v42.Pool[]>
    getMany(keys: Uint8Array[]): Promise<(v42.Pool | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.Pool][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.Pool][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.Pool][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.Pool][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'a95b5e9ff8224bfbdadfb66fa6375b6c301db05f1d95a50d44d9acf021b7d9a2'
    }

    /**
     *  Deposit details.
     */
    get asV42(): LiquidityMiningDepositDataStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Deposit details.
 */
export interface LiquidityMiningDepositDataStorageV42 {
    get(key: bigint): Promise<(v42.Deposit | undefined)>
    getAll(): Promise<v42.Deposit[]>
    getMany(keys: bigint[]): Promise<(v42.Deposit | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v42.Deposit][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v42.Deposit][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v42.Deposit][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v42.Deposit][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '7c30e81ddc9331a03b57c4399dafb2f234ac8b51def590598699361d943606c1'
    }

    /**
     *  Global pool details.
     */
    get asV42(): LiquidityMiningGlobalPoolDataStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Global pool details.
 */
export interface LiquidityMiningGlobalPoolDataStorageV42 {
    get(key: number): Promise<(v42.GlobalPool | undefined)>
    getAll(): Promise<v42.GlobalPool[]>
    getMany(keys: number[]): Promise<(v42.GlobalPool | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v42.GlobalPool][]>
    getPairs(key: number): Promise<[k: number, v: v42.GlobalPool][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v42.GlobalPool][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v42.GlobalPool][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '0ddd5a5c43c54d55a1ee2fbb49922411223db7440196eecb35d8e4b996522c19'
    }

    /**
     *  Liquidity pool yield farm details.
     */
    get asV42(): LiquidityMiningLiquidityPoolDataStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Liquidity pool yield farm details.
 */
export interface LiquidityMiningLiquidityPoolDataStorageV42 {
    get(key1: number, key2: Uint8Array): Promise<(v42.LiquidityPoolYieldFarm | undefined)>
    getAll(): Promise<v42.LiquidityPoolYieldFarm[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v42.LiquidityPoolYieldFarm | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v42.LiquidityPoolYieldFarm][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v42.LiquidityPoolYieldFarm][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v42.LiquidityPoolYieldFarm][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v42.LiquidityPoolYieldFarm][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v42.LiquidityPoolYieldFarm][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v42.LiquidityPoolYieldFarm][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '18d37ca9f72162ef1898c3b8fa52f7c28f7bb1a8d940a0ecc75b558128c64c21'
    }

    /**
     *  `LiquidityPoolYieldFarm` metadata holding: `(asset pair, existing nfts count, global pool id)`
     */
    get asV42(): LiquidityMiningLiquidityPoolMetadataStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  `LiquidityPoolYieldFarm` metadata holding: `(asset pair, existing nfts count, global pool id)`
 */
export interface LiquidityMiningLiquidityPoolMetadataStorageV42 {
    get(key: number): Promise<([v42.AssetPair, bigint, number] | undefined)>
    getAll(): Promise<[v42.AssetPair, bigint, number][]>
    getMany(keys: number[]): Promise<([v42.AssetPair, bigint, number] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [v42.AssetPair, bigint, number]][]>
    getPairs(key: number): Promise<[k: number, v: [v42.AssetPair, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [v42.AssetPair, bigint, number]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [v42.AssetPair, bigint, number]][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Sequencer for nft part of nft id.
     */
    get asV42(): LiquidityMiningNftInstanceSequencerStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Sequencer for nft part of nft id.
 */
export interface LiquidityMiningNftInstanceSequencerStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Id sequencer for `GlobalPool` and `LiquidityPoolYieldFarm`.
     */
    get asV42(): LiquidityMiningPoolIdSequencerStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Id sequencer for `GlobalPool` and `LiquidityPoolYieldFarm`.
 */
export interface LiquidityMiningPoolIdSequencerStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'ec3139d8177301e4bbb71dba0f7f87a90af07d567a590d5351248daa469359c5'
    }

    /**
     *  Stores Marketplace info
     */
    get asV42(): MarketplaceMarketplaceInstancesStorageV42 {
        assert(this.isV42)
        return this as any
    }

    /**
     *  Stores Marketplace info
     */
    get isV75(): boolean {
        return this.getTypeHash() === '0b32a4fd1061c4591a526e2f7beddcab1e709b87ccc64182c0c1d19fdf718abd'
    }

    /**
     *  Stores Marketplace info
     */
    get asV75(): MarketplaceMarketplaceInstancesStorageV75 {
        assert(this.isV75)
        return this as any
    }
}

/**
 *  Stores Marketplace info
 */
export interface MarketplaceMarketplaceInstancesStorageV42 {
    get(key1: bigint, key2: bigint): Promise<(v42.Royalty | undefined)>
    getAll(): Promise<v42.Royalty[]>
    getMany(keys: [bigint, bigint][]): Promise<(v42.Royalty | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v42.Royalty][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v42.Royalty][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v42.Royalty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v42.Royalty][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v42.Royalty][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v42.Royalty][]>
}

/**
 *  Stores Marketplace info
 */
export interface MarketplaceMarketplaceInstancesStorageV75 {
    get(key1: bigint, key2: bigint): Promise<(v75.Royalty | undefined)>
    getAll(): Promise<v75.Royalty[]>
    getMany(keys: [bigint, bigint][]): Promise<(v75.Royalty | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v75.Royalty][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v75.Royalty][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v75.Royalty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v75.Royalty][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v75.Royalty][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v75.Royalty][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '3f58318baf55451d4557850a495785a0bf8f8be774aada4e44650361d075dc91'
    }

    /**
     *  Stores offer info
     */
    get asV42(): MarketplaceOffersStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Stores offer info
 */
export interface MarketplaceOffersStorageV42 {
    get(key1: [bigint, bigint], key2: Uint8Array): Promise<(v42.Offer | undefined)>
    getAll(): Promise<v42.Offer[]>
    getMany(keys: [[bigint, bigint], Uint8Array][]): Promise<(v42.Offer | undefined)[]>
    getKeys(): Promise<[[bigint, bigint], Uint8Array][]>
    getKeys(key1: [bigint, bigint]): Promise<[[bigint, bigint], Uint8Array][]>
    getKeys(key1: [bigint, bigint], key2: Uint8Array): Promise<[[bigint, bigint], Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[[bigint, bigint], Uint8Array][]>
    getKeysPaged(pageSize: number, key1: [bigint, bigint]): AsyncIterable<[[bigint, bigint], Uint8Array][]>
    getKeysPaged(pageSize: number, key1: [bigint, bigint], key2: Uint8Array): AsyncIterable<[[bigint, bigint], Uint8Array][]>
    getPairs(): Promise<[k: [[bigint, bigint], Uint8Array], v: v42.Offer][]>
    getPairs(key1: [bigint, bigint]): Promise<[k: [[bigint, bigint], Uint8Array], v: v42.Offer][]>
    getPairs(key1: [bigint, bigint], key2: Uint8Array): Promise<[k: [[bigint, bigint], Uint8Array], v: v42.Offer][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [[bigint, bigint], Uint8Array], v: v42.Offer][]>
    getPairsPaged(pageSize: number, key1: [bigint, bigint]): AsyncIterable<[k: [[bigint, bigint], Uint8Array], v: v42.Offer][]>
    getPairsPaged(pageSize: number, key1: [bigint, bigint], key2: Uint8Array): AsyncIterable<[k: [[bigint, bigint], Uint8Array], v: v42.Offer][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '6171308606be5e36859904603d84665b2843b644cf5292eff2e75efc57206ab0'
    }

    /**
     *  Stores token info
     */
    get asV42(): MarketplacePricesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Stores token info
 */
export interface MarketplacePricesStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
    }

    /**
     *  Curated list of currencies which fees can be paid with
     */
    get asV42(): MultiTransactionPaymentAcceptedCurrenciesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Curated list of currencies which fees can be paid with
 */
export interface MultiTransactionPaymentAcceptedCurrenciesStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
    }

    /**
     *  Block storage for accepted currency price
     */
    get asV42(): MultiTransactionPaymentAcceptedCurrencyPriceStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Block storage for accepted currency price
 */
export interface MultiTransactionPaymentAcceptedCurrencyPriceStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  Account currency map
     */
    get asV42(): MultiTransactionPaymentAccountCurrencyMapStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Account currency map
 */
export interface MultiTransactionPaymentAccountCurrencyMapStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Account to use when pool does not exist.
     */
    get asV42(): MultiTransactionPaymentFallbackAccountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Account to use when pool does not exist.
 */
export interface MultiTransactionPaymentFallbackAccountStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'b54bfb9304ad7cfffb67fe42834b827a2e7375c8ac371ff001f284424c0aa6d2'
    }

    /**
     *  Stores class info
     */
    get asV42(): NFTClassesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Stores class info
 */
export interface NFTClassesStorageV42 {
    get(key: bigint): Promise<(v42.ClassInfo | undefined)>
    getAll(): Promise<v42.ClassInfo[]>
    getMany(keys: bigint[]): Promise<(v42.ClassInfo | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v42.ClassInfo][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v42.ClassInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v42.ClassInfo][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v42.ClassInfo][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '873e9356d599039c4394718673bd5ff92fb310e018cc20443389ba4e4241e7c9'
    }

    /**
     *  Stores instance info
     */
    get asV42(): NFTInstancesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Stores instance info
 */
export interface NFTInstancesStorageV42 {
    get(key1: bigint, key2: bigint): Promise<(v42.InstanceInfo | undefined)>
    getAll(): Promise<v42.InstanceInfo[]>
    getMany(keys: [bigint, bigint][]): Promise<(v42.InstanceInfo | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v42.InstanceInfo][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v42.InstanceInfo][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v42.InstanceInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v42.InstanceInfo][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v42.InstanceInfo][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v42.InstanceInfo][]>
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

export class ParachainInfoParachainIdStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainInfo'
    }

    protected getName() {
        return 'ParachainId'
    }

    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asV42(): ParachainInfoParachainIdStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface ParachainInfoParachainIdStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get asV42(): ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
 *  announcing the weight of `on_initialize` and `on_finalize`.
 */
export interface ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get asV42(): ParachainSystemAuthorizedUpgradeStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface ParachainSystemAuthorizedUpgradeStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get asV42(): ParachainSystemCustomValidationHeadDataStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  A custom head data that should be returned as result of `validate_block`.
 * 
 *  See [`Pallet::set_custom_validation_head_data`] for more information.
 */
export interface ParachainSystemCustomValidationHeadDataStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get asV42(): ParachainSystemDidSetValidationCodeStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Were the validation data set to notify the relay chain?
 */
export interface ParachainSystemDidSetValidationCodeStorageV42 {
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
    get isV42(): boolean {
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
    get asV42(): ParachainSystemHostConfigurationStorageV42 {
        assert(this.isV42)
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
export interface ParachainSystemHostConfigurationStorageV42 {
    get(): Promise<(v42.V1AbridgedHostConfiguration | undefined)>
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
    get isV42(): boolean {
        return this.getTypeHash() === '0330a7423804895204dc06607d196d45bbec59edfd3f4f38c868daa9e880928c'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV42(): ParachainSystemHrmpOutboundMessagesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  HRMP messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpOutboundMessagesStorageV42 {
    get(): Promise<v42.OutboundHrmpMessage[]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV42(): ParachainSystemHrmpWatermarkStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  HRMP watermark that was set in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpWatermarkStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asV42(): ParachainSystemLastDmqMqcHeadStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The last downward message queue chain head we have observed.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastDmqMqcHeadStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '26057692e067e44d8eec686a8711f8b87a11679701c3afa133f7b9da8f327999'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asV42(): ParachainSystemLastHrmpMqcHeadsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The message queue chain heads we have observed per each channel incoming channel.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastHrmpMqcHeadsStorageV42 {
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

export class ParachainSystemNewValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'NewValidationCode'
    }

    /**
     *  Validation code that is set by the parachain and is to be communicated to collator and
     *  consequently the relay-chain.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get isV42(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  Validation code that is set by the parachain and is to be communicated to collator and
     *  consequently the relay-chain.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get asV42(): ParachainSystemNewValidationCodeStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Validation code that is set by the parachain and is to be communicated to collator and
 *  consequently the relay-chain.
 * 
 *  This will be cleared in `on_initialize` of each new block if no other pallet already set
 *  the value.
 */
export interface ParachainSystemNewValidationCodeStorageV42 {
    get(): Promise<(Uint8Array | undefined)>
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
    get isV42(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get asV42(): ParachainSystemPendingUpwardMessagesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Upward messages that are still pending and not yet send to the relay chain.
 */
export interface ParachainSystemPendingUpwardMessagesStorageV42 {
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
     *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
     * 
     *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
     *  which will result the next block process with the new validation code. This concludes the upgrade process.
     * 
     *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
     */
    get isV42(): boolean {
        return this.getTypeHash() === '8199405308c9981e32f632f64a8758ba69af0e625da26ff6d6670b81cc1f1647'
    }

    /**
     *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
     * 
     *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
     *  which will result the next block process with the new validation code. This concludes the upgrade process.
     * 
     *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
     */
    get asV42(): ParachainSystemPendingValidationCodeStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
 * 
 *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
 *  which will result the next block process with the new validation code. This concludes the upgrade process.
 * 
 *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
 */
export interface ParachainSystemPendingValidationCodeStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV42(): ParachainSystemProcessedDownwardMessagesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Number of downward messages processed in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemProcessedDownwardMessagesStorageV42 {
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
    get isV42(): boolean {
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
    get asV42(): ParachainSystemRelevantMessagingStateStorageV42 {
        assert(this.isV42)
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
export interface ParachainSystemRelevantMessagingStateStorageV42 {
    get(): Promise<(v42.MessagingStateSnapshot | undefined)>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV42(): ParachainSystemReservedDmpWeightOverrideStorageV42 {
        assert(this.isV42)
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
export interface ParachainSystemReservedDmpWeightOverrideStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asV42(): ParachainSystemReservedXcmpWeightOverrideStorageV42 {
        assert(this.isV42)
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
export interface ParachainSystemReservedXcmpWeightOverrideStorageV42 {
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
    get isV42(): boolean {
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
    get asV42(): ParachainSystemUpgradeRestrictionSignalStorageV42 {
        assert(this.isV42)
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
export interface ParachainSystemUpgradeRestrictionSignalStorageV42 {
    get(): Promise<(v42.V1UpgradeRestriction | undefined)>
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
    get isV42(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asV42(): ParachainSystemUpwardMessagesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Upward messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemUpwardMessagesStorageV42 {
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
     *  This value is expected to be set only once per block and it's never stored
     *  in the trie.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'fb37759067a991bce599d3fbe39ee38b99d63716a96357c3a39bf04c66e2579d'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     *  This value is expected to be set only once per block and it's never stored
     *  in the trie.
     */
    get asV42(): ParachainSystemValidationDataStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The [`PersistedValidationData`] set for this block.
 *  This value is expected to be set only once per block and it's never stored
 *  in the trie.
 */
export interface ParachainSystemValidationDataStorageV42 {
    get(): Promise<(v42.V1PersistedValidationData | undefined)>
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
    get isV42(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get asV42(): PolkadotXcmAssetTrapsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface PolkadotXcmAssetTrapsStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
    }

    /**
     *  The current migration's stage, if any.
     */
    get asV42(): PolkadotXcmCurrentMigrationStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The current migration's stage, if any.
 */
export interface PolkadotXcmCurrentMigrationStorageV42 {
    get(): Promise<(v42.VersionMigrationStage | undefined)>
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
    get isV42(): boolean {
        return this.getTypeHash() === '8497eae9bd9ecc14a9d7da5daf99074e5fb888ce8b1254175ebacb93a450f902'
    }

    /**
     *  The ongoing queries.
     */
    get asV42(): PolkadotXcmQueriesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The ongoing queries.
 */
export interface PolkadotXcmQueriesStorageV42 {
    get(key: bigint): Promise<(v42.QueryStatus | undefined)>
    getAll(): Promise<v42.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v42.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v42.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v42.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v42.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v42.QueryStatus][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The latest available query index.
     */
    get asV42(): PolkadotXcmQueryCounterStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The latest available query index.
 */
export interface PolkadotXcmQueryCounterStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get asV42(): PolkadotXcmSafeXcmVersionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface PolkadotXcmSafeXcmVersionStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'bf203870a932f637011bee3e0dae76dc35a120f80e5ac7fb32e2dbede4fd5795'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV42(): PolkadotXcmSupportedVersionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface PolkadotXcmSupportedVersionStorageV42 {
    get(key1: number, key2: v42.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v42.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v42.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v42.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v42.VersionedMultiLocation): Promise<[number, v42.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v42.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v42.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v42.VersionedMultiLocation): AsyncIterable<[number, v42.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v42.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v42.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v42.VersionedMultiLocation): Promise<[k: [number, v42.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v42.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v42.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v42.VersionedMultiLocation): AsyncIterable<[k: [number, v42.VersionedMultiLocation], v: number][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '16a258fa3891b3d97c16b446ca40a6dbafd16eb5bc2936a51286241b38207f42'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV42(): PolkadotXcmVersionDiscoveryQueueStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface PolkadotXcmVersionDiscoveryQueueStorageV42 {
    get(): Promise<[v42.VersionedMultiLocation, number][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'c04d92c1d09bb51782b185c1fa4f78678bd7c63c2388986e2fe34f2f1e02cf9a'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV42(): PolkadotXcmVersionNotifiersStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface PolkadotXcmVersionNotifiersStorageV42 {
    get(key1: number, key2: v42.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v42.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v42.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v42.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v42.VersionedMultiLocation): Promise<[number, v42.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v42.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v42.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v42.VersionedMultiLocation): AsyncIterable<[number, v42.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v42.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v42.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v42.VersionedMultiLocation): Promise<[k: [number, v42.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v42.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v42.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v42.VersionedMultiLocation): AsyncIterable<[k: [number, v42.VersionedMultiLocation], v: bigint][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'be7b24532d6af66a6c35ced8427c3201e32a7ab9e2a0c901f57c6d5a416ddc46'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV42(): PolkadotXcmVersionNotifyTargetsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface PolkadotXcmVersionNotifyTargetsStorageV42 {
    get(key1: number, key2: v42.VersionedMultiLocation): Promise<([bigint, bigint, number] | undefined)>
    getAll(): Promise<[bigint, bigint, number][]>
    getMany(keys: [number, v42.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(): Promise<[number, v42.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v42.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v42.VersionedMultiLocation): Promise<[number, v42.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v42.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v42.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v42.VersionedMultiLocation): AsyncIterable<[number, v42.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v42.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number): Promise<[k: [number, v42.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number, key2: v42.VersionedMultiLocation): Promise<[k: [number, v42.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v42.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v42.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v42.VersionedMultiLocation): AsyncIterable<[k: [number, v42.VersionedMultiLocation], v: [bigint, bigint, number]][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV42(): PreimagePreimageForStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV42(): PreimageStatusForStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV42 {
    get(key: Uint8Array): Promise<(v42.RequestStatus | undefined)>
    getAll(): Promise<v42.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v42.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.RequestStatus][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Sorted array of newly registered assets.
     *  All assets are processed and removed from the storage at the end of a block.
     *  Trades start to be processed from the next block.
     *  All trades in the same block as the asset registration are ignored.
     */
    get asV42(): PriceOracleNewAssetsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Sorted array of newly registered assets.
 *  All assets are processed and removed from the storage at the end of a block.
 *  Trades start to be processed from the next block.
 *  All trades in the same block as the asset registration are ignored.
 */
export interface PriceOracleNewAssetsStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'b29533540b398ce961c1073ab479afb7d33db21007ff97da187ed257230960d5'
    }

    /**
     *  Processed or partially processed data generated by trades.
     *  Data generated by trades are processed sequentially.
     *  Each new entry is combined with the previous value to produce new intermediate value.
     *  The last entry creates the resulting average price and volume.
     */
    get asV42(): PriceOraclePriceDataAccumulatorStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Processed or partially processed data generated by trades.
 *  Data generated by trades are processed sequentially.
 *  Each new entry is combined with the previous value to produce new intermediate value.
 *  The last entry creates the resulting average price and volume.
 */
export interface PriceOraclePriceDataAccumulatorStorageV42 {
    get(key: Uint8Array): Promise<v42.PriceEntry>
    getAll(): Promise<v42.PriceEntry[]>
    getMany(keys: Uint8Array[]): Promise<v42.PriceEntry[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.PriceEntry][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.PriceEntry][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.PriceEntry][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.PriceEntry][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '9ee4d8e5181251ecc66d25cf48d1a00ad0c91f0f3dad29971ca870736b77ebc3'
    }

    /**
     *  The last ten average values corresponding to the last hundred blocks.
     *  Each average value corresponds to an interval of length ten blocks.
     */
    get asV42(): PriceOraclePriceDataHundredStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The last ten average values corresponding to the last hundred blocks.
 *  Each average value corresponds to an interval of length ten blocks.
 */
export interface PriceOraclePriceDataHundredStorageV42 {
    get(key: Uint8Array): Promise<v42.BucketQueue>
    getAll(): Promise<v42.BucketQueue[]>
    getMany(keys: Uint8Array[]): Promise<v42.BucketQueue[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.BucketQueue][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.BucketQueue][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.BucketQueue][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.BucketQueue][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'f333f16a6fb50f0f665203b91c0984f1750fef3f3f01e1ff0316809e84680f94'
    }

    /**
     *  The last ten average values corresponding to the last ten blocks.
     */
    get asV42(): PriceOraclePriceDataTenStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The last ten average values corresponding to the last ten blocks.
 */
export interface PriceOraclePriceDataTenStorageV42 {
    get(): Promise<[Uint8Array, v42.BucketQueue][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '9ee4d8e5181251ecc66d25cf48d1a00ad0c91f0f3dad29971ca870736b77ebc3'
    }

    /**
     *  The last ten average values corresponding to the last thousand blocks.
     *  Each average value corresponds to an interval of length hundred blocks.
     */
    get asV42(): PriceOraclePriceDataThousandStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The last ten average values corresponding to the last thousand blocks.
 *  Each average value corresponds to an interval of length hundred blocks.
 */
export interface PriceOraclePriceDataThousandStorageV42 {
    get(key: Uint8Array): Promise<v42.BucketQueue>
    getAll(): Promise<v42.BucketQueue[]>
    getMany(keys: Uint8Array[]): Promise<v42.BucketQueue[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.BucketQueue][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.BucketQueue][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.BucketQueue][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.BucketQueue][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of assets registered and handled by this pallet.
     */
    get asV42(): PriceOracleTrackedAssetsCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The number of assets registered and handled by this pallet.
 */
export interface PriceOracleTrackedAssetsCountStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'b93d53c53a308d910b0304bf5593bd71084bcf177629ea67da68b9026f4b417c'
    }

    /**
     *  The announcements made by the proxy (key).
     */
    get asV42(): ProxyAnnouncementsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The announcements made by the proxy (key).
 */
export interface ProxyAnnouncementsStorageV42 {
    get(key: Uint8Array): Promise<[v42.Announcement[], bigint]>
    getAll(): Promise<[v42.Announcement[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v42.Announcement[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v42.Announcement[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v42.Announcement[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v42.Announcement[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v42.Announcement[], bigint]][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '4bb33eca13f5c1bd4dd925e1a077ee920e0ddc91f94bd24d512083c3a518d98d'
    }

    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    get asV42(): ProxyProxiesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxyProxiesStorageV42 {
    get(key: Uint8Array): Promise<[v42.ProxyDefinition[], bigint]>
    getAll(): Promise<[v42.ProxyDefinition[], bigint][]>
    getMany(keys: Uint8Array[]): Promise<[v42.ProxyDefinition[], bigint][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [v42.ProxyDefinition[], bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [v42.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [v42.ProxyDefinition[], bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [v42.ProxyDefinition[], bigint]][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '6a35088b1a9a1f86c3ab8393f1255fe24e09377498c544b91718a5c3d04b9b24'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV42(): SchedulerAgendaStorageV42 {
        assert(this.isV42)
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
    get isV62(): boolean {
        return this.getTypeHash() === 'af55b3ff4157b2d4eceaa7eed527cfae44a5f4ba2fb29e743de117577adde883'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV62(): SchedulerAgendaStorageV62 {
        assert(this.isV62)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV67(): boolean {
        return this.getTypeHash() === 'a9fb8686b2c45018f07d1acfa2b65b42e5155578812ed68edcc85cd8a6f2633d'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV67(): SchedulerAgendaStorageV67 {
        assert(this.isV67)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV68(): boolean {
        return this.getTypeHash() === '813543211fc8126011f7c529bf89d455be4c58abbbef03c85d5749d5b36b3e6d'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV68(): SchedulerAgendaStorageV68 {
        assert(this.isV68)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV75(): boolean {
        return this.getTypeHash() === '0444e5301ba11c9e6785ef36c5ec6071d4371efcb2468c70444d440d82ecfa4c'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV75(): SchedulerAgendaStorageV75 {
        assert(this.isV75)
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

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV87(): boolean {
        return this.getTypeHash() === 'a0b2430abfd9629a8eb13f62098ef3e978dbfdf14a3a1e85dd761b86c6f5fcab'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV87(): SchedulerAgendaStorageV87 {
        assert(this.isV87)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV42 {
    get(key: number): Promise<(v42.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v42.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v42.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v42.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v42.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v42.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v42.ScheduledV3 | undefined)[]][]>
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
export interface SchedulerAgendaStorageV62 {
    get(key: number): Promise<(v62.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v62.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v62.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v62.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v62.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v62.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v62.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV67 {
    get(key: number): Promise<(v67.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v67.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v67.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v67.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v67.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v67.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v67.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV68 {
    get(key: number): Promise<(v68.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v68.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v68.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v68.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v68.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v68.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v68.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV75 {
    get(key: number): Promise<(v75.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v75.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v75.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v75.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v75.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v75.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v75.ScheduledV3 | undefined)[]][]>
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

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV87 {
    get(key: number): Promise<(v87.ScheduledV3 | undefined)[]>
    getAll(): Promise<(v87.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(v87.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v87.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v87.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v87.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v87.ScheduledV3 | undefined)[]][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'd134b5bb4dad116817692e25dce47c836fbbb31d353d5749d4fc370b62e7286b'
    }

    /**
     *  Lookup from identity to the block number and index of the task.
     */
    get asV42(): SchedulerLookupStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Lookup from identity to the block number and index of the task.
 */
export interface SchedulerLookupStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Current index of the session.
     */
    get asV42(): SessionCurrentIndexStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Current index of the session.
 */
export interface SessionCurrentIndexStorageV42 {
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
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get asV42(): SessionDisabledValidatorsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Indices of disabled validators.
 * 
 *  The vec is always kept sorted so that we can find whether a given validator is
 *  disabled using binary search. It gets cleared when `on_session_ending` returns
 *  a new set of identities.
 */
export interface SessionDisabledValidatorsStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asV42(): SessionKeyOwnerStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '631bdf50943dc1aa6eef0e538bc5f8db41fca7120b2bae11b9c7ad84ada29964'
    }

    /**
     *  The next session keys for a validator.
     */
    get asV42(): SessionNextKeysStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageV42 {
    get(key: Uint8Array): Promise<(v42.SessionKeys | undefined)>
    getAll(): Promise<v42.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(v42.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.SessionKeys][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get asV42(): SessionQueuedChangedStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface SessionQueuedChangedStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '88cd205a98ff7b5562f0d030266b07e3566fdf283e05e6bd4c2405710a6a3b90'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asV42(): SessionQueuedKeysStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageV42 {
    get(): Promise<[Uint8Array, v42.SessionKeys][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of validators.
     */
    get asV42(): SessionValidatorsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The current set of validators.
 */
export interface SessionValidatorsStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV42(): SudoKeyStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV42(): SystemAccountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV42 {
    get(key: Uint8Array): Promise<v42.AccountInfo>
    getAll(): Promise<v42.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v42.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.AccountInfo][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asV42(): SystemAllExtrinsicsLenStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asV42(): SystemBlockHashStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
    }

    /**
     *  The current weight for the block.
     */
    get asV42(): SystemBlockWeightStorageV42 {
        assert(this.isV42)
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
export interface SystemBlockWeightStorageV42 {
    get(): Promise<v42.PerDispatchClass>
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
    get isV42(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV42(): SystemDigestStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV42 {
    get(): Promise<v42.Digest>
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asV42(): SystemEventCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageV42 {
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
    get isV42(): boolean {
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
    get asV42(): SystemEventTopicsStorageV42 {
        assert(this.isV42)
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
export interface SystemEventTopicsStorageV42 {
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
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV42(): boolean {
        return this.getTypeHash() === 'd74e653bdc089915cf79523e09885d8105726c50cdb92981f96b064ba236395d'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV42(): SystemEventsStorageV42 {
        assert(this.isV42)
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
    get isV62(): boolean {
        return this.getTypeHash() === 'd9f3e9a00cc60fb5ad4e74eb778a1c0b505bdc3917043d7c7948a962b8bebd41'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV62(): SystemEventsStorageV62 {
        assert(this.isV62)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV67(): boolean {
        return this.getTypeHash() === 'aa9a69eb4d370d0acec9783741b4a05205aa866d991568dd3b38684c88bed06e'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV67(): SystemEventsStorageV67 {
        assert(this.isV67)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV68(): boolean {
        return this.getTypeHash() === '50eabdd8720b7a0903e9569f57dc45832654c1895657f7ee45489741b365f784'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV68(): SystemEventsStorageV68 {
        assert(this.isV68)
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
    get isV75(): boolean {
        return this.getTypeHash() === '95148f20c44e940e3d42ca32af4d578404e6919eff41ffda0418cc86757a72d5'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV75(): SystemEventsStorageV75 {
        assert(this.isV75)
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

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV87(): boolean {
        return this.getTypeHash() === '6fba2a69b1540f5ffcbd43957e0ffdda75fdebb710e5b4bf6e2b83f398d37685'
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
    get asV87(): SystemEventsStorageV87 {
        assert(this.isV87)
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
    get isV88(): boolean {
        return this.getTypeHash() === '3a20589c759cd0c059aa3885fdc2941e2bbc34bbd54f059e1ea807f44b9dd662'
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
    get asV88(): SystemEventsStorageV88 {
        assert(this.isV88)
        return this as any
    }
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV42 {
    get(): Promise<v42.EventRecord[]>
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
export interface SystemEventsStorageV62 {
    get(): Promise<v62.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV67 {
    get(): Promise<v67.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV68 {
    get(): Promise<v68.EventRecord[]>
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
export interface SystemEventsStorageV75 {
    get(): Promise<v75.EventRecord[]>
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

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV87 {
    get(): Promise<v87.EventRecord[]>
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
export interface SystemEventsStorageV88 {
    get(): Promise<v88.EventRecord[]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asV42(): SystemExecutionPhaseStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageV42 {
    get(): Promise<(v42.Phase | undefined)>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asV42(): SystemExtrinsicCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asV42(): SystemExtrinsicDataStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asV42(): SystemLastRuntimeUpgradeStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageV42 {
    get(): Promise<(v42.LastRuntimeUpgradeInfo | undefined)>
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asV42(): SystemNumberStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asV42(): SystemParentHashStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asV42(): SystemUpgradedToTripleRefCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asV42(): SystemUpgradedToU32RefCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV42(): TechnicalCommitteeMembersStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface TechnicalCommitteeMembersStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asV42(): TechnicalCommitteePrimeStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface TechnicalCommitteePrimeStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV42(): TechnicalCommitteeProposalCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface TechnicalCommitteeProposalCountStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '6c32784600097763396a9d6ed2cdb8fea2f274fb6bdcdd593ebc3e37e61555d2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV42(): TechnicalCommitteeProposalOfStorageV42 {
        assert(this.isV42)
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
    get isV62(): boolean {
        return this.getTypeHash() === '43ec1e4f4a6ba0edbbca67ee06379cba4e8a527fa11bad2dee2fd27970a4dd24'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV62(): TechnicalCommitteeProposalOfStorageV62 {
        assert(this.isV62)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV67(): boolean {
        return this.getTypeHash() === 'd2fae7f5686547803664d6cd2bcaefd969ca5b3b2ecfc86b2db86610adb3b67b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV67(): TechnicalCommitteeProposalOfStorageV67 {
        assert(this.isV67)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV68(): boolean {
        return this.getTypeHash() === '6a9f8ef74fb009d3a1fd9eab8e5fd5b140259527353a802492fd8805ea46346d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV68(): TechnicalCommitteeProposalOfStorageV68 {
        assert(this.isV68)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV75(): boolean {
        return this.getTypeHash() === '3139bede1891fa32ec68cbfda59e169e3a8ec9dc8a98058e02ac0f7cae6589b2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV75(): TechnicalCommitteeProposalOfStorageV75 {
        assert(this.isV75)
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

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV87(): boolean {
        return this.getTypeHash() === 'dc65debe57b5d6c4ab77c91c888de66fabe2402be7101e21c5e7aaac19057aaa'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV87(): TechnicalCommitteeProposalOfStorageV87 {
        assert(this.isV87)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV42 {
    get(key: Uint8Array): Promise<(v42.Call | undefined)>
    getAll(): Promise<v42.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v42.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.Call][]>
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
export interface TechnicalCommitteeProposalOfStorageV62 {
    get(key: Uint8Array): Promise<(v62.Call | undefined)>
    getAll(): Promise<v62.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v62.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v62.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v62.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v62.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v62.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV67 {
    get(key: Uint8Array): Promise<(v67.Call | undefined)>
    getAll(): Promise<v67.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v67.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v67.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v67.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v67.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v67.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV68 {
    get(key: Uint8Array): Promise<(v68.Call | undefined)>
    getAll(): Promise<v68.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v68.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v68.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v68.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v68.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v68.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV75 {
    get(key: Uint8Array): Promise<(v75.Call | undefined)>
    getAll(): Promise<v75.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v75.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v75.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v75.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v75.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v75.Call][]>
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV87 {
    get(key: Uint8Array): Promise<(v87.Call | undefined)>
    getAll(): Promise<v87.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v87.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v87.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v87.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v87.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v87.Call][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asV42(): TechnicalCommitteeProposalsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface TechnicalCommitteeProposalsStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asV42(): TechnicalCommitteeVotingStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface TechnicalCommitteeVotingStorageV42 {
    get(key: Uint8Array): Promise<(v42.Votes | undefined)>
    getAll(): Promise<v42.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(v42.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.Votes][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asV42(): TimestampDidUpdateStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asV42(): TimestampNowStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV42(): TipsReasonsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TipsReasonsStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV42(): TipsTipsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsTipsStorageV42 {
    get(key: Uint8Array): Promise<(v42.OpenTip | undefined)>
    getAll(): Promise<v42.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v42.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.OpenTip][]>
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
    get isV42(): boolean {
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
    get asV42(): TokensAccountsStorageV42 {
        assert(this.isV42)
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
export interface TokensAccountsStorageV42 {
    get(key1: Uint8Array, key2: number): Promise<v42.Type_426>
    getAll(): Promise<v42.Type_426[]>
    getMany(keys: [Uint8Array, number][]): Promise<v42.Type_426[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v42.Type_426][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v42.Type_426][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v42.Type_426][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v42.Type_426][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v42.Type_426][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v42.Type_426][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '94d13c37bf173a8e289a7abf6d778dc28e075e16963c06c041136f789ac66572'
    }

    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV42(): TokensLocksStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Any liquidity locks of a token type under an account.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface TokensLocksStorageV42 {
    get(key1: Uint8Array, key2: number): Promise<v42.Type_424[]>
    getAll(): Promise<v42.Type_424[][]>
    getMany(keys: [Uint8Array, number][]): Promise<v42.Type_424[][]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v42.Type_424[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v42.Type_424[]][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v42.Type_424[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v42.Type_424[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v42.Type_424[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v42.Type_424[]][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
    }

    /**
     *  The total issuance of a token type.
     */
    get asV42(): TokensTotalIssuanceStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The total issuance of a token type.
 */
export interface TokensTotalIssuanceStorageV42 {
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
    get isV62(): boolean {
        return this.getTypeHash() === 'b84898f3d187596a7b6e3678769d37269c8b37c42ad19309d36b974ad9f3d352'
    }

    /**
     *  The paused transaction map
     * 
     *  map (PalletNameBytes, FunctionNameBytes) => Option<()>
     */
    get asV62(): TransactionPausePausedTransactionsStorageV62 {
        assert(this.isV62)
        return this as any
    }
}

/**
 *  The paused transaction map
 * 
 *  map (PalletNameBytes, FunctionNameBytes) => Option<()>
 */
export interface TransactionPausePausedTransactionsStorageV62 {
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

    get isV42(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV42(): TransactionPaymentNextFeeMultiplierStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageV42 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isV42(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asV42(): TransactionPaymentStorageVersionStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageV42 {
    get(): Promise<v42.Type_174>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get asV42(): TreasuryApprovalsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface TreasuryApprovalsStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of proposals that have been made.
     */
    get asV42(): TreasuryProposalCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Number of proposals that have been made.
 */
export interface TreasuryProposalCountStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV42(): TreasuryProposalsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV42 {
    get(key: number): Promise<(v42.Proposal | undefined)>
    getAll(): Promise<v42.Proposal[]>
    getMany(keys: number[]): Promise<(v42.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v42.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: v42.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v42.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v42.Proposal][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'dd717df0f824c1616e58c0f411648150ead9ba80eb70d3fa1d3ce17cf15cdb99'
    }

    /**
     *  The assets held by any given account; set out this way so that assets owned by a single
     *  account can be enumerated.
     */
    get asV42(): UniquesAccountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The assets held by any given account; set out this way so that assets owned by a single
 *  account can be enumerated.
 */
export interface UniquesAccountStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '473a8db9ad3cadcd73a4d1d940a1b477f877f8a199d89bcf4b57a170d7e2e7fb'
    }

    /**
     *  The assets in existence and their ownership details.
     */
    get asV42(): UniquesAssetStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The assets in existence and their ownership details.
 */
export interface UniquesAssetStorageV42 {
    get(key1: bigint, key2: bigint): Promise<(v42.InstanceDetails | undefined)>
    getAll(): Promise<v42.InstanceDetails[]>
    getMany(keys: [bigint, bigint][]): Promise<(v42.InstanceDetails | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v42.InstanceDetails][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v42.InstanceDetails][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v42.InstanceDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v42.InstanceDetails][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v42.InstanceDetails][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v42.InstanceDetails][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'a3a0ccec7ada073a05ca828d16c2decda5dc3aaf3545c5c22f508123c0751a45'
    }

    /**
     *  Metadata of an asset class.
     */
    get asV42(): UniquesAttributeStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Metadata of an asset class.
 */
export interface UniquesAttributeStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '64b5101df343156a22be92d239c86e3010267e182a902a0c77b89a0150e1eb2a'
    }

    /**
     *  Details of an asset class.
     */
    get asV42(): UniquesClassStorageV42 {
        assert(this.isV42)
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
export interface UniquesClassStorageV42 {
    get(key: bigint): Promise<(v42.ClassDetails | undefined)>
    getAll(): Promise<v42.ClassDetails[]>
    getMany(keys: bigint[]): Promise<(v42.ClassDetails | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v42.ClassDetails][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v42.ClassDetails][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v42.ClassDetails][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v42.ClassDetails][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'aa05d715557dda88cd21e53b8460b3ef83dc91868ade890f7afcc69de18cb707'
    }

    /**
     *  The classes owned by any given account; set out this way so that classes owned by a single
     *  account can be enumerated.
     */
    get asV42(): UniquesClassAccountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The classes owned by any given account; set out this way so that classes owned by a single
 *  account can be enumerated.
 */
export interface UniquesClassAccountStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '4ca83ab7415e7250d6c720a9930f95ae0d08c121898b5e01b38abf9add691411'
    }

    /**
     *  Metadata of an asset class.
     */
    get asV42(): UniquesClassMetadataOfStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Metadata of an asset class.
 */
export interface UniquesClassMetadataOfStorageV42 {
    get(key: bigint): Promise<(v42.ClassMetadata | undefined)>
    getAll(): Promise<v42.ClassMetadata[]>
    getMany(keys: bigint[]): Promise<(v42.ClassMetadata | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v42.ClassMetadata][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v42.ClassMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v42.ClassMetadata][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v42.ClassMetadata][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'b930ce9a1c8bff9d1191f22c2274c59d0c049903864e92d1c09b9b65303145cd'
    }

    /**
     *  Metadata of an asset instance.
     */
    get asV42(): UniquesInstanceMetadataOfStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Metadata of an asset instance.
 */
export interface UniquesInstanceMetadataOfStorageV42 {
    get(key1: bigint, key2: bigint): Promise<(v42.InstanceMetadata | undefined)>
    getAll(): Promise<v42.InstanceMetadata[]>
    getMany(keys: [bigint, bigint][]): Promise<(v42.InstanceMetadata | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v42.InstanceMetadata][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v42.InstanceMetadata][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v42.InstanceMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v42.InstanceMetadata][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v42.InstanceMetadata][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v42.InstanceMetadata][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'f6cf7e5c9878cef27f99d1df60d9721e0034a66cd864d15d65a9196bb951c149'
    }

    /**
     *  Abstract fungible balances under a given location and a abstract
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get asV42(): UnknownTokensAbstractFungibleBalancesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Abstract fungible balances under a given location and a abstract
 *  fungible id.
 * 
 *  double_map: who, asset_id => u128
 */
export interface UnknownTokensAbstractFungibleBalancesStorageV42 {
    get(key1: v42.V1MultiLocation, key2: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [v42.V1MultiLocation, Uint8Array][]): Promise<bigint[]>
    getKeys(): Promise<[v42.V1MultiLocation, Uint8Array][]>
    getKeys(key1: v42.V1MultiLocation): Promise<[v42.V1MultiLocation, Uint8Array][]>
    getKeys(key1: v42.V1MultiLocation, key2: Uint8Array): Promise<[v42.V1MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v42.V1MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v42.V1MultiLocation): AsyncIterable<[v42.V1MultiLocation, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: v42.V1MultiLocation, key2: Uint8Array): AsyncIterable<[v42.V1MultiLocation, Uint8Array][]>
    getPairs(): Promise<[k: [v42.V1MultiLocation, Uint8Array], v: bigint][]>
    getPairs(key1: v42.V1MultiLocation): Promise<[k: [v42.V1MultiLocation, Uint8Array], v: bigint][]>
    getPairs(key1: v42.V1MultiLocation, key2: Uint8Array): Promise<[k: [v42.V1MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v42.V1MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v42.V1MultiLocation): AsyncIterable<[k: [v42.V1MultiLocation, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v42.V1MultiLocation, key2: Uint8Array): AsyncIterable<[k: [v42.V1MultiLocation, Uint8Array], v: bigint][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'a1d05d2a23ba410062fdbbbbea5e8c90763e56102572e63e7d9a78dff938ef51'
    }

    /**
     *  Concrete fungible balances under a given location and a concrete
     *  fungible id.
     * 
     *  double_map: who, asset_id => u128
     */
    get asV42(): UnknownTokensConcreteFungibleBalancesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Concrete fungible balances under a given location and a concrete
 *  fungible id.
 * 
 *  double_map: who, asset_id => u128
 */
export interface UnknownTokensConcreteFungibleBalancesStorageV42 {
    get(key1: v42.V1MultiLocation, key2: v42.V1MultiLocation): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [v42.V1MultiLocation, v42.V1MultiLocation][]): Promise<bigint[]>
    getKeys(): Promise<[v42.V1MultiLocation, v42.V1MultiLocation][]>
    getKeys(key1: v42.V1MultiLocation): Promise<[v42.V1MultiLocation, v42.V1MultiLocation][]>
    getKeys(key1: v42.V1MultiLocation, key2: v42.V1MultiLocation): Promise<[v42.V1MultiLocation, v42.V1MultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v42.V1MultiLocation, v42.V1MultiLocation][]>
    getKeysPaged(pageSize: number, key1: v42.V1MultiLocation): AsyncIterable<[v42.V1MultiLocation, v42.V1MultiLocation][]>
    getKeysPaged(pageSize: number, key1: v42.V1MultiLocation, key2: v42.V1MultiLocation): AsyncIterable<[v42.V1MultiLocation, v42.V1MultiLocation][]>
    getPairs(): Promise<[k: [v42.V1MultiLocation, v42.V1MultiLocation], v: bigint][]>
    getPairs(key1: v42.V1MultiLocation): Promise<[k: [v42.V1MultiLocation, v42.V1MultiLocation], v: bigint][]>
    getPairs(key1: v42.V1MultiLocation, key2: v42.V1MultiLocation): Promise<[k: [v42.V1MultiLocation, v42.V1MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v42.V1MultiLocation, v42.V1MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v42.V1MultiLocation): AsyncIterable<[k: [v42.V1MultiLocation, v42.V1MultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: v42.V1MultiLocation, key2: v42.V1MultiLocation): AsyncIterable<[k: [v42.V1MultiLocation, v42.V1MultiLocation], v: bigint][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'd1025301ffa60f04c50bb1007ecb356d52103dd9c366150de1ba80c6e043ac2f'
    }

    /**
     *  Vesting schedules of an account.
     * 
     *  VestingSchedules: map AccountId => Vec<VestingSchedule>
     */
    get asV42(): VestingVestingSchedulesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Vesting schedules of an account.
 * 
 *  VestingSchedules: map AccountId => Vec<VestingSchedule>
 */
export interface VestingVestingSchedulesStorageV42 {
    get(key: Uint8Array): Promise<v42.VestingSchedule[]>
    getAll(): Promise<v42.VestingSchedule[][]>
    getMany(keys: Uint8Array[]): Promise<v42.VestingSchedule[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v42.VestingSchedule[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v42.VestingSchedule[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v42.VestingSchedule[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v42.VestingSchedule[]][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
    }

    /**
     *  Asset pair in a pool.
     */
    get asV42(): XYKPoolAssetsStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Asset pair in a pool.
 */
export interface XYKPoolAssetsStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  Asset id storage for shared pool tokens
     */
    get asV42(): XYKShareTokenStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Asset id storage for shared pool tokens
 */
export interface XYKShareTokenStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '0bac40afaf72ceea5a87ae2baaa5fe7f69915323f3293bdd970e7790a9d968c0'
    }

    /**
     *  Total liquidity in a pool.
     */
    get asV42(): XYKTotalLiquidityStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Total liquidity in a pool.
 */
export interface XYKTotalLiquidityStorageV42 {
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

    /**
     *  Deposit details.
     */
    get isV88(): boolean {
        return this.getTypeHash() === 'd9d2c46cd46a30ac4a47b608513a72c3905caef9e06fcb4b840ef8b9a81bc8c9'
    }

    /**
     *  Deposit details.
     */
    get asV88(): XYKWarehouseLMDepositStorageV88 {
        assert(this.isV88)
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

/**
 *  Deposit details.
 */
export interface XYKWarehouseLMDepositStorageV88 {
    get(key: bigint): Promise<(v88.DepositData | undefined)>
    getAll(): Promise<v88.DepositData[]>
    getMany(keys: bigint[]): Promise<(v88.DepositData | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v88.DepositData][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v88.DepositData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v88.DepositData][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v88.DepositData][]>
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

    get isV87(): boolean {
        return this.getTypeHash() === 'dc53ba4e28ca4b843441a8377a19d6e116a38a930bc9a2c325795efcd5913add'
    }

    get asV87(): XYKWarehouseLMGlobalFarmStorageV87 {
        assert(this.isV87)
        return this as any
    }

    get isV88(): boolean {
        return this.getTypeHash() === '2de44279f97e489b38496f3f6ebcbdc99a5d5cec2f43cb489d871451fe66d1f6'
    }

    get asV88(): XYKWarehouseLMGlobalFarmStorageV88 {
        assert(this.isV88)
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

export interface XYKWarehouseLMGlobalFarmStorageV87 {
    get(key: number): Promise<(v87.GlobalFarmData | undefined)>
    getAll(): Promise<v87.GlobalFarmData[]>
    getMany(keys: number[]): Promise<(v87.GlobalFarmData | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v87.GlobalFarmData][]>
    getPairs(key: number): Promise<[k: number, v: v87.GlobalFarmData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v87.GlobalFarmData][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v87.GlobalFarmData][]>
}

export interface XYKWarehouseLMGlobalFarmStorageV88 {
    get(key: number): Promise<(v88.GlobalFarmData | undefined)>
    getAll(): Promise<v88.GlobalFarmData[]>
    getMany(keys: number[]): Promise<(v88.GlobalFarmData | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v88.GlobalFarmData][]>
    getPairs(key: number): Promise<[k: number, v: v88.GlobalFarmData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v88.GlobalFarmData][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v88.GlobalFarmData][]>
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

    /**
     *  Yield farm details.
     */
    get isV87(): boolean {
        return this.getTypeHash() === 'af1353c4246f3f8671221b4b7d5b04d37b08e782f81b511303a654871c91d180'
    }

    /**
     *  Yield farm details.
     */
    get asV87(): XYKWarehouseLMYieldFarmStorageV87 {
        assert(this.isV87)
        return this as any
    }

    /**
     *  Yield farm details.
     */
    get isV88(): boolean {
        return this.getTypeHash() === '82a283d0278ecfddd77850b4c61d7132df948bb119ae629255ecd4a2faa1b1f7'
    }

    /**
     *  Yield farm details.
     */
    get asV88(): XYKWarehouseLMYieldFarmStorageV88 {
        assert(this.isV88)
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

/**
 *  Yield farm details.
 */
export interface XYKWarehouseLMYieldFarmStorageV87 {
    get(key1: Uint8Array, key2: number, key3: number): Promise<(v87.YieldFarmData | undefined)>
    getAll(): Promise<v87.YieldFarmData[]>
    getMany(keys: [Uint8Array, number, number][]): Promise<(v87.YieldFarmData | undefined)[]>
    getKeys(): Promise<[Uint8Array, number, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number, number][]>
    getKeys(key1: Uint8Array, key2: number, key3: number): Promise<[Uint8Array, number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number, key3: number): AsyncIterable<[Uint8Array, number, number][]>
    getPairs(): Promise<[k: [Uint8Array, number, number], v: v87.YieldFarmData][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number, number], v: v87.YieldFarmData][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number, number], v: v87.YieldFarmData][]>
    getPairs(key1: Uint8Array, key2: number, key3: number): Promise<[k: [Uint8Array, number, number], v: v87.YieldFarmData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number, number], v: v87.YieldFarmData][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number, number], v: v87.YieldFarmData][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number, number], v: v87.YieldFarmData][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number, key3: number): AsyncIterable<[k: [Uint8Array, number, number], v: v87.YieldFarmData][]>
}

/**
 *  Yield farm details.
 */
export interface XYKWarehouseLMYieldFarmStorageV88 {
    get(key1: Uint8Array, key2: number, key3: number): Promise<(v88.YieldFarmData | undefined)>
    getAll(): Promise<v88.YieldFarmData[]>
    getMany(keys: [Uint8Array, number, number][]): Promise<(v88.YieldFarmData | undefined)[]>
    getKeys(): Promise<[Uint8Array, number, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number, number][]>
    getKeys(key1: Uint8Array, key2: number, key3: number): Promise<[Uint8Array, number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number, key3: number): AsyncIterable<[Uint8Array, number, number][]>
    getPairs(): Promise<[k: [Uint8Array, number, number], v: v88.YieldFarmData][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number, number], v: v88.YieldFarmData][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number, number], v: v88.YieldFarmData][]>
    getPairs(key1: Uint8Array, key2: number, key3: number): Promise<[k: [Uint8Array, number, number], v: v88.YieldFarmData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number, number], v: v88.YieldFarmData][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number, number], v: v88.YieldFarmData][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number, number], v: v88.YieldFarmData][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number, key3: number): AsyncIterable<[k: [Uint8Array, number, number], v: v88.YieldFarmData][]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '7bf0d83d361216e18f7bca971cbf4fbd433158d3be6ac33fe278fb6d9bfb0469'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get asV42(): XcmpQueueInboundXcmpMessagesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
 */
export interface XcmpQueueInboundXcmpMessagesStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '9463adeec55c62de9270b726721d07d1258e861fc23bcadc753e06286f1e9d94'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get asV42(): XcmpQueueInboundXcmpStatusStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Status of the inbound XCMP channels.
 */
export interface XcmpQueueInboundXcmpStatusStorageV42 {
    get(): Promise<v42.InboundChannelDetails[]>
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
    get isV42(): boolean {
        return this.getTypeHash() === 'f8f791196403322746e9b911cdffc1dfb7880ff624b4765b5515d8264f7df7b2'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get asV42(): XcmpQueueOutboundXcmpMessagesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The messages outbound in a given XCMP channel.
 */
export interface XcmpQueueOutboundXcmpMessagesStorageV42 {
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
    get isV42(): boolean {
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
    get asV42(): XcmpQueueOutboundXcmpStatusStorageV42 {
        assert(this.isV42)
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
export interface XcmpQueueOutboundXcmpStatusStorageV42 {
    get(): Promise<v42.OutboundChannelDetails[]>
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
    get isV42(): boolean {
        return this.getTypeHash() === '2eb096a3f66cc2d3a7f63f9f097c63bad7d960c4949a759a34865c7919f65122'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get asV42(): XcmpQueueOverweightStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These message stay in this storage map until they are manually dispatched via
 *  `service_overweight`.
 */
export interface XcmpQueueOverweightStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get asV42(): XcmpQueueOverweightCountStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
 *  available free overweight index.
 */
export interface XcmpQueueOverweightCountStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'bc17b84c06c7e0df3f2684c76020e6d76ff231be948076edbe6751b00937b0b1'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asV42(): XcmpQueueQueueConfigStorageV42 {
        assert(this.isV42)
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
export interface XcmpQueueQueueConfigStorageV42 {
    get(): Promise<v42.QueueConfigData>
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
    get isV42(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get asV42(): XcmpQueueQueueSuspendedStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
 */
export interface XcmpQueueQueueSuspendedStorageV42 {
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
    get isV42(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get asV42(): XcmpQueueSignalMessagesStorageV42 {
        assert(this.isV42)
        return this as any
    }
}

/**
 *  Any signal messages waiting to be sent.
 */
export interface XcmpQueueSignalMessagesStorageV42 {
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
