import React from "react";
import Area from "components/Area";
import Button from "components/Button";
import ContentArea from "components/ContentArea";
import FlexContainer from "components/FlexContainer";
import Text from "components/Text";
import VoteCard from "pages/history/VoteCard";
import { colorset } from "utils/styles";

const MyVote: React.FC = () => {
  return (
    <Area>
      <ContentArea style={{ padding: "50px" }}>
        <Text style={{ marginBottom: "30px", fontSize: "30px" }}>MY VOTE</Text>-
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
            background={colorset.white}
            hoverBackground={colorset.primary}
            style={{
              width: "120px",
              height: "50px",
              borderRadius: "25px",
              transition: "all 0.3s ease",
            }}
          >
            <Text size="ml">MORE</Text>
          </Button>
        </FlexContainer>
      </ContentArea>
    </Area>
  );
};

export default MyVote;
