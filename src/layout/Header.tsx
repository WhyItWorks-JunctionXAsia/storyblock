import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Area from "components/Area";
import Button from "components/Button";
import ContentArea from "components/ContentArea";
import HeaderButton from "layout/HeaderButton";
import { colorset } from "utils/styles";
import storyblockLogo from "assets/storyblock-logo.png";
import search from "assets/search-black.svg";

const Header: React.FC = () => {
  const [selected, setSelected] = useState("/");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

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

          <div style={{ display: "flex", alignItems: "center", gap: "0 30px" }}>
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
                navigate("/history");
              }}
              background={
                selected === "/history" ? colorset.primary : undefined
              }
            >
              HISTORY
            </HeaderButton>
            <HeaderButton
              onClick={() => {
                navigate("/account");
              }}
              background={selected == "/account" ? colorset.primary : undefined}
            >
              ACCOUNT
            </HeaderButton>
          </div>

          <Button>
            <img src={search} width="36px" />
          </Button>
        </ContentArea>
      </Area>
    </header>
  );
};

export default Header;
