import React from "react";
import backgroundImage from "assets/images/listpage-background.png";
import FlexContainer from "components/FlexContainer";
import homeBanner from "assets/images/home-banner.png";

const HomeBanner: React.FC = () => {
  return (
    <FlexContainer flexDirection={"column"}>
      <img src={homeBanner} />
    </FlexContainer>
  );
};
export default HomeBanner;
