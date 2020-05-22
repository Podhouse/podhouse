import { styled } from "../../../system/theme";

export const MenuContainer = styled.aside`
  width: 100%;
  height: 70px;
  bottom: 0px;
  position: fixed;
  background: ${({ theme }) => theme.colors.white};
  z-index: 100;

  @media screen and (min-width: 800px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    width: 100%;
    height: 100%;
    position: inherit;
    z-index: 0;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  }
`;

export const MenuInsideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  padding-left: 30px;
  padding-right: 30px;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, max-content);
    grid-row-gap: 30px;
    padding: 30px 30px 0px 30px;
  }
`;
