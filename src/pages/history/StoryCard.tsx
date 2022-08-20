import React from "react";
import Button from "components/Button";
import FlexContainer from "components/FlexContainer";
import Text from "components/Text";
import { colorset } from "utils/styles";
import pencil from "assets/icons/pencil-fill.svg";
import coverSample from "assets/images/cover-sample.jpg";

interface StoryCardProps {
  current: boolean;
}

const StoryCard: React.FC<StoryCardProps> = ({ current }) => {
  return (
    <FlexContainer
      flexDirection="column"
      alignItems="center"
      style={{
        position: "relative",
        width: "500px",
        height: "430px",
        padding: "40px 0 30px 0",
        borderRadius: "30px",
        background: current
          ? "linear-gradient(#F2DCC6, #F7CCDE)"
          : colorset.background.lightGray,
        backgroundColor: current ? "#F5D3D4" : colorset.background.lightGray,
        transitionProperty: "background",
        transition: "all 0.5s ease",
      }}
    >
      <img
        src={coverSample}
        width="320px"
        height="320px"
        style={{
          marginBottom: "15px",
          objectFit: "cover",
          objectPosition: "center top",
          opacity: current ? 1 : 0.6,
        }}
      />

      <Text
        size="lg"
        color={current ? colorset.text : "#737373"}
        style={{
          maxWidth: "320px",
          marginBottom: "15px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        THE DEFINITION OF A POLITICAL TITLE CONTINUES SOMETHING
      </Text>

      <Button
        background={colorset.white}
        style={{
          position: "absolute",
          right: "40px",
          bottom: "30px",
          width: "120px",
          height: "50px",
          borderRadius: "25px",
        }}
      >
        <FlexContainer
          justifyContent="center"
          alignItems="center"
          gap="8px 8px"
        >
          <Text size="ml" color={current ? colorset.text : "#737373"}>
            WRITE
          </Text>
          <img
            src={pencil}
            width="20px"
            style={{
              opacity: current ? 1 : 0.6,
            }}
          />
        </FlexContainer>
      </Button>
    </FlexContainer>
  );
};

export default StoryCard;
