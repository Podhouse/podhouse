import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const FooterContainer = styled.footer`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, max-content);
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 400px) {
    grid-template-columns: repeat(4, max-content);
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
  }
`;

export const FooterLink = styled.a<StyleProps>`
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

export const FooterBrandsContainer = styled.div`
  width: 100%;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  align-items: center;
  justify-content: center;

  svg {
    :hover {
      stroke: black;
    }
  }
`;

export const FooterBottomText = styled.p<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: ${({ theme }) => theme.tertiary};
  justify-self: center;
`;
