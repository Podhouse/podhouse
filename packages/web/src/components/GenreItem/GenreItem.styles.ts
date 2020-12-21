import styled from "@emotion/styled";
import { Heading } from "@chakra-ui/react";

export const GenreItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
`;

export const GenreItemInnerContainer = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  display: flex;
  width: 140px;
  height: 140px;
  border-radius: 5px;
  cursor: pointer;
  background: #101010;
  padding: 20px;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

export const GenreItemHeading = styled(Heading)`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  color: white;
`;
