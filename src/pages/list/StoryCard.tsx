import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "components/Button";
import FlexContainer from "components/FlexContainer";
import Text from "components/Text";
import { coverSampleArray } from "types/constant";
import { colorset } from "utils/styles";

interface StoryCardProps {
  current: boolean;
  current_number: number;
}

const StoryCard: React.FC<StoryCardProps> = ({ current, current_number }) => {
  const navigate = useNavigate();

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
        src={coverSampleArray[current_number]}
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
        onClick={() => {
          navigate("/details");
        }}
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
        <Text size="ml" color={current ? colorset.text : "#737373"}>
          VIEW
        </Text>
      </Button>
    </FlexContainer>
  );
};

export default StoryCard;
