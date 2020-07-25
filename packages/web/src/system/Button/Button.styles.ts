import styled from "@emotion/styled";

import { ButtonProps } from "./Button.types";

import { StyleProps } from "src/system/styles.types";

type Props = ButtonProps & StyleProps;

const StyledButton = styled.button<Props>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => height || 50}px;
  background-color: ${({ theme, bgColor }) => bgColor || theme.primary};
  color: ${({ theme, color }) => color || theme.backgroundPrimary};
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
`;

export default StyledButton;
