import styled from "styled-components";

interface ButtonProps {
  background?: string;
  hoverBackground?: string;
}

const Button = styled.button<ButtonProps>`
  margin: 0;
  padding: 0;
  border: none;
  background: ${({ background }) => background || "transparent"};

  :hover {
    cursor: pointer;
    background: ${({ hoverBackground }) => hoverBackground || "transparent"};
  }
`;

export default Button;
