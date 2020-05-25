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

    expect(getByText(/About/i)).toBeInTheDocument();
    expect(getByText(/Advertisers/i)).toBeInTheDocument();
    expect(getByText(/Brand/i)).toBeInTheDocument();
    expect(getByText(/Contact/i)).toBeInTheDocument();
    expect(
      getByText(/2020 Podhouse. All rights reserved/i),
    ).toBeInTheDocument();
  });
});
