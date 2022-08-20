import React from "react";
import HistoryBackground from "pages/history/HistoryBackground";
import MyStory from "pages/history/MyStory";
import MyVote from "pages/history/MyVote";
import {useAtomValue} from "jotai";
import {accountAddressAtom} from "../../atom";


const HistoryPage: React.FC = () => {


    const accountAddress = useAtomValue(accountAddressAtom);

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
