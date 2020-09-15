import React from "react";
import { useLink } from "@react-aria/link";

import StyledLink from "./Link.styles";

import { LinkProps } from "./Link.types";

const Link = (props: LinkProps) => {
  const ref = React.useRef();
  const { linkProps } = useLink(props, ref);

  const { href, target, variant, size, disabled, rel, children } = props;

  return (
    <StyledLink
      {...linkProps}
      ref={ref}
      href={href}
      variant={variant}
      size={size}
      target={target}
      disabled={disabled}
      rel={rel}
      {...props}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
