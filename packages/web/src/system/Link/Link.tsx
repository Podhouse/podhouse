import React from "react";

import StyledLink from "./Link.styles";

import { LinkProps } from "./Link.types";

const Link: React.FC<LinkProps> = ({ href, children }) => (
  <StyledLink href={href}>{children}</StyledLink>
);

export default Link;
