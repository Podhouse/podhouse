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

    expect(getByText(/About/i)).toBeDefined();
    expect(getByText(/Advertisers/i)).toBeDefined();
    expect(getByText(/Brand/i)).toBeDefined();
    expect(getByText(/Contact/i)).toBeDefined();
    expect(getByText(/Sign in/i)).toBeDefined();
  });
});
