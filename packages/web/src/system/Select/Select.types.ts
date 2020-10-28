export interface SelectProps {
  id: string;
  label: string;
  name: string;
  onChange: (event: any) => any;
  children: any;
  variant: "primary" | "secondary" | "disabled";
  size: "small" | "normal" | "big";
  disabled?: boolean;
}
