import styled from "@emotion/styled";
import { Image, Button, Text } from "@chakra-ui/react";

export const EpisodeItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, max-content);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  @media screen and (min-width: 800px) {
    grid-template-columns: 80px 1fr minmax(min-content, 110px) minmax(
        min-content,
        50px
      );
    grid-template-rows: max-content max-content;
  }
`;

export const EpisodeItemAvatar = styled(Image)`
  display: none;

  @media screen and (min-width: 800px) {
    display: block;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const EpisodeItemName = styled(Text)`
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  cursor: pointer;
  text-decoration: none;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (min-width: 800px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;

export const EpisodeItemDescription = styled(Text)`
  width: 100%;
  grid-column: 1 / 4;
  grid-row: 2 / 3;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  align-self: center;
  @media screen and (min-width: 800px) {
    width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    align-self: center;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

export const EpisodeItemPublishedDate = styled(Text)`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  align-self: center;
  @media screen and (min-width: 800px) {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
    align-self: center;
  }
`;

export const EpisodeItemDuration = styled(Text)`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  align-self: center;
  justify-self: center;
  @media screen and (min-width: 800px) {
    grid-column: 4 / 5;
    grid-row: 1 / 3;
    align-self: center;
  }
`;

export const EpisodeItemButton = styled(Button)`
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  align-self: center;
  justify-self: flex-end;
  @media screen and (min-width: 800px) {
    grid-column: 5 / 6;
    grid-row: 1 / 3;
    align-self: center;
  }
`;
