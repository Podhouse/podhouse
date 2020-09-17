export interface LinkProps {
  href: string;
  variant: "primary" | "secondary" | "disabled";
  size: "small" | "normal" | "big";
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
    | "noopener noreferrer"
    | "prev"
    | "search"
    | "tag";
  isDisabled?: boolean;
  download?: boolean;
}
