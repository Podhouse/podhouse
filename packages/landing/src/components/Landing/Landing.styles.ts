import styled from "@emotion/styled";

export const LandingContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 120px;
  align-items: center;
  justify-items: center;
  padding: 20px;
  margin: 0 auto;
`;
