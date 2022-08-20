import React, {useEffect, useState} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SigningCosmosClient } from "@cosmjs/launchpad";
import { Window as KeplrWindow } from "@keplr-wallet/types";
import { StargateClient } from "@cosmjs/stargate";
import Layout from "layout/Layout";
import HomePage from "pages/home/HomePage";
import HistoryPage from "pages/history/HistoryPage";
import ListPage from "./pages/list/ListPage";
import {useAtom, useAtomValue} from "jotai";
import {accountAddressAtom} from "atom";
import {useUpdateAtom} from "jotai/utils";
declare global {
  interface Window extends KeplrWindow {}
}

const App: React.FC = () => {

    const setUpdateAccountAddressAtom = useUpdateAtom(accountAddressAtom);

   useEffect(() => {
    const onLoad = async () => {
      if (!window.keplr) {
        alert("Please install keplr extension");
      } else {
        const chainId = "cosmoshub-4";
        await window.keplr.enable(chainId);

        const offlineSigner = window.keplr.getOfflineSigner(chainId);
        const accounts = await offlineSigner.getAccounts();
        const myAccount = accounts[0];
        await setUpdateAccountAddressAtom(myAccount.address);

      //   const cosmJS = new SigningCosmosClient(
      //     `${BASE_URL}:${REST_PORT}`,
      //     myAccount.address,
      //     offlineSigner
      //   );
      //   const client = await StargateClient.connect(`${BASE_URL}:${RPC_PORT}`);
      //
      //   console.log(client.getAllBalances(myAccount.address));
      //
      //   const result = await signingClient.signAndBroadcast(
      //     myAccount.address,
      //     [
      //       {
      //         typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      //         value: {
      //           fromAddress: myAccount.address,
      //           toAddress: "cosmos1ty0c0awksamguee7zgat6q864gtgf2v398a8jc",
      //           amount: [{ denom: "uatom", amount: "500" }],
      //         },
      //       },
      //     ],
      //     {
      //       amount: [{ denom: "uatom", amount: "500" }],
      //       gas: "200000",
      //     }
      //   );
      //   console.log(result);
       }
    }
    onLoad();
  }, []);

  return (
      <>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/history" element={<HistoryPage />}/>
                <Route path="list" element={<ListPage/>}/>
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Route>
        </Routes>
      </>

  );
};

export default App;
