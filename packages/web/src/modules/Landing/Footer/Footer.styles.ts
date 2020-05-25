import { styled } from "../../../system/theme";

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
  grid-template-columns: repeat(3, max-content);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  align-items: center;
  justify-content: center;
`;

export const FooterLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${({ theme }) => theme.colors.strongestGray};
  text-decoration: none;
  outline: none;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.black};
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

export const FooterBottomText = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: ${({ theme }) => theme.colors.strongestGray};
  justify-self: center;
`;
