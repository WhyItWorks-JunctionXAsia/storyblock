import React from "react";
import Story from "pages/detail/Story";
import StoryLine from "pages/detail/StoryLine";
import { Story as StoryType } from "utils/types";

interface StoryTreeProps {
  stories: StoryType[];
}

const StoryTree: React.FC<StoryTreeProps> = ({ stories }) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "30px 30px",
        }}
      >
        <Story type="pending" height={1} />
        <Story type="pending" height={1} />
      </div>

      <StoryLine upperline={[1, 1, null]} underline={[2, 0, null]} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "30px 30px",
        }}
      >
        <Story type="selected" height={1} />
        <Story type="failed" height={1} />
      </div>

      <StoryLine upperline={[2, 0, null]} underline={[0, 2, 0]} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "30px 30px",
        }}
      >
        <Story type="failed" height={1} />
        <Story type="selected" height={1} />
        <Story type="failed" height={1} />
      </div>
    </>
  );
};

export default StoryTree;
