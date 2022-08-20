import React from "react";
import Area from "components/Area";
import Button from "components/Button";
import ContentArea from "components/ContentArea";
import FlexContainer from "components/FlexContainer";
import Text from "components/Text";
import StoryTree from "pages/list/StoryTree";
import { colorset } from "utils/styles";
import pencil from "assets/icons/pencil-fill.svg";
import background from "assets/images/listpage-background.png";

const ListPage: React.FC = () => {
  return (
    <Area>
      <ContentArea
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          minHeight: "100vh",
          padding: "100px 0",
          backgroundImage: `url(${background})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat-y",
        }}
      >
        <div>
          <Text
            textAlign="center"
            style={{ marginBottom: "20px", fontSize: "40px" }}
          >
            A POLITICAL MARRIAGE
          </Text>
          <Text size="lg" textAlign="center" style={{ marginBottom: "80px" }}>
            STORY HEIGHT: 5
          </Text>

          <StoryTree />

          <FlexContainer
            justifyContent="flex-end"
            style={{ marginTop: "50px" }}
          >
            <Button
              style={{
                width: "110px",
                height: "40px",
                background: colorset.primary,
                borderRadius: "20px",
              }}
            >
              <FlexContainer
                justifyContent="center"
                alignItems="center"
                gap="5px 5px"
              >
                <Text>WRITE</Text>
                <img src={pencil} />
              </FlexContainer>
            </Button>
          </FlexContainer>
        </div>
      </ContentArea>
    </Area>
  );
};

export default ListPage;
