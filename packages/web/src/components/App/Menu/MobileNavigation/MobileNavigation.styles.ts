import styled from "@emotion/styled";

export const MobileNavigationContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 300px) {
    grid-column-gap: 20px;
  }

  @media screen and (min-width: 350px) {
    grid-column-gap: 25px;
  }
`;

export const MobileNavigationItemContainer = styled.div`
  width: 100%;
  max-width: fit-content;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
`;
