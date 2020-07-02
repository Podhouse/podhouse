import * as React from "react";
import { render } from "@testing-library/react";

import Footer from "./Footer";

import ThemeProvider from "src/system/ThemeProvider";

const withTheme = render(
  <ThemeProvider>
    <Footer />
  </ThemeProvider>,
);

describe("Footer", () => {
  it("should render correctly", async () => {
    const { getByText } = withTheme;

    expect(getByText(/About/i)).toBeInTheDocument();
    expect(getByText(/Advertisers/i)).toBeInTheDocument();
    expect(getByText(/Brand/i)).toBeInTheDocument();
    expect(getByText(/Contact/i)).toBeInTheDocument();
    expect(
      getByText(/2020 Podhouse. All rights reserved/i),
    ).toBeInTheDocument();
  });
});
