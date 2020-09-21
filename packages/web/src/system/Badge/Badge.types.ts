export interface BadgeProps {
  variant:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "disabled";
  size: "small" | "normal" | "big";
  className?: string;
  onClick?: any;
  isDisabled?: boolean;
  children: any;
}
