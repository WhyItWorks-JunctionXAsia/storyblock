import React, { useRef } from "react";
import PopUpContainer, { PopUpProps } from "./PopUpContainer";
import Text from "./Text";
import TextField from "./TextField";

const NewStoryPopUp: React.FC<PopUpProps> = ({ open, onClose }) => {
  const titleRef = useRef<HTMLInputElement>(null);

  return (
    <PopUpContainer open={open} onClose={onClose}>
      <Text size="lg" textAlign="center" style={{ marginBottom: "30px" }}>
        WRITE NEW STORY
      </Text>

      <Text style={{ marginBottom: "10px" }}>TITLE</Text>
      <TextField
        htmlRef={titleRef}
        type="text"
        containerStyle={{ marginBottom: "" }}
      />

      <Text style={{ marginBottom: "10px" }}>CONTENT</Text>
    </PopUpContainer>
  );
};

export default NewStoryPopUp;
