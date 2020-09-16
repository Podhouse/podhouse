import styled from "@emotion/styled";
import { padding, color, margin, layout, space, variant } from "styled-system";

import { ParagraphProps } from "./Paragraph.types";

const variants = variant({
  prop: "variant",
  scale: "paragraph",
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
      fontWeight: 300,
      fontSize: 12,
    },
    normal: {
      fontWeight: 400,
      fontSize: 14,
    },
    big: {
      fontWeight: 500,
      fontSize: 16,
    },
  },
});

const StyledParagraph = styled.p<ParagraphProps>`
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
  line-height: 25px;
  cursor: default;
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

export default StyledParagraph;
