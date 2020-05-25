import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Newsletter from "./Newsletter";

import { theme } from "../../../system/theme";

const withTheme = render(
  <ThemeProvider theme={theme}>
    <Newsletter />
  </ThemeProvider>,
);

describe("Newsletter", () => {
  it("should render correctly", async () => {
    const { getByText } = withTheme;

    expect(getByText(/Sign up for news and updates/i)).toBeInTheDocument();
    expect(
      getByText(
        "Want to hear more news and updates about us? Sign up for our newsletter and we'll send you news and updates",
      ),
    ).toBeInTheDocument();
  });
});
