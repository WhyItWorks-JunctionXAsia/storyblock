import React, {useEffect} from "react";
import MyStory from "pages/history/MyStory";
import HistoryBackground from "pages/history/HistoryBackground";
import MyVote from "pages/history/MyVote";
import {useAtom, useAtomValue} from "jotai";
import {accountAddressAtom} from "../../atom";
import {WalletAddressType} from "../../types/wallet.type";
import {useWallet} from "../../utils/hooks";


const HistoryPage: React.FC = () => {

  const [accountAddress, setAccountAddtess] = useAtom(accountAddressAtom)

  useEffect(() => {
    if(accountAddress===undefined) {
      alert('connect the wallet first')
      window.location.replace('/')
    }
  }, []);


  return (
    <>
    {
        (accountAddress !== undefined) &&(
        <>
            <HistoryBackground />
            <MyStory />
            <MyVote />
        </>
        )
    }
    </>
  );
};

export default HistoryPage;
