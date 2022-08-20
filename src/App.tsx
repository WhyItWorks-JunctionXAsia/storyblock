import React, {useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Window as KeplrWindow} from "@keplr-wallet/types";
import Layout from "layout/Layout";
import HomePage from "pages/home/HomePage";
import ListPage from "pages/list/ListPage";
import DetailPage from "./pages/detail/DetailPage";
import {accountAddressAtom} from "atom";
import {useUpdateAtom} from "jotai/utils";
import {useWallet} from "./utils/hooks";
import {WalletAddressType} from "./types/wallet.type";

declare global {
  interface Window extends KeplrWindow {}
}

const App: React.FC = () => {

    const setUpdateAccountAddressAtom = useUpdateAtom(accountAddressAtom);

   useEffect(() => {
    const onLoad = async () => {
        {
            const walletAddressDTO : WalletAddressType = await useWallet(window);

            const {walletAddress} = walletAddressDTO

            await setUpdateAccountAddressAtom(walletAddress)

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
                <Route path="/list" element={<ListPage />}/>
                <Route path="detail" element={<DetailPage/>}/>
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Route>
        </Routes>
      </>

  );
};

export default App;
