import styled from "@emotion/styled";

export const MenuContainer = styled.aside`
  width: 100%;
  height: 60px;
  bottom: 0px;
  position: fixed;
  background: #ffffff;
  z-index: 100;

  @media screen and (min-width: 800px) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    width: 100%;
    height: 100%;
    position: inherit;
    z-index: 0;
    background: #ffffff;
    border-right: 1px solid #f3f3f3;
  }
`;

export const MenuInsideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr 210px;
    grid-row-gap: 30px;
  }
`;

export const MenuLogoContainer = styled.div`
  display: none;

  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 30px 0 30px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

export const MenuAvatarContainer = styled.img`
  display: none;

  @media screen and (min-width: 800px) {
    display: block;
    cursor: pointer;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
`;
