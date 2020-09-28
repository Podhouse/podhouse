import React from "react";
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

    expect(getByText(/Totally yours/i)).toBeInTheDocument();
    expect(
      getByText(
        /Although there are some premium features planned, we will always be free. You won't need to pay anything in order to listen to your favorite podcasts with us/i,
      ),
    ).toBeInTheDocument();
    expect(getByText(/Get started/i)).toBeInTheDocument();
  });
});
