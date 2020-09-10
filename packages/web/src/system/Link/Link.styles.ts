import styled from "@emotion/styled";
import { variant } from "styled-system";

import { LinkProps } from "./Link.types";

import { StyleProps } from "src/system/styles.types";

type Props = LinkProps & StyleProps;

const StyledLink = styled("a")<Props>(
  {
    outline: "none",
    textDecoration: "none",
  },
  variant({
    prop: "variant",
    scale: "links",
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
  }),
  variant({
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
  }),
);

export default StyledLink;
