import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 30px;
  margin: 0 auto;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  grid-row-gap: 20px;
`;

export const ListHeader = styled.div`
  width: 100%;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  grid-template-rows: max-content max-content;
`;

export const ListSection = styled.div`
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
