import { ChainId } from "smartorderrouter18";
import { DynamicConfigs } from "uniswap/src/features/experiments/configs";
import { useDynamicConfig } from "uniswap/src/features/experiments/hooks";

export const QUICK_ROUTE_CONFIG_KEY = "quick_route_chains";

export function useQuickRouteChains(): ChainId[] {
  const statsigConfig = useDynamicConfig(DynamicConfigs.QuickRouteChains);
  const chains = [919];
  if (chains.every((c) => Object.values(ChainId).includes(c))) {
    return chains;
  } else {
    console.error("dynamic config chains contain invalid ChainId");
    return [];
  }
}
