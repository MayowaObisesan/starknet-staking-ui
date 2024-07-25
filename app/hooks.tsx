import { useAccount } from "@starknet-react/core";
import { TokenboundClient, WalletClient } from "starknet-tokenbound-sdk";
import { IMPLEMENTATION_HASH, JSON_RPC, REGISTRY_ADDRESS } from "./constants";

export const useTokenBoundSDK = () => {
    // setup SDK
    const { account } = useAccount();

    const options = {
        account: account,
        registryAddress: REGISTRY_ADDRESS,
        implementationAddress: IMPLEMENTATION_HASH,
        jsonRPC: JSON_RPC
    }

    let tokenbound: any;
    if (account) {
        tokenbound = new TokenboundClient(options);
    }

    return { tokenbound };
};