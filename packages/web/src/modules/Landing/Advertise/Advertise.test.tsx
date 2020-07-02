import * as React from "react";
import { render } from "@testing-library/react";

import Advertise from "./Advertise";

import ThemeProvider from "src/system/ThemeProvider";

const withTheme = render(
  <ThemeProvider>
    <Advertise />
  </ThemeProvider>,
);

describe("Advertise", () => {
  it("should render correctly", async () => {
    const { getByText } = withTheme;

    expect(
      getByText(/Reach highly engaged podcast listeners with us/i),
    ).toBeInTheDocument();
    expect(
      getByText(
        /Podcast listeners are very highly engaged, you can grow your audience by advertising with us/i,
      ),
    ).toBeInTheDocument();
    expect(getByText("Our unique advertising plan")).toBeInTheDocument();
    expect(
      getByText(
        "Now that you know our monthly stats, check our unique advertising plan",
      ),
    ).toBeInTheDocument();
    expect(getByText("STANDARD")).toBeInTheDocument();
    expect(getByText("$499")).toBeInTheDocument();
    expect(getByText("/mo")).toBeInTheDocument();
    expect(
      getByText(
        "The right price for you pocket, get featured and increase your podcast listeners.",
      ),
    ).toBeInTheDocument();
    expect(getByText("Reach highly engaged listeners")).toBeInTheDocument();
    expect(getByText("30 days featured")).toBeInTheDocument();
    expect(getByText("Support by email")).toBeInTheDocument();
  });
});
