import styled from "@emotion/styled";

export const PodcastItemWithDetailsContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 60px;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  justify-items: flex-start;
`;

export const PodcastItemWithDetailsAvatar = styled.img`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  cursor: pointer;
  object-fit: cover;
`;

export const PodcastItemInnerContainer = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 10px;
`;
