export interface StyleProps {
  primary: string;
  secondary: string;
  tertiary: string;
  bgPrimary: string;
  bgSecondary: string;
  bgTertiary: string;
  success: string;
  info: string;
  warning: string;
  error: string;
  buttons: {};
  inputs: {};
  labels: {};
  errors: {};
  select: {};
  selectvalues: {};
  links: {};
  paragraph: {};
}

const light: StyleProps = {
  primary: "#101010",
  secondary: "#6F6F6F",
  tertiary: "#E7E7E7",
  bgPrimary: "#FFFFFF",
  bgSecondary: "#F3F3F3",
  bgTertiary: "#F3F3F3",
  success: "#2BC454",
  info: "#2B60FF",
  warning: "#FF9F1C",
  error: "#DD0426",
  buttons: {
    primary: {
      color: "#FFFFFF",
      backgroundColor: "#101010",
    },
    secondary: {
      color: "#101010",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    info: {
      color: "#FFFFFF",
      backgroundColor: "#2B60FF",
    },
    success: {
      color: "#FFFFFF",
      backgroundColor: "#2BC454",
    },
    warning: {
      color: "#FFFFFF",
      backgroundColor: "#FF9F1C",
    },
    error: {
      color: "#FFFFFF",
      backgroundColor: "#DD0426",
    },
    ghost: {
      color: "#101010",
      background: "none",
      backgroundColor: "none",
    },
    disabled: {
      color: "#B7B7B7",
      backgroundColor: "#F3F3F3",
      cursor: "not-allowed",
    },
  },
  inputs: {
    primary: {
      color: "#6F6F6F",
      backgroundColor: "#F3F3F3",
      lineHeight: "129.02%",
    },
    secondary: {
      color: "#6F6F6F",
      backgroundColor: "#FFFFFF",
      border: "1px solid #101010",
    },
    disabled: {
      color: "#6F6F6F",
      backgroundColor: "#F3F3F3",
      cursor: "not-allowed",
    },
  },
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
  errors: {
    primary: {
      color: "#DD0426",
    },
  },
  select: {
    primary: {
      color: "#6F6F6F",
      backgroundColor: "#F3F3F3",
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
  selectvalues: {
    primary: {
      color: "#6F6F6F",
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
  links: {
    primary: {
      color: "#101010",
      cursor: "pointer",
    },
    secondary: {
      color: "#6F6F6F",
      cursor: "pointer",
      "&:hover": {
        color: "#101010",
      },
      "&:focus": {
        color: "#101010",
      },
    },
    disabled: {
      color: "#B7B7B7",
      cursor: "not-allowed",
    },
  },
  paragraph: {
    primary: {
      color: "#101010",
    },
    secondary: {
      color: "#6F6F6F",
    },
    disabled: {
      color: "#B7B7B7",
    },
  },
};

const dark: StyleProps = {
  primary: "#FFFFFF",
  secondary: "#B7B7B7",
  tertiary: "#E7E7E7",
  bgPrimary: "#151419",
  bgSecondary: "#1A1C20",
  bgTertiary: "#212128",
  success: "#2BC454",
  info: "#2B60FF",
  warning: "#FF9F1C",
  error: "#DD0426",
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
    success: {
      color: "#FFFFFF",
      backgroundColor: "#2BC454",
    },
    warning: {
      color: "#FFFFFF",
      backgroundColor: "#FF9F1C",
    },
    error: {
      color: "#FFFFFF",
      backgroundColor: "#DD0426",
    },
    ghost: {
      color: "#FFFFFF",
      background: "none",
      backgroundColor: "none",
    },
    disabled: {
      color: "#B7B7B7",
      backgroundColor: "#F3F3F3",
      cursor: "not-allowed",
    },
  },
  inputs: {
    primary: {
      color: "#B7B7B7",
      backgroundColor: "#212128",
    },
    secondary: {
      color: "#B7B7B7",
      backgroundColor: "#151419",
      border: "1px solid #FFFFFF",
    },
    disabled: {
      color: "#B7B7B7",
      backgroundColor: "#212128",
      cursor: "not-allowed",
    },
  },
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
  errors: {
    primary: {
      color: "#DD0426",
    },
  },
  select: {
    primary: {
      color: "#B7B7B7",
      backgroundColor: "#212128",
    },
    secondary: {
      color: "#B7B7B7",
      backgroundColor: "#151419",
      border: "1px solid #FFFFFF",
    },
    disabled: {
      color: "#B7B7B7",
      backgroundColor: "#212128",
      cursor: "not-allowed",
    },
  },
  selectvalues: {
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
  paragraph: {
    primary: {
      color: "#FFFFFF",
    },
    secondary: {
      color: "#B7B7B7",
    },
    disabled: {
      color: "#B7B7B7",
    },
  },
};

const theme = (mode: any) => (mode === "dark" ? dark : light);

export default theme;
