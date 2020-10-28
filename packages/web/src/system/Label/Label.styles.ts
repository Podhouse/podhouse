import styled from "@emotion/styled";
import { padding, color, margin, layout, space, variant } from "styled-system";

import { LabelProps } from "./Label.types";

const variants = variant({
  prop: "variant",
  scale: "labels",
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
      fontSize: 12,
      fontWeight: 400,
    },
    normal: {
      fontSize: 14,
      fontWeight: 400,
    },
    big: {
      fontSize: 16,
      fontWeight: 500,
    },
  },
});

const StyledLabel = styled.label<LabelProps>`
  margin: 0;
  outline: none;
  font-family: Inter;
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

export default StyledLabel;
