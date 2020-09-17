import React from "react";
import { useLink } from "@react-aria/link";

import StyledLink from "./Link.styles";

import { LinkProps } from "./Link.types";

const Link = (props: LinkProps) => {
  const ref = React.useRef();

  const { linkProps } = useLink(props, ref);

  const {
    href,
    target = "_self",
    variant = "secondary",
    size = "normal",
    isDisabled = false,
    rel,
    download = false,
    children,
  } = props;

  const checkVariant = isDisabled ? "disabled" : variant;

  return (
    <StyledLink
      href={href}
      variant={checkVariant}
      size={size}
      target={target}
      isDisabled={isDisabled}
      rel={rel}
      download={download}
      ref={ref}
      {...linkProps}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
