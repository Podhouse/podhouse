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
  labels: {
    primary: {
      color: "#6F6F6F",
    },
    secondary: {
      color: "#B7B7B7",
    },
    disabled: {
      color: "#B7B7B7",
      cursor: "not-allowed",
    },
  },
  links: {
    primary: {
      color: "#101010",
      cursor: "pointer",
    },
    secondary: {
      color: "#B7B7B7",
      cursor: "pointer",
    },
    disabled: {
      color: "#B7B7B7",
      cursor: "not-allowed",
    },
  },
  buttons: {
    primary: {
      color: "#FFFFFF",
      backgroundColor: "#101010",
    },
    secondary: {
      color: "#101010",
      backgroundColor: "#FFFFFF",
      border: "1px solid #101010",
    },
    disabled: {
      color: "#B7B7B7",
      backgroundColor: "#F3F3F3",
      cursor: "not-allowed",
    },
  },
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
  labels: {
    primary: {
      color: "#B7B7B7",
    },
    secondary: {
      color: "#B7B7B7",
    },
    disabled: {
      color: "#B7B7B7",
      cursor: "not-allowed",
    },
  },
  links: {
    primary: {
      color: "#FFFFFF",
      cursor: "pointer",
    },
    secondary: {
      color: "#B7B7B7",
      cursor: "pointer",
    },
    disabled: {
      color: "#B7B7B7",
      cursor: "not-allowed",
    },
  },
  buttons: {
    primary: {
      color: "#101010",
      backgroundColor: "#FFFFFF",
    },
    secondary: {
      color: "#FFFFFF",
      backgroundColor: "0F0E15",
      border: "1px solid #FFFFFF",
    },
    disabled: {
      color: "#B7B7B7",
      backgroundColor: "#F3F3F3",
      cursor: "not-allowed",
    },
  },
};

const theme = (mode) => (mode === "dark" ? dark : light);

export default theme;
