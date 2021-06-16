import styled from "@emotion/styled";

export const PodcastContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, max-content);
  grid-row-gap: 20px;
  padding: 20px;
  margin: 0 auto;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, max-content);
    grid-column-gap: 20px;
    padding: 20px;
  }
`;
