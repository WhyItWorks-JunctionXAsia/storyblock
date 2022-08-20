export const BASE_URL = "http://172.20.10.4";
export const RPC_PORT = 26657;
export const REST_PORT = 1317;

export type KeyUnion<T> = keyof T;

export const storyState = {
  failed: "failed",
  selected: "selected",
  pending: "pending",
} as const;
export type StoryState = KeyUnion<typeof storyState>;
