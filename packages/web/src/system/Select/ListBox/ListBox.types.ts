import { SelectState } from "@react-stately/select";

export interface ListBoxProps {
  state: SelectState<object>;
  variant: "primary" | "secondary" | "disabled";
  size: "small" | "normal" | "big";
  autoFocus: "first" | "last" | boolean;
  disallowEmptySelection: boolean;
  children: any;
}
