import styled from "@emotion/styled";

export const PodcastsWithOnlyAvatarListContainer = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  grid-row-gap: 20px;
`;

export const PodcastsWithOnlyAvatarListHeader = styled.div`
  width: 100%;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  grid-template-rows: max-content max-content;
`;

export const PodcastsWithOnlyAvatarListSection = styled.div`
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
