import Area from "components/Area";
import ContentArea from "components/ContentArea";
import React from "react";
import { colorset } from "utils/styles";
import storyblockLogo from "assets/storyblock-logo.png";

const Header: React.FC = () => {
  return (
    <header>
      <Area style={{ borderBottom: `1px solid ${colorset.line}` }}>
        <ContentArea
          style={{
            display: "flex",
            justifyContent: "justify-content",
            alignItems: "center",
          }}
        >
          <img src={storyblockLogo} />
        </ContentArea>
      </Area>
    </header>
  );
};

export default Header;
