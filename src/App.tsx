import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Window as KeplrWindow } from "@keplr-wallet/types";
import Layout from "layout/Layout";
import HomePage from "pages/home/HomePage";
import ListPage from "pages/list/ListPage";
import DetailPage from "./pages/detail/DetailPage";
import { accountAddressAtom } from "atom";
import { useUpdateAtom } from "jotai/utils";
import { useWallet } from "./utils/hooks";
import { WalletAddressType } from "./types/wallet.type";
import { getStories } from "utils/api";
import AccountPage from "./pages/account/AccountPage";

declare global {
  interface Window extends KeplrWindow {}
}

const App: React.FC = () => {
  useWallet(window);

  useEffect(() => {
    const test = async () => {
      await getStories("book_2");
    };

    test();
  });

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/details" element={<DetailPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
