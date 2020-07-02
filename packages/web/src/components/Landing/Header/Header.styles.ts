import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const HeaderContainer = styled.header`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: minmax(max-content, 1fr) minmax(max-content, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
  }
`;

export const HeaderLogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    cursor: pointer;
  }
`;

export const HeaderLinksContainer = styled.div`
  display: none;

  @media screen and (min-width: 800px) {
    width: auto;
    height: 100%;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: repeat(4, max-content);
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    align-items: center;
    justify-content: center;
    justify-self: center;
  }
`;

export const HeaderLink = styled.a<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${({ theme }) => theme.tertiary};
  text-decoration: none;
  outline: none;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const HeaderSignInContainer = styled.div`
  width: auto;
  height: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: flex-end;

  @media screen and (min-width: 800px) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    align-self: center;
    justify-self: flex-end;
  }
`;
