import React from "react";
import { render } from "@testing-library/react";

import Sponsorship from "./Sponsorship";

import ThemeProvider from "src/system/ThemeProvider";

const withTheme = render(
  <ThemeProvider>
    <Sponsorship />
  </ThemeProvider>,
);

describe("Sponsorship", () => {
  it("should render correctly", async () => {
    const { getByText } = withTheme;

    expect(getByText(/Reach highly engaged listeners/i)).toBeInTheDocument();
    expect(
      getByText(
        /Podcast listeners are very highly engaged, you can grow your audience by advertising with us/i,
      ),
    ).toBeInTheDocument();
  });
});
