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

import { LinkProps } from "./Link.types";

const variants = variant({
  prop: "variant",
  scale: "links",
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
      fontSize: 12,
      fontWeight: 400,
    },
    light: {
      fontSize: 14,
      fontWeight: 400,
    },
    normal: {
      fontSize: 14,
      fontWeight: 500,
    },
    big: {
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: "-0.03em",
    },
  },
});

const StyledLink = styled.a<LinkProps>`
  font-family: Inter;
  text-align: center;
  outline: 0;
  text-decoration: none;
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

export default StyledLink;
