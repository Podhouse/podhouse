export interface ButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: any;
  submitting?: boolean;
  disabled?: boolean;
  width?: number;
  height?: number;
  bgColor?: string;
  color?: string;
  children?: any;
}
