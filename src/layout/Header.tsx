import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Area from "components/Area";
import Button from "components/Button";
import ContentArea from "components/ContentArea";
import FlexContainer from "components/FlexContainer";
import HeaderButton from "layout/HeaderButton";
import { colorset, fontFamily, fontSize } from "utils/styles";
import search from "assets/icons/search-black.svg";
import storyblockLogo from "assets/images/storyblock-logo.png";
import {useAtom} from "jotai";
import {accountAddressAtom} from "../atom";

const Header: React.FC = () => {
  const [selected, setSelected] = useState("/");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

    const [accountAddress, setAccountAddress] = useAtom(accountAddressAtom)

  const onClickHandler = async() => {
      if (!window.keplr) {
          alert("Please install keplr extension");
      } else {
          try{
              const chainId = "cosmoshub-4";
              await window.keplr.enable(chainId);

              const offlineSigner = window.keplr.getOfflineSigner(chainId);
              const accounts = await offlineSigner.getAccounts();
              const myAccount = accounts[0];

              if(myAccount.address !== undefined){
                  await setAccountAddress(myAccount.address)
              }
          }catch (e){
              alert("login failed");
          }
      }

  }

  return (
    <header>
      <Area style={{ borderBottom: `1px solid ${colorset.line}` }}>
        <ContentArea
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "30px 45px",
          }}
        >
          <img src={storyblockLogo} />

          <FlexContainer alignItems="center" gap="0 20px">
            <HeaderButton
              onClick={() => {
                navigate("/");
              }}
              background={selected === "/" ? colorset.primary : undefined}
            >
              HOME
            </HeaderButton>

            <HeaderButton
              onClick={() => {
                navigate("/list");
              }}
              background={selected === "/list" ? colorset.primary : undefined}
            >
              LIST
            </HeaderButton>

            <HeaderButton
              onClick={() => {
                navigate("/account");
              }}
              background={selected == "/account" ? colorset.primary : undefined}
            >
              ACCOUNT
            </HeaderButton>
          </FlexContainer>

          <FlexContainer alignItems="center" gap="0 20px">
            <Button
              style={{
                width: "250px",
                height: "57px",
                borderRadius: "28.5px",
                background: "#2D3362",
                color: colorset.white,
                fontFamily: fontFamily.jua,
                fontSize: fontSize.lg,
              }}
              onClick={event => {onClickHandler()}}
            >
              CONNECT WALLET
            </Button>

            <Button>
              <img src={search} width="36px" />
            </Button>
          </FlexContainer>
        </ContentArea>
      </Area>
    </header>
  );
};

export default Header;
