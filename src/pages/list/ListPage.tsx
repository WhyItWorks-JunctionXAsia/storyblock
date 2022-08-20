import React, {useEffect} from "react";
import MyStory from "pages/list/MyStory";
import MyVote from "pages/list/MyVote";
import {useAtom, useAtomValue} from "jotai";
import {accountAddressAtom} from "../../atom";
import ListBackground from "./ListBackground";


const ListPage: React.FC = () => {

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
            <ListBackground />
            <MyStory />
            <MyVote />
        </>
        )
    }
    </>
  );
};

export default ListPage;
