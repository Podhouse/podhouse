export interface ButtonProps {
  type: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | "disabled";
  size: "small" | "normal" | "big";
  onClick?: any;
  disabled?: boolean;
  children: any;
}
