import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const ErrorPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
`;

export const ErrorPageInnerContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const ErrorPageTitle = styled.h1<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 55px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  align-self: center;
  justify-self: center;
`;

export const ErrorPageText = styled.h1<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 29px;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  align-self: center;
  justify-self: center;
`;

export const ErrorPageButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
