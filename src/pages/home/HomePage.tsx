import React from "react";
import FlexContainer from "components/FlexContainer";
import HomeBanner from "./HomeBanner";

const HomePage: React.FC = () => {
  return(
      <FlexContainer flexDirection={"column"} >
        <HomeBanner/>
      </FlexContainer>
  );
};

export default HomePage;
