import * as React from "react";
import { render } from "@testing-library/react";

import Brand from "./Brand";

import ThemeProvider from "src/system/ThemeProvider";

const withTheme = render(
  <ThemeProvider>
    <Brand />
  </ThemeProvider>,
);

describe("Brand", () => {
  it("should render correctly", async () => {
    const { getByText } = withTheme;

    expect(
      getByText(/Here you can find the Podhouse design assets/i),
    ).toBeInTheDocument();
    expect(
      getByText(
        /We take our design experience very seriously, our idea is to be a podcast app with a clean, beautiful, and simple experience. You can download our logo and badges here/i,
      ),
    ).toBeInTheDocument();
    expect(getByText(/Dark/i)).toBeInTheDocument();
    expect(getByText(/White/i)).toBeInTheDocument();
  });
});
