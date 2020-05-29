import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Controls from "./Controls/Controls";
import Podcast from "./Podcast/Podcast";
import Volume from "./Volume/Volume";

import { theme } from "../../../system/theme";

const currentPodcast = {
  avatar:
    "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  name: "WTF with Marc Maron",
  episode: "EP 928 - Trying to redesign this app",
};

const withTheme = render(
  <ThemeProvider theme={theme}>
    <Podcast currentPodcast={currentPodcast} />
    <Controls playing={false} />
    <Volume volume={100} mute={false} />
  </ThemeProvider>,
);

describe("Player", () => {
  it("should render correctly", async () => {
    const { getByText } = withTheme;

    expect(getByText(/WTF with Marc Maron/i)).toBeInTheDocument();
    expect(
      getByText(/EP 928 - Trying to redesign this app/i),
    ).toBeInTheDocument();
  });
});
