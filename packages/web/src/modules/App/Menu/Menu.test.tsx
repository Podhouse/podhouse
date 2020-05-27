import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import App from "../App";
import Menu from "./Menu";

import Provider from "../../../provider/index";

import { theme } from "../../../system/theme";

const withTheme = render(
  <ThemeProvider theme={theme}>
    <Provider>
      <App>
        <Menu />
      </App>
    </Provider>
  </ThemeProvider>,
);

describe("Menu", () => {
  it("should render correctly", async () => {
    const { getByText } = withTheme;

    expect(getByText("Browse")).toBeInTheDocument();
    expect(getByText("Podcasts")).toBeInTheDocument();
  });
});
