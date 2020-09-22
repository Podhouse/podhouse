import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const PlanContainer = styled.div<StyleProps>`
  width: 100%;
  height: fit-content;
  max-width: 800px;
  background-color: ${({ theme }) => theme.bgPrimary};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-gap: 30px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 30px;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 200px;
    grid-template-rows: max-content;
    grid-gap: 30px;
  }
`;

export const PlanHeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 10px;
  align-items: center;
  justify-items: flex-start;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: fit-content;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content;
    grid-row-gap: 10px;
    align-self: center;
  }
`;

export const PlanPriceContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content max-content;
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;

  @media screen and (min-width: 800px) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content;
    grid-row-gap: 20px;
  }
`;
