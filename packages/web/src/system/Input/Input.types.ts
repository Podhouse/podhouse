export interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  label?: string;
  onChange?: any;
  onBlur?: any;
  onClick?: any;
  error: string | undefined;
  width?: number;
  height?: number;
  autoComplete?: "on" | "off";
}

export interface InputContainerProps {
  width?: number;
}

export interface InputFieldProps extends InputContainerProps {
  height?: number;
  error?: string | undefined;
}
