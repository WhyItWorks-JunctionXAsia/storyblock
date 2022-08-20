import styled from "styled-components";
import { colorset, fontFamily, fontSize } from "utils/styles";

const HeaderButton = styled.div<{ backgroundColor?: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 57px;
  border-radius: 28.5px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#F3F3F3"};
  font-family: ${fontFamily.jua};
  font-size: ${fontSize.lg};

  :hover {
    background-color: ${colorset.primary};
  }
`;

export default HeaderButton;
