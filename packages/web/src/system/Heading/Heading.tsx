import React from "react";

import StyledHeading from "./Heading.styles";

import { HeadingProps } from "./Heading.types";

const Heading = (props: HeadingProps) => {
  const {
    as = "h1",
    variant = "primary",
    size = "normal",
    children,
    className,
    disabled = false,
    fontSize = 24,
    fontWeight = 600,
    textAlign = "center",
  } = props;

  return (
    <StyledHeading
      as={as}
      variant={variant}
      size={size}
      className={className}
      disabled={disabled}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign={textAlign}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
