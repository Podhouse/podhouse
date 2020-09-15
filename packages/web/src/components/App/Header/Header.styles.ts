import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const HeaderContainer = styled.header<StyleProps>`
  display: none;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
    display: grid;
    grid-area: header;
    grid-template-columns: 500px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "search settings";
    grid-column-gap: 30px;
    background: ${({ theme }) => theme.bgTertiary};
    border-bottom: ${({ theme }) => `1px solid ${theme.bgSecondary}`};
    padding-left: 30px;
    padding-right: 30px;
    z-index: 1;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;
