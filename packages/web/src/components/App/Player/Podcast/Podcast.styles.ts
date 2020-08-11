import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

interface PodcastAvatarProps {
  avatar: string;
}

export const PodcastContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-self: center;
  justify-self: center;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  z-index: 10;
  margin-left: 30px;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    margin: 0;
  }
`;

export const PodcastAvatar = styled.div<PodcastAvatarProps>`
  width: 40px;
  height: 40px;
  background-image: url(${({ avatar }) => avatar});
  background-size: cover;
  border-radius: 5px;
  align-self: center;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export const PodcastDetails = styled.div`
  display: none;

  .like-button {
    display: none;
  }

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: max-content 20px;
    grid-template-rows: max-content max-content;
    grid-gap: 10px;

    .like-button {
      display: block;
    }
  }
`;

export const PodcastEpisode = styled.a<StyleProps>`
  width: 100%;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  text-decoration: none;

  @media screen and (min-width: 800px) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
`;

export const PodcastName = styled.h1<StyleProps>`
  width: 100%;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.tertiary};
  cursor: pointer;

  @media screen and (min-width: 800px) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
`;

export const PodcastFavoriteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
`;
