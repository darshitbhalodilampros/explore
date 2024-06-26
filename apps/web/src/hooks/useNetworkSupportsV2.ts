import { useWeb3React } from '@web3-react/core'
// import { SUPPORTED_V2POOL_CHAIN_IDS, SUPPORTED_V2POOL_CHAIN_IDS_DEPRECATED } from 'constants/chains'
import { FeatureFlags } from 'uniswap/src/features/experiments/flags'
import { useFeatureFlag } from 'uniswap/src/features/experiments/hooks'

export function useNetworkSupportsV2() {
  const { chainId } = useWeb3React()
  const isV2EverywhereEnabled = useFeatureFlag(FeatureFlags.V2Everywhere)

  return (
    chainId && false
    // ((isV2EverywhereEnabled && SUPPORTED_V2POOL_CHAIN_IDS.includes(chainId)) ||
    //   SUPPORTED_V2POOL_CHAIN_IDS_DEPRECATED.includes(chainId))
  )
}
