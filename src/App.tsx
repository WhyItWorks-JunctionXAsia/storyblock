import React, { useEffect } from "react";
import { BroadcastMode, SigningCosmosClient } from "@cosmjs/launchpad";
import { Window as KeplrWindow } from "@keplr-wallet/types";
import { Tx } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { StargateClient } from "@cosmjs/stargate";

declare global {
  interface Window extends KeplrWindow {}
}

const App: React.FC = () => {
  const RPC = "http://172.19.250.237:26657/";

  useEffect(() => {
    const onLoad = async () => {
      if (!window.keplr) {
        alert("Please install keplr extension");
      } else {
        const chainId = "cosmoshub-4";

        // Enabling before using the Keplr is recommended.
        // This method will ask the user whether to allow access if they haven't visited this website.
        // Also, it will request that the user unlock the wallet if the wallet is locked.
        await window.keplr.enable(chainId);

        const offlineSigner = window.keplr.getOfflineSigner(chainId);

        // You can get the address/public keys by `getAccounts` method.
        // It can return the array of address/public key.
        // But, currently, Keplr extension manages only one address/public key pair.
        // XXX: This line is needed to set the sender address for SigningCosmosClient.
        const accounts = await offlineSigner.getAccounts();
        console.log(accounts[0]);

        // Initialize the gaia api with the offline signer that is injected by Keplr extension.
        const cosmJS = new SigningCosmosClient(
          "http://172.19.250.237:1317/",
          accounts[0].address,
          offlineSigner
        );
        const client = await StargateClient.connect(RPC);
        console.log(
          "With client, chain id:",
          await client.getChainId(),
          ", height:",
          await client.getHeight()
        );

        window.keplr.sendTx(chainId, new Uint8Array(), BroadcastMode.Block);
      }
    };

    onLoad();
  }, []);

  return <div />;
};

export default App;
