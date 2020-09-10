export interface ButtonProps {
  type: "button" | "submit" | "reset";
  variant: "primary" | "secondary";
  size: "small" | "normal" | "big";
  onClick?: any;
  submitting?: boolean;
  disabled?: boolean;
  children: any;
}
