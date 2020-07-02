import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const PlayerContainer = styled.div<StyleProps>`
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 70px;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 14px 1fr;
  grid-column-gap: 20px;
  grid-area: "player";
  background: ${({ theme }) => theme.backgroundPrimary};
  box-sizing: border-box;
  cursor: pointer;
  padding-left: 30px;
  padding-right: 30px;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: auto;
    max-height: 140px;
    grid-row: 3 / 4;
    grid-column: 1 / 3;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    grid-template-rows: 1fr;
    grid-area: "player";
    padding: 20px 30px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
    background: ${({ theme }) => theme.backgroundPrimary};
    z-index: 1;
    cursor: default;
    position: inherit;
  }

  @media screen and (min-width: 1020px) {
    grid-template-columns: 0.9fr 1fr 0.9fr;
    grid-template-rows: 1fr;
    position: inherit;
  }
`;
