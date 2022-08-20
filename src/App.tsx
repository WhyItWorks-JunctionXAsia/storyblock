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
import {useWallet} from "./utils/hooks";
import {WalletAddressType} from "./types/wallet.type";
declare global {
  interface Window extends KeplrWindow {}
}

const App: React.FC = () => {

    useWallet(window);



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
