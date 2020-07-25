import * as React from "react";
import { render } from "@testing-library/react";

import CallToAction from "./CallToAction";

import ThemeProvider from "src/system/ThemeProvider";

const withTheme = render(
  <ThemeProvider>
    <CallToAction />
  </ThemeProvider>,
);

describe("CallToAction", () => {
  it("should render correctly", async () => {
    const { getByText } = withTheme;

    expect(
      getByText(/Start listen to your favorite podcasts now/i),
    ).toBeInTheDocument();
    expect(
      getByText(
        /Try Podhouse now and listen to your podcasts freely, without having annoying ads, everywhere and anytime/i,
      ),
    ).toBeInTheDocument();
    expect(getByText(/Get started/i)).toBeInTheDocument();
  });
});
