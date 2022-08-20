import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Area from "components/Area";
import ContentArea from "components/ContentArea";
import HeaderButton from "layout/HeaderButton";
import { colorset } from "utils/styles";
import storyblockLogo from "assets/storyblock-logo.png";
import search from "assets/search-black.svg";

const Header: React.FC = () => {
  const [selected, setSelected] = useState("/");
  const { pathname } = useLocation();

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
              style={{
                background: selected === "/" ? colorset.primary : undefined,
              }}
            >
              HOME
            </HeaderButton>
            <HeaderButton
              style={{
                background: selected === "/list" ? colorset.primary : undefined,
              }}
            >
              LIST
            </HeaderButton>
            <HeaderButton
              style={{
                background:
                  selected === "/history" ? colorset.primary : undefined,
              }}
            >
              HISTORY
            </HeaderButton>
            <HeaderButton
              style={{
                background:
                  selected === "/account" ? colorset.primary : undefined,
              }}
            >
              ACCOUNT
            </HeaderButton>
          </div>

          <img src={search} width="36px" />
        </ContentArea>
      </Area>
    </header>
  );
};

export default Header;
