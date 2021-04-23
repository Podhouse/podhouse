import styled from "@emotion/styled";
import { Button, Text } from "@chakra-ui/react";

export const FavoriteItemContainer = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 60px 1fr 80px;
  grid-column-gap: 20px;
  align-items: center;

  @media screen and (min-width: 800px) {
    grid-template-columns: 60px 1fr 60px 100px 100px 60px 80px;
  }
`;

export const FavoriteImageContainer = styled.div``;

export const FavoriteNameDescription = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 5px;
  grid-row: 1 / 2;
  grid-column: 1 / 4;

  @media screen and (min-width: 800px) {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
  }
`;

export const FavoriteItemName = styled(Text)`
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (min-width: 800px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

export const FavoriteItemDescription = styled(Text)`
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
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;

export const FavoriteItemPublishedDate = styled(Text)`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  display: -webkit-box;
  align-self: center;

  @media screen and (min-width: 800px) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    align-self: center;
  }
`;

export const FavoriteItemDuration = styled(Text)`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  align-self: center;
  justify-self: center;

  @media screen and (min-width: 800px) {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
    align-self: center;
  }
`;

export const FavoriteItemButton = styled(Button)`
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  align-self: center;
  justify-self: flex-end;

  @media screen and (min-width: 800px) {
    grid-column: 4 / 5;
    grid-row: 1 / 3;
    align-self: center;
  }
`;

export const FavoriteDividerContainer = styled.div`
  grid-column: 1 / 5;
  grid-row: 4 / 5;
`;
