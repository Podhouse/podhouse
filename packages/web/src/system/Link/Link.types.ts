export interface LinkProps {
  href: string;
  variant: "primary" | "secondary" | "disabled";
  size: "small" | "normal" | "big";
  target?: "_blank" | "_self" | "_parent" | "_top" | "framename";
  children: React.ReactNode;
  rel?: string;
  isDisabled?: boolean;
  download?: boolean;
}
