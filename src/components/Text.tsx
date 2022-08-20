import styled from "styled-components";
import { Property } from "csstype";
import {
  colorset,
  fontFamily,
  FontFamily,
  fontSize,
  FontSize,
  fontWeight,
  FontWeight,
} from "utils/styles";

interface TextProps {
  font?: FontFamily;
  size?: FontSize;
  weight?: FontWeight;
  textAlign?: Property.TextAlign;
  color?: Property.Color;
  display?: Property.Display;
  defaultLineHeight?: boolean;
}

const Text = styled.p<TextProps>`
  display: ${({ display }) => display || "block"};
  word-break: keep-all;
  margin: 0px;
  text-align: ${({ textAlign }) => textAlign || "inherit"};
  color: ${({ color }) => color || colorset.text};
  font-family: ${({ font }) => (font ? fontFamily[font] : fontFamily.jua)};
  font-size: ${({ size }) => (size ? fontSize[size] : fontSize.m)};
  font-weight: ${({ weight }) =>
    weight ? fontWeight[weight] : fontWeight.normal};
`;

export default Text;
