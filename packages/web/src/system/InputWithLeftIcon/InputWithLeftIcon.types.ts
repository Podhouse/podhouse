export interface InputWithLeftIconProps {
  variant: "primary" | "secondary" | "disabled";
  scale: "small" | "normal" | "big";
  type: "text" | "search" | "url" | "tel" | "email" | "password";
  name: string;
  placeholder: string;
  value?: string;
  onChange?: any;
  onBlur?: any;
  onClick?: any;
  error: string | undefined;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
}
