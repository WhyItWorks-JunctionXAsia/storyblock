import React from "react";

import FlexContainer from "components/FlexContainer";
import homeBanner from "assets/images/home-banner.png"
import Button from "./Button";

const VoteStory: React.FC = () => {
    return (
        <FlexContainer flexDirection={"column"} style={{width:"1300px"}}>
            <FlexContainer></FlexContainer>
            <div style={{ scrollbarWidth:"none", overflowY:"scroll", width:"100%" , height:"930px"}}>
                dewdewdewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            </div>
            <FlexContainer>
                <Button>
                    vote
                </Button>
            </FlexContainer>
        </FlexContainer>
    );
};
export default VoteStory