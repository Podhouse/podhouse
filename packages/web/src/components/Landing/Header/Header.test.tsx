import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

import ThemeProvider from "src/system/ThemeProvider";

const withTheme = render(
  <ThemeProvider>
    <Header />
  </ThemeProvider>,
);

describe("Header", () => {
  it("should render correctly", async () => {
    const { getByText } = withTheme;

    expect(getByText(/About/i)).toBeInTheDocument();
    expect(getByText(/Advertise/i)).toBeInTheDocument();
    expect(getByText(/Contact/i)).toBeInTheDocument();
    expect(getByText(/Get started/i)).toBeInTheDocument();
  });
});
