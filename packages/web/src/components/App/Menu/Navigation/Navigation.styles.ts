import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const NavigationContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  justify-self: center;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, max-content);
    grid-row-gap: 30px;

    .search,
    .settings {
      display: none;
    }
  }
`;

export const NavigationItemContainer = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 800px) {
    width: auto;
    height: auto;
    display: grid;
    grid-template-columns: max-content minmax(min-content, max-content);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    justify-self: flex-start;

    :hover {
      svg {
        stroke: ${({ theme }) => theme.primary};
      }

      a {
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`;

export const NavigationItemLink = styled.a<StyleProps>`
  display: none;

  @media screen and (min-width: 800px) {
    display: block;
    justify-self: flex-start;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: ${({ theme }) => theme.tertiary};
    text-decoration: none;
    cursor: pointer;
  }
`;
