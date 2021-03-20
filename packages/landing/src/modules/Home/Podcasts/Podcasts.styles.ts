import styled from "@emotion/styled";

export const PodcastsContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 25vmin);
  grid-template-rows: repeat(2, 25vmin);
  grid-gap: 30px;
  align-items: center;
  justify-content: center;
`;

export const PodcastPictureContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;

  img,
  source {
    border-radius: 5px;
  }
`;
