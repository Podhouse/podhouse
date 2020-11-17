import styled from "@emotion/styled";

export const LandingContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  background-color: ${({ theme }) => theme.bgPrimary};
`;

export const LandingInnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 120px;
  align-items: center;
  justify-items: center;
  padding: 30px;
  background-color: ${({ theme }) => theme.bgPrimary};
`;

export const LandingChildrenContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 120px;
`;

export const LandingGridContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 30px;
  align-items: center;
  justify-items: center;
`;

export const LandingGridContentContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;
`;
