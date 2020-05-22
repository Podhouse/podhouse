import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  colors: {
    white: "#FFFFFF",
    lighestGray: "#FAFAFA",
    lightGray: "#EAEAEA",
    midGray: "#999999",
    strongestGray: "#666666",
    success: "#27AE60",
    error: "#FC3D28",
    black: "#000000",
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
