import React, { useEffect } from "react";
import { BroadcastMode, SigningCosmosClient } from "@cosmjs/launchpad";
import { Window as KeplrWindow } from "@keplr-wallet/types";
import {
  GasPrice,
  SigningStargateClient,
  StargateClient,
} from "@cosmjs/stargate";
import {
  DirectSecp256k1HdWallet,
  OfflineDirectSigner,
} from "@cosmjs/proto-signing";
import { Decimal } from "@cosmjs/math";

declare global {
  interface Window extends KeplrWindow {}
}

const App: React.FC = () => {
  const RPC = "http://172.20.10.4:26657/";

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
        const myAccount = accounts[0];

        // Initialize the gaia api with the offline signer that is injected by Keplr extension.
        const cosmJS = new SigningCosmosClient(
          "http://172.20.10.4:1317/",
          myAccount.address,
          offlineSigner
        );
        const client = await StargateClient.connect(RPC);
        const mySigner: OfflineDirectSigner =
          await DirectSecp256k1HdWallet.fromMnemonic(
            "mushroom report thing table domain away promote west cupboard pony ask judge",
            {
              prefix: "blog",
            }
          );
        const signingClient = await SigningStargateClient.connectWithSigner(
          RPC,
          mySigner,
          {
            gasPrice: new GasPrice(Decimal.constructor(), "uatom"),
          }
        );
        console.log(signingClient.getAllBalances(myAccount.address));
        const result = await signingClient.signAndBroadcast(
          myAccount.address,
          [
            {
              typeUrl: "/cosmos.bank.v1beta1.MsgSend",
              value: {
                fromAddress: myAccount.address,
                toAddress: "cosmos1ty0c0awksamguee7zgat6q864gtgf2v398a8jc",
                amount: [{ denom: "uatom", amount: "500" }],
              },
            },
          ],
          {
            amount: [{ denom: "uatom", amount: "500" }],
            gas: "200000",
          }
        );
        console.log(result);
      }
    };

    onLoad();
  }, []);

  return <div />;
};

export default App;
