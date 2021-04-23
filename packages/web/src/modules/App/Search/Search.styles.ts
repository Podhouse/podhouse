import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 30px;
  padding: 20px;
  margin: 0 auto;
`;

export const SearchSkeletonContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 30px;
  margin: 0 auto;
`;
