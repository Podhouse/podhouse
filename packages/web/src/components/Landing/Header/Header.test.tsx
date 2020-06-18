import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Header from "./Header";

import { theme } from "../../../system/theme";

const withTheme = render(
  <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>,
);

describe("Header", () => {
  it("should render correctly", async () => {
    const { getByText } = withTheme;

    expect(getByText(/About/i)).toBeInTheDocument();
    expect(getByText(/Advertise/i)).toBeInTheDocument();
    expect(getByText(/Brand/i)).toBeInTheDocument();
    expect(getByText(/Contact/i)).toBeInTheDocument();
    expect(getByText(/Get started/i)).toBeInTheDocument();
  });
});
