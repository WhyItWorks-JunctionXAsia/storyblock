import React from "react";

import FlexContainer from "components/FlexContainer";
import homeBanner from "assets/images/home-banner.png"
import Button from "./Button";
import styled from "styled-components";
import close from "assets/icons/close.svg"
import search from "../assets/icons/search-black.svg";


const VoteTextArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 800px;
  
  ::-webkit-scrollbar{
    display: none;
    width: 0;
  }
`;


const VoteStory: React.FC = () => {
    return (
        <FlexContainer flexDirection={"column"} style={{width:"700px"}}>
            <FlexContainer  justifyContent={"space-between"} style={{height:"150px" ,width:"100%"}}>
                <FlexContainer>

                </FlexContainer>
                <Button>
                    <img src={close} width="36px" />
                </Button>
            </FlexContainer>
            <VoteTextArea>
                dewdewdewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            </VoteTextArea>

            <FlexContainer justifyContent={"center"}>
                <Button>
                    vote
                </Button>
            </FlexContainer>
        </FlexContainer>
    );
};
export default VoteStory