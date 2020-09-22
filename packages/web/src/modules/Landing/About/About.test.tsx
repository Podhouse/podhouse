import React from "react";
import { render } from "@testing-library/react";

import About from "./About";

import ThemeProvider from "src/system/ThemeProvider";

const withTheme = render(
  <ThemeProvider>
    <About />
  </ThemeProvider>,
);

describe("About", () => {
  it("should render correctly", async () => {
    const { getByText } = withTheme;

    expect(
      getByText("Our mission is to provide the best podcast experience"),
    ).toBeInTheDocument();
    expect(
      getByText(
        "We aim to provide the best podcast experience, that's why we created Podhouse, from podcast listeners for podcast listeners",
      ),
    ).toBeInTheDocument();
    expect(getByText("Leonardo Maldonado")).toBeInTheDocument();
    expect(getByText("@leonardomso")).toBeInTheDocument();
  });
});
