import React from "react";
import { render } from "@testing-library/react";

import FAQ from "./FAQ";

import ThemeProvider from "src/system/ThemeProvider";

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
  <ThemeProvider>
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
      getByText(
        /Here's some questions about advertising in Podhouse that you might have/i,
      ),
    ).toBeInTheDocument();
    expect(
      getByText(/Can I advertise my product\/company?/i),
    ).toBeInTheDocument();
    expect(
      getByText(
        /Yes. We accept companies and products to run advertising with us as well./i,
      ),
    ).toBeInTheDocument();
    expect(getByText(/How are the metrics calculated?/i)).toBeInTheDocument();
    expect(
      getByText(
        /The performance of advertisings is updated daily. The performance of your ad is not guaranteed, it can vary over time and depends on the quality, content, and relevance of your ad./i,
      ),
    ).toBeInTheDocument();
    expect(getByText(/What are the terms of sale?/i)).toBeInTheDocument();
    expect(
      getByText(
        /After you purchase your ad, it will be approved in 24 hours. Ad text and images must be appropriate for a general audience of all ages./i,
      ),
    ).toBeInTheDocument();
  });
});
