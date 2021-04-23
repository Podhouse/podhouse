import styled from "@emotion/styled";

export const FavoriteItemContainer = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 60px 1fr max-content;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  align-items: center;

  @media screen and (min-width: 800px) {
    grid-template-columns:
      60px 1fr minmax(min-content, 90px) minmax(min-content, 90px)
      minmax(min-content, 90px) max-content max-content;
  }
`;

export const FavoriteDividerContainer = styled.div`
  grid-column: 1 / 8;
  grid-row: 2 / 3;
`;
