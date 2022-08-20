import React from "react";
import Area from "components/Area";
import ContentArea from "components/ContentArea";
import Text from "components/Text";
import VoteCard from "./VoteCard";
import FlexContainer from "components/FlexContainer";
import Button from "components/Button";
import { colorset } from "utils/styles";

const MyVote: React.FC = () => {
  return (
    <Area>
      <ContentArea style={{ padding: "50px" }}>
        <Text style={{ marginBottom: "30px", fontSize: "30px" }}>MY VOTE</Text>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px 30px",
            marginBottom: "50px",
          }}
        >
          <VoteCard />
          <VoteCard />
          <VoteCard />
          <VoteCard />
        </div>

        <FlexContainer justifyContent="center">
          <Button
            style={{
              width: "120px",
              height: "50px",
              borderRadius: "25px",
              background: colorset.white,
            }}
          >
            <Text>MORE</Text>
          </Button>
        </FlexContainer>
      </ContentArea>
    </Area>
  );
};

export default MyVote;
