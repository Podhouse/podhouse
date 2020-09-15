import React, { useRef } from "react";
import { useListBox } from "@react-aria/listbox";
import { mergeProps } from "@react-aria/utils";
import { FocusScope } from "@react-aria/focus";
import { useOverlay, DismissButton } from "@react-aria/overlays";

import StyledListBox from "./ListBox.styles";

import { ListBoxProps } from "./ListBox.types";

import Option from "../Option/Option";

const ListBox = (props: ListBoxProps) => {
  const ref = useRef();

  const { listBoxProps } = useListBox(props, props.state, ref);

  const {
    state,
    variant,
    size,
    autoFocus,
    disallowEmptySelection,
    ...otherProps
  } = props;

  const overlayRef = useRef();
  const { overlayProps } = useOverlay(
    {
      onClose: () => state.close(),
      shouldCloseOnBlur: true,
      isOpen: state.isOpen,
      isDismissable: true,
    },
    overlayRef,
  );

  return (
    <FocusScope restoreFocus>
      <div {...overlayProps} ref={overlayRef} style={{ width: "100%" }}>
        <DismissButton onDismiss={() => state.close()} />
        <StyledListBox
          variant={variant}
          {...mergeProps(listBoxProps, otherProps)}
          ref={ref}
        >
          {[...state.collection].map((item) => (
            <Option
              key={item.key}
              item={item}
              state={state}
              variant={variant}
              size={size}
            />
          ))}
        </StyledListBox>
        <DismissButton onDismiss={() => state.close()} />
      </div>
    </FocusScope>
  );
};

export default ListBox;
