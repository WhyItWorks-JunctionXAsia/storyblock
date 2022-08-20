import Area from "components/Area";
import ContentArea from "components/ContentArea";
import Text from "components/Text";
import React from "react";
import MyStorySwiper from "./MyStorySwiper";

const MyStory: React.FC = () => {
  return (
    <>
      <Area>
        <ContentArea style={{ paddingTop: "50px" }}>
          <Text style={{ fontSize: "30px" }}>MY STORY</Text>

          <MyStorySwiper />
        </ContentArea>
      </Area>
    </>
  );
};

export default MyStory;
