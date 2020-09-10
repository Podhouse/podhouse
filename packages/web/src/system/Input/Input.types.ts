export interface InputProps {
  ref: any;
  type: string;
  name: string;
  placeholder: string;
  label?: string;
  onChange?: any;
  onBlur?: any;
  onClick?: any;
  error: string | undefined;
  variant: "primary" | "secondary" | "disabled";
  scale: "small" | "normal" | "big";
  ariaLabel: string;
  disabled?: boolean;
}
