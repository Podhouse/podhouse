import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const StyledSelect = styled.select<StyleProps>`
  width: 100%;
  height: 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.bgSecondary};
  border: ${({ theme }) => `1px solid ${theme.bgSecondary}`};
  box-sizing: border-box;
  border-radius: 5px;
  text-indent: 20px;
  outline: none;
  letter-spacing: normal;
  word-spacing: normal;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  :-moz-placeholder {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.tertiary};
    text-indent: 20px;
  }
`;
