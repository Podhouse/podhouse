import styled from "@emotion/styled";

export const SkeletonEpisodeContainer = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1000px;
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

export const SkeletonEpisodeAvatar = styled.div`
  display: none;

  @media screen and (min-width: 800px) {
    display: block;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    width: 80px;
    height: 80px;
  }
`;

export const SkeletonEpisodeName = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 2;

  @media screen and (min-width: 800px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;

export const SkeletonEpisodeDescription = styled.div`
  width: 100%;
  grid-column: 1 / 4;
  grid-row: 2 / 3;

  @media screen and (min-width: 800px) {
    width: 100%;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

export const SkeletonEpisodePublishedDate = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 4;

  @media screen and (min-width: 800px) {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
    align-self: center;
  }
`;

export const SkeletonEpisodeDuration = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;

  @media screen and (min-width: 800px) {
    grid-column: 4 / 5;
    grid-row: 1 / 3;
    align-self: center;
  }
`;

export const SkeletonEpisodeButton = styled.div`
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
