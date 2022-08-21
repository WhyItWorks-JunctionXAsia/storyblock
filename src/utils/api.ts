import axios from "axios";
import { BASE_URL, GET_PORT, POST_PORT } from "utils/utils";
import { BookRegi, GetBooksResp, GetStoriesResp, StoryRegi } from "./types";

export const getBooks = async () => {
  try {
    const { data } = await axios.get<GetBooksResp>(
      `${BASE_URL}:${GET_PORT}/storyblock/storyblock/books`
    );

    return data;
  } catch (error) {}
};

export const postBook = async (bookData: BookRegi) => {
  try {
    await axios.post(`${BASE_URL}:${POST_PORT}`, bookData);
  } catch (error) {}
};

export const getStories = async (bookId: string) => {
  try {
    const { data } = await axios.get<GetStoriesResp>(
      `${BASE_URL}:${GET_PORT}/storyblock/storyblock/stories?bookId=${bookId}`
    );

    return data;
  } catch (error) {}
};

export const postStory = async (storyData: StoryRegi) => {
  try {
    await axios.post(`${BASE_URL}:${POST_PORT}`, storyData);
  } catch (error) {}
};
