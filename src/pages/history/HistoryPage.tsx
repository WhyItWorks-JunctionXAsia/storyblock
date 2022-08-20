import React from "react";
import MyStory from "pages/history/MyStory";
import Background from "pages/history/Background";
import MyVote from "pages/history/MyVote";

const HistoryPage: React.FC = () => {
  return (
    <>
      <Background />
      <MyStory />
      <MyVote />
    </>
  );
};

export default HistoryPage;
