import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

const StyledLink = styled.a<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  outline: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
