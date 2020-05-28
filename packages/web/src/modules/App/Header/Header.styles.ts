import { styled } from "../../../system/theme";

export const HeaderContainer = styled.header`
  display: none;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
    display: grid;
    grid-area: header;
    grid-template-columns: 200px 1fr max-content;
    grid-template-rows: 1fr;
    grid-template-areas: "logo search settings";
    grid-column-gap: 30px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
    padding-left: 30px;
    padding-right: 30px;
    z-index: 1;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;
