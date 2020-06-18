import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import FAQ from "./FAQ";

import { theme } from "../../../system/theme";

const items = [
  {
    title: "What's the best thing about Podhouse?",
    body:
      "We're a free podcast app with the best user experience you might have. Our mission is to have a cleaner, robust, and simple experience for you to listen to your favorite podcasts.",
  },
  {
    title: "Why another podcast app?",
    body:
      "Our mission is to provide a podcast app where listeners can have a nice, clean, and intuitive experience.",
  },
  {
    title: "Is it free or do you I have to pay anything?",
    body:
      "We're a free podcast app. We'll launch some premium features in the future, but you don't need to worry, you will always be able to use without have to pay anything.",
  },
  {
    title: "Is Podhouse available in other platforms?",
    body:
      "Currently, we're only a web app, but it's already in the plan to make an iOS and Android versions of the app.",
  },
];

const withTheme = render(
  <ThemeProvider theme={theme}>
    <FAQ
      description="Here's some questions that you might have about us."
      items={items}
    />
  </ThemeProvider>,
);

describe("FAQ", () => {
  it("should render correctly", async () => {
    const { getByText } = withTheme;

    expect(getByText(/Frequently asked questions/i)).toBeInTheDocument();
    expect(
      getByText(/Here's some questions that you might have about us./i),
    ).toBeInTheDocument();
    expect(
      getByText(/What's the best thing about Podhouse?/i),
    ).toBeInTheDocument();
    expect(
      getByText(
        /We're a free podcast app with the best user experience you might have. Our mission is to have a cleaner, robust, and simple experience for you to listen to your favorite podcasts./i,
      ),
    ).toBeInTheDocument();
    expect(getByText(/Why another podcast app?/i)).toBeInTheDocument();
    expect(
      getByText(
        /Our mission is to provide a podcast app where listeners can have a nice, clean, and intuitive experience./i,
      ),
    ).toBeInTheDocument();
    expect(
      getByText(/Is it free or do you I have to pay anything?/i),
    ).toBeInTheDocument();
    expect(
      getByText(
        /We're a free podcast app. We'll launch some premium features in the future, but you don't need to worry, you will always be able to use without have to pay anything./i,
      ),
    ).toBeInTheDocument();
    expect(
      getByText(/Is Podhouse available in other platforms?/i),
    ).toBeInTheDocument();
    expect(
      getByText(
        /Currently, we're only a web app, but it's already in the plan to make an iOS and Android versions of the app./i,
      ),
    ).toBeInTheDocument();
  });
});
