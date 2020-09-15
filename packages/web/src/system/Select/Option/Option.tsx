import React, { useRef } from "react";
import { useOption } from "@react-aria/listbox";
import { mergeProps } from "@react-aria/utils";
import { useFocus } from "@react-aria/interactions";

import StyledOption from "./Option.styles";

import { OptionProps } from "./Option.types";

const Option = ({ item, state, variant, size }: OptionProps) => {
  const ref = useRef();
  const isDisabled = state.disabledKeys.has(item.key);
  const isSelected = state.selectionManager.isSelected(item.key);
  const { optionProps } = useOption(
    {
      key: item.key,
      isDisabled,
      isSelected,
      shouldSelectOnPressUp: true,
      shouldFocusOnHover: true,
    },
    state,
    ref,
  );

  const [, setFocused] = React.useState(false);
  const { focusProps } = useFocus({ onFocusChange: setFocused });

  return (
    <StyledOption
      ref={ref}
      {...mergeProps(optionProps, focusProps)}
      variant={variant}
      size={size}
    >
      {item.rendered}
    </StyledOption>
  );
};

export default Option;
