import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const AuthModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 10;
  padding: 30px;
`;

export const AutoModalInsideContainer = styled.div<StyleProps>`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: auto;
  background: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 5px;
  position: absolute;
`;

export const AuthModalLinkContainer = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundPrimary};
  padding-left: 20px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.tertiary};

    a {
      color: ${({ theme }) => theme.primary};
      cursor: pointer;
    }
  }
`;

export const AuthModalLink = styled.a<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.tertiary};
  text-decoration: none;
`;
