import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    gap: 0;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    grid-template-columns: 2fr 1fr;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story divider divider'
      'main-story advertisement advertisement';
    grid-template-columns: 40fr 34fr 24fr;
    grid-template-rows: auto 16px auto;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-inline-end: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    padding-inline-start: 16px;
  }

  @media ${QUERIES.desktopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-inline-end: 16px;
    margin-top: -16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 16px;
    padding-top: 16px;

    &:last-child {
        border: revert;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.tabletAndUp} {
    padding-top: 32px;

    ${StoryList} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;

      & > * {
        border: revert;
        padding-bottom: revert;
        padding-top: revert;
      }
    }
  }

  @media ${QUERIES.desktopAndUp} {
    padding-top: 0;
    padding-inline-start: 16px;

    ${StoryList} {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, auto);
      gap: 16px;

      & > * {
        border-bottom: 1px solid var(--color-gray-300);
        padding-bottom: 16px;

        &:last-child {
            border: revert;
        }
      }
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.tabletAndUp} {
    padding-top: 32px;
  }

  @media ${QUERIES.desktopAndUp} {
    border-top: 1px solid var(--color-gray-300);
    margin-inline-start: 16px;
    padding-top: 16px;
  }
`;

export default MainStoryGrid;
