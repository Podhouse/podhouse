import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

type Props = StyleProps & {
  active: boolean;
};

export const RateModalContainer = styled.div<StyleProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 35px);
  grid-row-gap: 5px;
  align-items: center;
  justify-content: center;
  bottom: 80px;
  width: 70px;
  height: auto;
  padding-top: 5px;
  padding-bottom: 5px;
  background: ${({ theme }) => theme.bgPrimary};
  border-radius: 5px;
  right: 135px;
  position: absolute;
  align-self: flex-end;
  z-index: 2;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
`;

export const RateModalLinkContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ active, theme }) =>
    active ? theme.bgSecondary : theme.bgPrimary};
  color: ${({ active, theme }) => (active ? theme.primary : theme.secondary)};
  padding-left: 20px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.bgSecondary};
    color: ${({ theme }) => theme.primary};
  }
`;

export const RateModalLink = styled.a<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-decoration: none;
`;
