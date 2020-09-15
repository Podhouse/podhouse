import styled from "@emotion/styled";
import { padding, color, margin, layout, space, variant } from "styled-system";

import { ButtonProps } from "./Button.types";

const variants = variant({
  prop: "variant",
  scale: "buttons",
  variants: {
    primary: {
      color: "primary",
      backgroundColor: "primary",
    },
    secondary: {
      color: "secondary",
      backgroundColor: "secondary",
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
      height: 30,
      fontWeight: 400,
      fontSize: 12,
    },
    normal: {
      height: 40,
      fontWeight: 500,
      fontSize: 14,
    },
    big: {
      height: 50,
      fontWeight: 500,
      fontSize: 16,
    },
  },
});

const StyledButton = styled.button<ButtonProps>`
  width: fit-content;
  padding-left: 15px;
  padding-right: 15px;
  border: none;
  border-radius: 5px;
  font-family: Inter;
  text-align: center;
  outline: 0;
  cursor: pointer;
  ${padding};
  ${color};
  ${margin};
  ${layout};
  ${space};
  ${variants};
  ${sizes};
`;

export default StyledButton;
