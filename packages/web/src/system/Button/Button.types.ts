export interface ButtonProps {
  type: "button" | "submit" | "reset";
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "ghost"
    | "disabled";
  size: "small" | "normal" | "big";
  className?: string;
  onClick?: any;
  isDisabled?: boolean;
  isLoading?: boolean;
  children: any;
  width?: any;
  height?: any;
}
