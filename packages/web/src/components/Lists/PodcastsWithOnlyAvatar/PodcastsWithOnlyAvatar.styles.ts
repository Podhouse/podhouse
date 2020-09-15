import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const PodcastsWithOnlyAvatarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  grid-row-gap: 20px;
`;

export const PodcastsWithOnlyAvatarHeader = styled.div`
  width: 100%;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  grid-template-rows: max-content max-content;
`;

export const PodcastsWithOnlyAvatarHeaderTitle = styled.h1<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.tertiary};
  align-self: center;
  justify-self: flex-start;
`;

export const PodcastsWithOnlyAvatarBreakLine = styled.hr<StyleProps>`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.bgSecondary};
  margin: 0;
  border: none;
`;

export const PodcastsWithOnlyAvatarSection = styled.div`
  width: 100%;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: repeat(auto-fill, 140px);
  grid-gap: 20px;

  @media screen and (min-width: 500px) {
    justify-content: flex-start;
    grid-template-columns: repeat(auto-fill, 140px);
  }

  @media screen and (min-width: 800px) {
    justify-content: flex-start;
    grid-template-columns: repeat(auto-fill, 140px);
  }
`;
