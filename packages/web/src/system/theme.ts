const light = {
  primary: "#101010",
  secondary: "#6F6F6F",
  tertiary: "#B7B7B7",
  backgroundPrimary: "#FFFFFF",
  backgroundSecondary: "#F3F3F3",
  backgroundTertiary: "#FFFFFF",
  info: "#2B60FF",
  warning: "#FFBC05",
  success: "#2BC454",
  error: "#F93650",
};

const dark = {
  primary: "#FFFFFF",
  secondary: "#FFFFFF",
  tertiary: "#B7B7B7",
  backgroundPrimary: "#0F0E15",
  backgroundSecondary: "#212128",
  backgroundTertiary: "#151419",
  info: "#2B60FF",
  warning: "#FFBC05",
  success: "#2BC454",
  error: "#F93650",
};

const theme = (mode) => (mode === "dark" ? dark : light);

export default theme;
