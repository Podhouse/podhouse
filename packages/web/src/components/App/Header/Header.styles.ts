import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

export const HeaderContainer = styled(Box)`
  display: none;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
    display: grid;
    grid-area: header;
    grid-template-columns: max-content 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    padding-left: 20px;
    padding-right: 20px;
    z-index: 1;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;

export const SkeletonContainer = styled.div`
  width: fit-content;
  height: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  justify-self: flex-end;
  justify-content: flex-end;
  align-items: center;
`;
