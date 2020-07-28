import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const SettingsContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  align-self: center;
  justify-self: center;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, max-content);
  grid-row-gap: 50px;
`;

export const SettingsItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  grid-row-gap: 20px;
`;

export const SettingsItemHeaderContainer = styled.div`
  width: 100%;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  grid-template-rows: max-content max-content;
`;

export const SettingsItemHeaderTitle = styled.h1<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.tertiary};
  align-self: center;
  justify-self: flex-start;
`;

export const SettingsItemHeaderBreakLine = styled.hr<StyleProps>`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  margin: 0;
  border: none;
`;

export const SettingsItemContentContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 20px;
`;
