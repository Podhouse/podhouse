import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const ShortcutsModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 10;
  padding: 30px;
`;

export const ShortcutsModalInsideContainer = styled.div<StyleProps>`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: auto;
  background: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 5px;
  position: absolute;
  padding: 20px;
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-row-gap: 30px;
`;

export const ShortcutsModalTitle = styled.h1<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.primary};
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  align-self: center;
  justify-self: center;
`;

export const ShortcutItemsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 20px;
`;

export const ShortcutItemContainer = styled.div`
  width: 100%;
  max-width: 350px;
  justify-self: center;
  align-self: center;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`;

export const ShortcutItemText = styled.p<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.secondary};
  justify-self: start;
  align-self: center;
`;

export const ShortcutItemKey = styled.div<StyleProps>`
  width: fit-content;
  height: fit-content;
  padding: 3px 10px;
  color: ${({ theme }) => theme.tertiary};
  background: ${({ theme }) => theme.backgroundSecondary};
  border: ${({ theme }) => `1px solid ${theme.backgroundSecondary}`};
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
  border-radius: 3px;
  justify-self: end;
  align-self: center;
`;

export const ShortcutKeysContainer = styled.div`
  width: fit-content;
  height: auto;
  display: grid;
  grid-template-columns: max-content max-content max-content;
  grid-template-rows: 1fr;
  grid-column-gap: 5px;
  align-items: center;
  justify-self: end;
  align-self: center;
`;
