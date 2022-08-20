import React from "react";
import Area from "components/Area";
import ContentArea from "components/ContentArea";
import Text from "components/Text";
import VoteCard from "./VoteCard";

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
          }}
        >
          <VoteCard />
          <VoteCard />
          <VoteCard />
          <VoteCard />
        </div>
      </ContentArea>
    </Area>
  );
};

export default MyVote;
