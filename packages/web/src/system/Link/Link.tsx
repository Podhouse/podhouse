import React, { useRef, forwardRef } from "react";
import { useLink } from "@react-aria/link";

import StyledLink from "./Link.styles";

import { LinkProps } from "./Link.types";

const Link = forwardRef((props: LinkProps, ref) => {
  const fallbackRef = useRef();
  const domRef: any = ref || fallbackRef;

  const { linkProps } = useLink(props, ref as any);

  const {
    href,
    id,
    target = "_self",
    variant = "secondary",
    size = "normal",
    isDisabled = false,
    rel,
    download = false,
    fontSize,
    fontWeight,
    onClick,
    children,
  } = props;

  const checkVariant = isDisabled ? "disabled" : variant;

  return (
    <StyledLink
      href={href}
      id={id}
      variant={checkVariant}
      size={size}
      target={target}
      isDisabled={isDisabled}
      rel={rel}
      download={download}
      fontSize={fontSize}
      fontWeight={fontWeight}
      onClick={onClick}
      ref={domRef}
      {...linkProps}
    >
      {children}
    </StyledLink>
  );
});

export default Link;
