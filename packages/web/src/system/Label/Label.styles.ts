import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

interface LabelProps {
  mb?: number;
}

type Props = LabelProps & StyleProps;

export const StyledLabel = styled.label<Props>`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: ${({ mb }) => mb}px;
  outline: none;
`;
