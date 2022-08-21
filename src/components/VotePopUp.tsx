import React from "react";

import FlexContainer from "components/FlexContainer";
import homeBanner from "assets/images/home-banner.png";
import Button from "./Button";
import styled from "styled-components";
import close from "assets/icons/close.svg";
import search from "../assets/icons/search-black.svg";
import Text from "./Text";
import { useAtom } from "jotai";
import { accountAddressAtom } from "../atom";
import { vote } from "utils/api";
import { Story } from "utils/types";
import PopUpContainer, { PopUpProps } from "./PopUpContainer";

const VoteTextArea = styled.div`
  flex-wrap: wrap;
  overflow-y: scroll;
  width: 95%;
  height: 300px;
  word-break: break-all;
  margin: 20px auto;

  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

interface VotePopUpProps extends PopUpProps {
  story: Story;
}

const VotePopUp: React.FC<VotePopUpProps> = ({ open, onClose, story }) => {
  const [accountAddress] = useAtom(accountAddressAtom);

  const handleVote = async () => {
    await vote({
      target: "Vote",
      keplrAddress: accountAddress || "",
      storyId: story.storyId,
    });
  };

  return (
    <PopUpContainer open={open} onClose={onClose}>
      <FlexContainer flexDirection={"column"} style={{ width: "700px" }}>
        <FlexContainer
          justifyContent={"space-between"}
          style={{
            background: "white",
            margin: "20px 10px ",
            height: "100px",
            width: "calc(100% - 20px)",
          }}
        >
          <FlexContainer
            justifyContent={"space-around"}
            flexDirection={"column"}
          >
            <Text style={{ fontSize: "40px" }}>{story.title}</Text>

            <Text size={"xl"}>{accountAddress?.substring(0, 15) + "..."}</Text>
          </FlexContainer>
          <Button>
            <img src={close} width="25px" />
          </Button>
        </FlexContainer>

        <FlexContainer
          style={{ background: "#FFF7F0" }}
          flexDirection={"column"}
        >
          <VoteTextArea>
            <Text size={"lg"}>
              {story.body}, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </VoteTextArea>
        </FlexContainer>

        <FlexContainer
          style={{ background: "white", margin: "10px " }}
          justifyContent={"center"}
        >
          <Button
            onClick={handleVote}
            background={"#7E92FF"}
            hoverBackground={"#8093e8"}
            style={{ borderRadius: "26px", height: "40px", width: "80px" }}
          >
            <Text color={"white"}>VOTE</Text>
          </Button>
        </FlexContainer>
      </FlexContainer>
    </PopUpContainer>
  );
};
export default VotePopUp;
