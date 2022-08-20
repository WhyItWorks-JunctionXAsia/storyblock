import React from "react";
import styled from "styled-components";
import MyStory from "./MyStory";

const BackgroundYellow = styled.div`
  position:absolute;
  top: 450px;,
  left: -10px;
  width: 100%;
  height: 963px;
  background: #FFF7F0 0% 0% no-repeat padding-box;
  transform: skew(0,-5deg);
  opacity: 0.7;
  z-index: -1;
`;

const BackgroundPink = styled.div`
  position:absolute;
  top: 1445px;,
  left: -5px;
  width: 100%;
  height: 963px;
  background: #F8CDE0 0% 0% no-repeat padding-box;
  transform: skew(0,6deg);
  opacity: 0.55;
  z-index: -1;
`;

const Background: React.FC = () => {
  return (
    <>
      <BackgroundYellow />
      <BackgroundPink />
    </>
  );
};

export default Background;
