export interface Book {
  creator: string;
  id: string;
  keplr: string;
  bookId: string;
  title: string;
  synopsis: string;
  createdAt: string;
}

export interface BookRegi {
  target: "Book";
  keplrAddress: string;
  bookId: string;
  title: string;
  synopsis: string;
  createdAt: string;
}

export interface Story {
  creator: string;
  id: string;
  keplr: string;
  storyId: string;
  bookId: string;
  prevStoryId: string;
  height: string;
  title: string;
  body: string;
  createdAt: string;
  voteStatus: string;
}

export interface StoryRegi {
  target: "Story";
  keplrAddress: string;
  storyId: string;
  bookId: string;
  prevStoryId: string;
  height: string;
  title: string;
  body: string;
  createdAt: string;
}

export interface GetStoriesResp {
  book: Book;
  Story: Story[];
}

export interface GetBooksResp {
  Book: Book[];
}

export interface Vote {
  creator: string;
  id: string;
  keplr: string;
  storyId: string;
  createdHeight: string;
}

export interface GetVotesResp {
  book: Book;
  Vote: Vote[];
}

export interface VoteRegi {
  target: "Vote";
  keplrAddress: string;
  storyId: string;
}
