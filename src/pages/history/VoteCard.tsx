import React, { useState } from "react";
import { colorset } from "utils/styles";
import Button from "components/Button";
import FlexContainer from "components/FlexContainer";
import Text from "components/Text";
import caretDown from "assets/icons/caret-down-filled.svg";
import caretUp from "assets/icons/caret-up-filled.svg";
import checkBlue from "assets/icons/check-blue.svg";
import coverSample from "assets/images/cover-sample.jpg";

const VoteCard: React.FC = () => {
  const [up, setUp] = useState(true);

  return (
    <FlexContainer
      gap="20px 20px"
      style={{
        padding: "30px",
        borderRadius: "25px",
        background: colorset.white,
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)",
      }}
    >
      <img
        src={coverSample}
        width="150px"
        height="150px"
        style={{ objectFit: "cover", objectPosition: "center center" }}
      />

      <div
        style={{
          position: "relative",
          flex: "1 1 0",
          overflow: "auto",
        }}
      >
        <Text
          size="lg"
          style={{
            display: "-webkit-box",
            marginBottom: "15px",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "2",
            lineClamp: "2",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          THE DEFINITION OF A POLITICAL TITLE CONTINUES SOMETHING
        </Text>
        <Text>RANK 5</Text>

        <FlexContainer alignItems="center">
          <img src={up ? caretUp : caretDown} width="20px" />
          <Text size="sm">3</Text>
        </FlexContainer>

        <Button
          hoverBackground="rgba(126, 146, 255, 0.15)"
          style={{
            position: "absolute",
            right: "0",
            bottom: "0",
            width: "110px",
            height: "40px",
            border: "1px solid #7E92FF",
            borderRadius: "20px",
            transition: "all 0.3s ease",
          }}
        >
          <FlexContainer
            justifyContent="center"
            alignItems="center"
            gap="8px 8px"
          >
            <Text color="#7E92FF">VOTE</Text>
            <img src={checkBlue} width="22px" />
          </FlexContainer>
        </Button>
      </div>
    </FlexContainer>
  );
};

export default VoteCard;
