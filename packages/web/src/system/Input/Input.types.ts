import { StyleProps } from "src/system/styles.types";

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
  width?: number;
  height?: number;
  dataTestId?: string;
  autoComplete?: "on" | "off";
}

interface InputContainerProps {
  width?: number;
}

interface InputFieldProps extends InputContainerProps {
  height?: number;
  error?: string | undefined;
}

export type ContainerProps = InputContainerProps & StyleProps;

export type FieldProps = InputFieldProps & StyleProps;
