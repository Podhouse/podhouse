import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const ToggleWrapper = styled.div`
  position: relative;
`;

export const ToggleLabel = styled.label<StyleProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  height: 20px;
  border-radius: 15px;
  background: ${({ theme }) => theme.backgroundSecondary};
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    margin: 3px;
    background: ${({ theme }) => theme.backgroundSecondary};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
  }
`;

export const ToggleContainer = styled.input<StyleProps>`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  background: white;

  &:checked + ${ToggleLabel} {
    background: ${({ theme }) => theme.primary};

    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      margin-left: 27px;
      transition: 0.3s;
    }
  }
`;
