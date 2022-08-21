import React from "react";
import styled from "styled-components";
import { fontFamily, fontSize, fontWeight } from "utils/styles";

const StyledTextArea = styled.textarea`
  word-break: keep-all;
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  resize: none;
  overflow: visible;
  font-family: ${fontFamily.jua};
  font-size: ${fontSize.m};
  font-weight: ${fontWeight.normal};
`;

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  htmlRef?: React.RefObject<HTMLTextAreaElement>;
  containerStyle?: React.CSSProperties;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  const { htmlRef, containerStyle, ...leftProps } = props;

  return (
    <div
      style={{
        height: "140px",
        padding: "14px",
        border: `1px solid #e9e9e9`,
        borderRadius: "4px",
        ...containerStyle,
      }}
    >
      <StyledTextArea ref={props.htmlRef} {...leftProps} />
    </div>
  );
};

export default TextArea;
