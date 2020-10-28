import styled from "@emotion/styled";

export const ChangelogContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 50px;
`;

export const ChangelogItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 20px;
  align-items: center;
  justify-items: flex-start;
`;
