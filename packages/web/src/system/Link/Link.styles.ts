import styled from "@emotion/styled";
import { padding, color, margin, layout, space, variant } from "styled-system";

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
    normal: {
      fontSize: 14,
      fontWeight: 500,
    },
    big: {
      fontSize: 16,
      fontWeight: 600,
    },
  },
});

const StyledLink = styled.a<LinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  border: none;
  border-radius: 5px;
  font-family: Inter;
  text-align: center;
  outline: 0;
  text-decoration: none;
  ${padding};
  ${color};
  ${margin};
  ${layout};
  ${space};
  ${variants};
  ${sizes};

  &:disabled {
    cursor: not-allowed;
  }
`;

export default StyledLink;
