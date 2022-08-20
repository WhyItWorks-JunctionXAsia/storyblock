import { KeyUnion } from "./utils";

export const colorset = {
  primary: "#F9EADC",
  text: "#000000",
  line: "#707070",
};

export const CONTENT_AREA_DESKTOP = "75%";
export const CONTENT_AREA_MOBILE = "92%";

export const fontFamily = {
  jua: "BMJUA",
} as const;

// px 사이즈는 브라우저 기본 설정이 16px일 때 기준
export const fontSize = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  m: "1rem", // 16px
  ml: "1.125rem", // 18px
  lg: "1.25rem", // 20px
  xl: "1.5rem", // 24px
} as const;

export const fontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
} as const;

export type FontFamily = KeyUnion<typeof fontFamily>;
export type FontSize = KeyUnion<typeof fontSize>;
export type FontWeight = KeyUnion<typeof fontWeight>;
