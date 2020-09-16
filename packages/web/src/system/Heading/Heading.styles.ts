import styled from "@emotion/styled";
import {
  padding,
  color,
  margin,
  typography,
  layout,
  space,
  variant,
} from "styled-system";

import { HeadingProps } from "./Heading.types";

const variants = variant({
  prop: "variant",
  scale: "heading",
  variants: {
    primary: {
      color: "primary",
    },
    secondary: {
      color: "secondary",
    },
    disabled: {
      color: "disabled",
    },
  },
});

const sizes = variant({
  prop: "size",
  variants: {
    small: {
      fontWeight: 500,
    },
    normal: {
      fontWeight: "bold",
    },
    big: {
      fontWeight: 500,
    },
  },
});

const StyledHeading = styled.div<HeadingProps>`
  width: auto;
  font-family: Inter;
  text-align: center;
  outline: 0;
  letter-spacing: -0.05em;
  background: none;
  background-color: none;
  border: none;
  cursor: default;
  ${padding};
  ${color};
  ${margin};
  ${layout};
  ${space};
  ${typography};
  ${variants};
  ${sizes};

  &:disabled {
    cursor: not-allowed;
  }
`;

export default StyledHeading;
