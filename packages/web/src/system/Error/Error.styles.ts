import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

interface ErrorProps {
  mt?: number;
}

type Props = ErrorProps & StyleProps;

export const ErrorContainer = styled.div<Props>`
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: 1fr;
  grid-column-gap: 5px;
  align-items: center;
  justify-content: center;
  margin-top: ${({ mt }) => mt || 0}px;
`;

export const ErrorText = styled.p<Props>`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.error};
  outline: none;
`;
