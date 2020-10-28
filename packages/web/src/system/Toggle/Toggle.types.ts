export interface ToggleProps {
  id: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}
