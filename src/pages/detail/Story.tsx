import React from "react";
import { colorset } from "utils/styles";
import FlexContainer from "components/FlexContainer";
import Text from "components/Text";
import { StoryState, storyState } from "utils/utils";
import iconX from "assets/icons/story-icon-x.png";
import iconV from "assets/icons/story-icon-v.png";
import iconW from "assets/icons/story-icon-wave.png";
import { Story as StoryType } from "utils/types";

interface StoryProps {
  type: StoryState;
  story: StoryType;
  height: number;
}

const Story: React.FC<StoryProps> = ({ type, story, height }) => {
  return (
    <FlexContainer
      style={{
        width: "220px",
        maxWidth: "220px",
        height: "100px",
        border: `1px solid #E9E9E9`,
        borderRadius: "20px",
        background:
          type === storyState.selected
            ? "#EFD6C2"
            : type === storyState.pending
            ? "#F7BFBF"
            : "#FFFFFF",
      }}
    >
      <FlexContainer
        justifyContent="center"
        alignItems="center"
        style={{
          height: "100px",
          aspectRatio: "1 / 1",
          borderRadius: "20px",
          background:
            type === storyState.selected
              ? "#EFB88B"
              : type === storyState.pending
              ? "#F79C9C"
              : "#E0E0E0",
        }}
      >
        <FlexContainer
          justifyContent="center"
          alignItems="center"
          style={{
            height: "60px",
            aspectRatio: "1 / 1",
            borderRadius: "30px",
            border: `2px solid ${colorset.white}`,
          }}
        >
          <img
            src={
              type === storyState.selected
                ? iconV
                : type === storyState.pending
                ? iconW
                : iconX
            }
          />
        </FlexContainer>
      </FlexContainer>

      <div style={{ flex: "1 1 0", padding: "15px", overflow: "auto" }}>
        <Text style={{ marginBottom: "10px" }}>EP {height}</Text>
        <Text
          size="ml"
          style={{
            marginBottom: "10px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {story.title.toLocaleUpperCase()}
        </Text>

        <Text
          size="xs"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {story.keplr}
        </Text>
      </div>
    </FlexContainer>
  );
};

export default Story;
