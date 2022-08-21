import React from "react";
import styled from "styled-components";
import { fontFamily, fontSize, fontWeight } from "utils/styles";

const StyledTextField = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  font-family: ${fontFamily.jua};
  font-size: ${fontSize.m};
  font-weight: ${fontWeight.normal};
`;

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlRef: React.RefObject<HTMLInputElement>;
  containerStyle?: React.CSSProperties;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const { htmlRef, containerStyle, ...leftProps } = props;

  return (
    <div
      style={{
        height: "45px",
        padding: "0 14px",
        border: "1px solid #e9e9e9",
        borderRadius: "4px",
        ...containerStyle,
      }}
    >
      <StyledTextField
        ref={htmlRef}
        {...{
          autoCapitalize: "off",
          autoCorrect: "off",
          autoComplete: "off",
          style: {
            width: "100%",
            height: "100%",
          },
          ...leftProps,
        }}
      />
    </div>
  );
};

export default TextField;
