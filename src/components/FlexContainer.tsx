import styled from "styled-components";
import { Property } from "csstype";

interface FlexContainerProps {
  flexDirection?: Property.FlexDirection;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  gap?: string;
}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  flex-wrap: wrap;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "normal")};
  gap: ${({ gap }) => (gap ? gap : null)};
`;

export default FlexContainer;
