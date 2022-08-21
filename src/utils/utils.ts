import { Story } from "./types";

export const BASE_URL = "http://172.20.10.12";
export const POST_PORT = 8000;
export const GET_PORT = 1317;

export type KeyUnion<T> = keyof T;

export const storyState = {
  failed: "failed",
  selected: "selected",
  pending: "pending",
} as const;
export type StoryState = KeyUnion<typeof storyState>;

export const heightCompare = (a: Story, b: Story) => {
  const heightA = Number(a.height);
  const heightB = Number(b.height);

  if (heightA < heightB) {
    return -1;
  } else if (heightA > heightB) {
    return 1;
  } else {
    return 0;
  }
};
