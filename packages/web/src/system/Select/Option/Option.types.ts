import { SelectState } from "@react-stately/select";

export interface OptionProps {
  state: SelectState<object>;
  item: any;
  variant: "primary" | "secondary" | "disabled";
  size: "small" | "normal" | "big";
}
