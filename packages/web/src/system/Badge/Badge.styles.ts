import styled from "@emotion/styled";
import { padding, color, margin, layout, space, variant } from "styled-system";

import { BadgeProps } from "./Badge.types";

const variants = variant({
  prop: "variant",
  scale: "badge",
  variants: {
    primary: {
      color: "primary",
      backgroundColor: "primary",
    },
    secondary: {
      color: "secondary",
      backgroundColor: "secondary",
    },
    info: {
      color: "info",
      backgroundColor: "info",
    },
    success: {
      color: "success",
      backgroundColor: "success",
    },
    warning: {
      color: "warning",
      backgroundColor: "warning",
    },
    error: {
      color: "error",
      backgroundColor: "error",
    },
    ghost: {
      color: "ghost",
      backgroundColor: "ghost",
    },
    disabled: {
      color: "disabled",
      backgroundColor: "disabled",
    },
  },
});

const sizes = variant({
  prop: "size",
  variants: {
    small: {
      height: 20,
      fontWeight: 300,
      fontSize: 12,
    },
    normal: {
      height: 22,
      fontWeight: 600,
      fontSize: 12,
    },
    big: {
      height: 30,
      fontWeight: 500,
      fontSize: 16,
    },
  },
});

const StyledBadge = styled.div<BadgeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  border-radius: 5px;
  font-family: Inter;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;
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

export default StyledBadge;
