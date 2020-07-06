import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const PlayerContainer = styled.div<StyleProps>`
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 60px;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 14px 1fr;
  grid-column-gap: 20px;
  grid-area: "player";
  background: ${({ theme }) => theme.backgroundPrimary};
  box-sizing: border-box;
  cursor: pointer;
  padding: 0 30px 0 30px;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: auto;
    max-height: 140px;
    grid-row: 3 / 4;
    grid-column: 1 / 3;
    grid-template-columns: 1fr minmax(auto, 390px) 1fr;
    grid-template-rows: 1fr;
    grid-area: "player";
    padding: 15px 30px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
    background: ${({ theme }) => theme.backgroundPrimary};
    z-index: 1;
    cursor: default;
    position: inherit;
  }

  @media screen and (min-width: 1020px) {
    grid-template-columns: 1fr minmax(auto, 390px) 1fr;
    grid-template-rows: 1fr;
    position: inherit;
  }
`;
