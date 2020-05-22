import styled from "styled-components";

interface DashboardProps {}

export const DashboardContainer = styled.main<DashboardProps>`
  width: 100%;
  height: 100%;
  grid-row: 1 / 2;
  grid-column: 1 / 2;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }
`;
