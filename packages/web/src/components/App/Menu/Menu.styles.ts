import styled from "@emotion/styled";

export const MenuContainer = styled.menu`
  width: 100%;
  height: 80px;
  bottom: 0px;
  position: fixed;
  z-index: 100;
  padding: 0;
  margin: 0;
  grid-column: 1 / 2;
  grid-row: 3 / 4;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr;
    grid-row-gap: 30px;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    position: inherit;
    z-index: 0;
    border-right: 1px solid #f3f3f3;
  }
`;

export const MenuLogoContainer = styled.div`
  display: none;

  @media screen and (min-width: 800px) {
    width: 100%;
    max-width: 230px;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    padding: 25px;
  }
`;

export const MenuNavigationContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  width: 100%;
  height: 100%;
  padding: 10px;

  @media screen and (min-width: 800px) {
    width: 100%;
    max-width: 230px;
    height: 100%;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;
