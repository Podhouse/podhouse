import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

export const DashboardContainer = styled(Box)`
  width: 100%;
  height: 100%;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  overflow: auto;
  padding: 0;
  margin: 0;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    overflow: auto;
    padding: 0;
    margin: 0;
  }
`;
