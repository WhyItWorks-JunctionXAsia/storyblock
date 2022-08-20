import React from "react";
import MyStory from "pages/history/MyStory";
import HistoryBackground from "pages/history/HistoryBackground";
import MyVote from "pages/history/MyVote";

const HistoryPage: React.FC = () => {
  return (
    <>
      <HistoryBackground />
      <MyStory />
      <MyVote />
    </>
  );
};

export default HistoryPage;
