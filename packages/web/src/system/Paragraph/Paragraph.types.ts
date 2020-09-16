export interface ParagraphProps {
  variant: "primary" | "secondary" | "disabled";
  size: "small" | "normal" | "big";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}
