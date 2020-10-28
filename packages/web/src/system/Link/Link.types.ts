export interface LinkProps {
  href?: string;
  id?: string;
  variant: "primary" | "secondary" | "disabled";
  size: "small" | "light" | "normal" | "big";
  target?: "_blank" | "_self" | "_parent" | "_top" | "framename";
  children: React.ReactNode;
  rel?:
    | "alternate"
    | "author"
    | "bookmark"
    | "external"
    | "help"
    | "license"
    | "next"
    | "nofollow"
    | "noreferrer"
    | "noopener"
    | "prev"
    | "search"
    | "tag";
  isDisabled?: boolean;
  download?: boolean;
  fontSize?: any;
  fontWeight?: number;
  onClick?: any;
}
