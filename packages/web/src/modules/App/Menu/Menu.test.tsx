import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import App from "../App";
import Menu from "./Menu";

import { theme } from "../../../system/theme";

const withTheme = render(
  <ThemeProvider theme={theme}>
    <App>
      <Menu />
    </App>
  </ThemeProvider>,
);

describe("Menu", () => {
  it("should render correctly", async () => {
    const { getByText } = withTheme;

    expect(getByText("Browse")).toBeInTheDocument();
    expect(getByText("Podcasts")).toBeInTheDocument();
  });
});
