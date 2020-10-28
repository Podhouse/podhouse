import React from "react";
import { useSeparator } from "@react-aria/separator";

import StyledSeparator from "./Separator.styles";

import { SeparatorProps } from "./Separator.types";

const Separator = (props: SeparatorProps) => {
  const { separatorProps } = useSeparator(props);

  const {
    orientation = "horizontal",
    id,
    variant = "primary",
    isDisabled = false,
  } = props;

  return (
    <StyledSeparator
      orientation={orientation}
      id={id}
      variant={variant}
      isDisabled={isDisabled}
      {...separatorProps}
    />
  );
};

export default Separator;
