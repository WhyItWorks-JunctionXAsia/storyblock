import React, { useEffect, useState } from "react";
import Story from "pages/detail/Story";
import StoryLine from "pages/detail/StoryLine";
import { Story as StoryType, Vote } from "utils/types";
import { storyState } from "utils/utils";
import { getVotes } from "utils/api";
import FlexContainer from "components/FlexContainer";

interface StoryTreeProps {
  stories: StoryType[];
  rerender: () => void;
}

const StoryTree: React.FC<StoryTreeProps> = ({ stories, rerender }) => {
  const [votes, setVotes] = useState<Vote[]>([]);
  const [sortedStories, setSortedStories] = useState<Array<StoryType[]>>([]);

  useEffect(() => {
    const fetchVotes = async () => {
      const fetchedVotes = await getVotes("book_3");

      if (fetchedVotes) {
        setVotes(fetchedVotes.Vote);
      }
    };

    fetchVotes();
  }, []);

  useEffect(() => {
    const newSortedStories: Array<StoryType[]> = [];

    stories.forEach((story) => {
      const height = Number(story.height);

      if (newSortedStories[height]) {
        newSortedStories[height].push(story);
      } else {
        newSortedStories[height] = [story];
      }
    });

    setSortedStories(newSortedStories);
  }, [stories]);

  const getState = (stories: StoryType[]) => {
    if (Number(stories[0].height) === 0) {
      console.log([null, 2, null]);
      return [null, 2, null];
    }

    const result: (number | null)[] = [];

    stories.forEach((story) => {
      if (Number(story.height) === sortedStories.length - 1) {
        result.push(1);
      } else if (
        votes.findIndex((vote) => vote.storyId === story.storyId) !== -1
      ) {
        result.push(2);
      } else {
        result.push(0);
      }
    });

    while (result.length < 3) {
      result.push(null);
    }

    console.log(stories[0].height + result.toString());
    return result;
  };

  return (
    <FlexContainer flexDirection="column-reverse">
      {sortedStories.map((storiesWithSameHeight, height) => (
        <div key={height}>
          {/* 마지막에는 렌더링하지 않음 */}
          {height !== sortedStories.length - 1 ? (
            <StoryLine
              upperline={getState(sortedStories[height + 1])}
              underline={getState(storiesWithSameHeight)}
            />
          ) : null}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "30px 30px",
            }}
          >
            {height === 0 ? (
              <>
                <div />
                <Story
                  story={storiesWithSameHeight[0]}
                  type={storyState.selected}
                  height={0}
                  rerender={rerender}
                />
                <div />
              </>
            ) : (
              storiesWithSameHeight.map((story, index) => (
                <Story
                  story={story}
                  type={
                    votes.findIndex(
                      (vote) => vote.storyId === story.storyId
                    ) !== -1
                      ? storyState.selected
                      : height === sortedStories.length - 1
                      ? storyState.pending
                      : storyState.failed
                  }
                  height={height}
                  rerender={rerender}
                  key={index}
                />
              ))
            )}
          </div>
        </div>
      ))}
    </FlexContainer>
  );
};

export default StoryTree;
