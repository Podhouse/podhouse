import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  colors: {
    white: "#FFFFFF",
    grayOne: "#F3F3F3",
    grayTwo: "#E7E7E7",
    grayThree: "#B7B7B7",
    grayFour: "#6F6F6F",
    black: "#101010",
    lighestGray: "#FAFAFA",
    lightGray: "#EAEAEA",
    midGray: "#999999",
    strongestGray: "#666666",
    success: "#2B60FF",
    error: "#F93650",
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
