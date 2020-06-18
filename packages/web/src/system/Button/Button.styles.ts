import { css } from "styled-components";

import { styled } from "src/system/theme";

import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => height || 50}px;
  background-color: ${({ theme, bgColor }) => bgColor || theme.colors.black};
  color: ${({ theme, color }) => color || theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  outline: none;

  ${({ submitting }) =>
    submitting &&
    css`
      background: ${({ theme }) => theme.colors.lightGray};
      cursor: not-allowed;
      outline: none;
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${({ theme }) => theme.colors.lightGray};
      cursor: not-allowed;
      outline: none;
    `};
`;

export default StyledButton;
