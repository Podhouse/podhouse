export interface TextareaProps {
  variant: "primary" | "secondary" | "disabled";
  scale: "small" | "normal" | "big";
  name: string;
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: any;
  onBlur?: any;
  onClick?: any;
  error: string | undefined;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  width?: number;
  height?: number;
}
