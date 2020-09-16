import React from "react";

import StyledParagraph from "./Paragraph.styles";

import { ParagraphProps } from "./Paragraph.types";

const Paragraph = (props: ParagraphProps) => {
  const {
    variant = "primary",
    size = "normal",
    children,
    className,
    disabled = false,
    textAlign = "center",
  } = props;

  return (
    <StyledParagraph
      variant={variant}
      size={size}
      className={className}
      disabled={disabled}
      textAlign={textAlign}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
