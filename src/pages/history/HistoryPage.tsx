import React from "react";
import HistoryBackground from "pages/history/HistoryBackground";
import MyStory from "pages/history/MyStory";
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
