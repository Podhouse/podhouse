import { css } from "styled-components";

import { styled } from "../theme";

import { InputContainerProps, InputFieldProps } from "./Input.types";

export const InputContainer = styled.div<InputContainerProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputStyled = styled.input<InputFieldProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => height || 50}px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.grayFour};
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
  box-sizing: border-box;
  border-radius: 5px;
  text-indent: 20px;
  outline: none;
  letter-spacing: normal;
  word-spacing: normal;

  &:focus {
    border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  }

  ::-webkit-input-placeholder,
  ::-moz-placeholder,
  :-ms-input-placeholder,
  :-moz-placeholder,
  ::placeholder {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.grayThree};
    text-indent: 20px;
  }

  ${({ error }) =>
    error &&
    css`
      background: ${({ theme }) => theme.colors.white};
      border: ${({ theme }) => `1px solid ${theme.colors.error}`};
      box-sizing: border-box;
      border-radius: 5px;
      text-indent: 20px;

      &:hover {
        border: ${({ theme }) => `1px solid ${theme.colors.error}`};
        box-sizing: border-box;
        border-radius: 5px;
        text-indent: 20px;
      }
    `};
`;
