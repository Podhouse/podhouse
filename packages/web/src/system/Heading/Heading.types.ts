export interface HeadingProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant: "primary" | "secondary" | "disabled";
  size: "small" | "normal" | "big";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  fontSize?: number;
  fontWeight?: 300 | 400 | 500 | 600;
  textAlign?: "start" | "center" | "end";
}
