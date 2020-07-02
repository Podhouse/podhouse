import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const DashboardContainer = styled.main<StyleProps>`
  width: 100%;
  height: 100%;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  background: ${({ theme }) => theme.backgroundTertiary};

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    background: ${({ theme }) => theme.backgroundTertiary};
  }
`;
