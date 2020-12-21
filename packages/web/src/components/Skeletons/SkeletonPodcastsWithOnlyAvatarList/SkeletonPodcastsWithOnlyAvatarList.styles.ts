import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 20px;
`;

export const SkeletonPodcastsWithOnlyAvatarListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  grid-row-gap: 20px;
`;

export const SkeletonPodcastsWithOnlyAvatarListHeader = styled.div`
  width: 100%;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  grid-template-rows: max-content max-content;
`;

export const SkeletonPodcastsWithOnlyAvatarListSection = styled.div`
  width: 100%;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: repeat(auto-fill, 140px);
  grid-template-rows: repeat(auto-fill, 140px);
  grid-gap: 20px;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fill, 140px);
    grid-template-rows: repeat(auto-fill, 140px);
    grid-gap: 20px;
  }
`;
