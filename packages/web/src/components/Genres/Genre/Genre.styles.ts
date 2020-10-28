import styled from "@emotion/styled";

import Heading from "src/system/Heading/Heading";

import { StyleProps } from "src/system/styles.types";

export const GenreContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
`;

export const GenreAvatar = styled.div<StyleProps>`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  display: grid;
  grid-template-rows: 0.5fr 0.5fr;
  grid-template-columns: 1fr;
  width: 140px;
  height: 140px;
  border-radius: 5px;
  cursor: pointer;
  background: ${({ theme }) => theme.bgSecondary};
  padding: 20px;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

export const GenreHeading = styled(Heading)`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
`;
