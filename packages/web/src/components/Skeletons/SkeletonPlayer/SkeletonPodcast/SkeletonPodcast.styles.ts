import styled from "@emotion/styled";

export const SkeletonPodcastContainer = styled.div`
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
    align-self: center;
    justify-self: center;
    margin: 0;
  }
`;

export const SkeletonPodcastAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  align-self: center;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export const SkeletonPodcastDetails = styled.div`
  display: none;

  .like-button {
    display: none;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50px;
    justify-items: flex-start;
    justify-content: space-between;

    .like-button {
      display: block;
    }
  }
`;

export const SkeletonPodcastNameTitle = styled.div`
  width: 100%;
  max-width: 300px;
`;

export const SkeletonPodcastFavoriteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
`;
