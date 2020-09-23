import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const PlansContainer = styled.div<StyleProps>`
  width: 100%;
  max-width: 800px;
  background: ${({ theme }) => theme.bgPrimary};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: max-content max-content;
  grid-column-gap: 10px;
`;

export const PlansHeader = styled.div<StyleProps>`
  grid-row: 1 / 2;
  grid-column: 1 / 7;
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.bgSecondary};
  border-radius: 5px 5px 0px 0px;
  display: grid;
  grid-template-columns: minmax(min-content, 180px) repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  padding-left: 25px;
  padding-right: 25px;
  align-items: center;
  justify-items: flex-start;
`;

export const PlansContent = styled.div<StyleProps>`
  grid-row: 2 / 3;
  grid-column: 1 / 7;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-column-gap: 10px;
`;

export const PlanRow = styled.div<StyleProps>`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.bgPrimary};
  display: grid;
  grid-template-columns: minmax(min-content, 180px) repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  padding-left: 25px;
  padding-right: 25px;
  align-items: center;
  justify-items: flex-start;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.bgSecondary};

    p {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
