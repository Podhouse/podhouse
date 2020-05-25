import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Footer from "./Footer";

import { theme } from "../../../system/theme";

const withTheme = render(
  <ThemeProvider theme={theme}>
    <Footer />
  </ThemeProvider>,
);

describe("Footer", () => {
  it("should render correctly", async () => {
    const { getByText } = withTheme;

    expect(getByText(/About/i)).toBeDefined();
    expect(getByText(/Advertisers/i)).toBeDefined();
    expect(getByText(/Brand/i)).toBeDefined();
    expect(getByText(/Contact/i)).toBeDefined();
    expect(getByText(/2020 Podhouse. All rights reserved/i)).toBeDefined();
  });
});
