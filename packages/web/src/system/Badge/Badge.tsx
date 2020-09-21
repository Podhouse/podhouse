import React from "react";

import StyledBadge from "./Badge.styles";

import { BadgeProps } from "./Badge.types";

const Badge = (props: BadgeProps) => {
  const {
    variant = "primary",
    size = "normal",
    onClick,
    isDisabled = false,
    className,
    children,
  } = props;

  const checkVariant = isDisabled ? "disabled" : variant;

  return (
    <StyledBadge
      variant={checkVariant}
      size={size}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledBadge>
  );
};

export default Badge;
