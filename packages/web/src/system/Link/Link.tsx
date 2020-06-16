import React from "react";

import StyledLink from "./Link.styles";

import { LinkProps } from "./Link.types";

const Link = ({ href, children }: LinkProps) => (
  <StyledLink href={href}>{children}</StyledLink>
);

export default Link;
