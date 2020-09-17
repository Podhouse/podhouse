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

import { SeparatorProps } from "./Separator.types";

const variants = variant({
  prop: "variant",
  scale: "separator",
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

const orientations = variant({
  prop: "orientation",
  variants: {
    horizontal: {
      width: "100%",
      height: "1px",
    },
    vertical: {
      width: "1px",
      height: "100%",
    },
  },
});

const StyledSeparator = styled.div<SeparatorProps>`
  outline: 0;
  ${padding};
  ${color};
  ${margin};
  ${layout};
  ${space};
  ${typography};
  ${variants};
  ${orientations};

  &:disabled {
    cursor: not-allowed;
  }
`;

export default StyledSeparator;
