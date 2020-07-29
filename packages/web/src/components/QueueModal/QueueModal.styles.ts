import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const QueueModalContainer = styled.div<StyleProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  grid-row-gap: 5px;
  align-items: center;
  justify-content: center;
  bottom: 80px;
  width: 400px;
  height: 280px;
  padding: 20px;
  background: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 5px;
  right: 30px;
  position: absolute;
  align-self: flex-end;
  z-index: 2;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
`;

export const QueueModalHeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  align-items: center;
`;

export const QueueModalHeaderText = styled.h3<StyleProps>`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.tertiary};
  justify-self: start;
`;

export const QueueModalHeaderButton = styled.button<StyleProps>`
  width: fit-content;
  height: fit-content;
  background: none;
  color: ${({ theme }) => theme.tertiary};
  border: none;
  cursor: pointer;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  outline: none;
  justify-self: end;
`;
