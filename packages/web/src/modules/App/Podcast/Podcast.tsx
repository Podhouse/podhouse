import * as React from "react";
import Scrollbars from "react-custom-scrollbars";
import { ExternalLink, Rss } from "react-feather";

import {
  PodcastContainer,
  PodcastHeader,
  PodcastAvatar,
  PodcastDetailsContainer,
  PodcastName,
  PodcastAuthor,
  PodcastDescription,
  PodcastButtonsContainer,
  PodcastEpisodesContainer,
  PodcastLinksContainer,
  PodcastLinkContainer,
  PodcastLink,
} from "./Podcast.styles";

import EpisodeItem from "src/components/Podcast/EpisodeItem/EpisodeItem";

import Button from "src/system/Button/Button";
import useTheme from "src/system/useTheme";

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

const episode = {
  avatar,
  name: "A Fantasy of Fashion: Articles of Interest #7",
  description:
    "In the wake of World War II, the government of France commissioned its most prominent designers to create a collection of miniature fashion dolls. It might seem like an odd thing to fund, but the fantasy of high fashion inspired hope in postwar Paris. These dolls also...",
  publishedDate: "May 12, 2020",
  duration: "39min",
};

const Podcast = () => {
  const themeState = useTheme();

  const iconColor = themeState.dark ? "#FFF" : "#B7B7B7";

  return (
    <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
      <PodcastContainer>
        <PodcastHeader>
          <PodcastAvatar src={avatar} />

          <PodcastDetailsContainer>
            <PodcastName>99% Invisible</PodcastName>
            <PodcastAuthor>Roman Mars</PodcastAuthor>
            <PodcastDescription>
              Design is everywhere in our lives, perhaps most importantly in the
              places where we've just stopped noticing. 99% Invisible is a
              weekly exploration of the process and power of design and
              architecture. From award winning producer Roman Mars. Learn more
              at 99percentinvisible.org. A proud member of Radiotopia, from PRX.
              Learn more at radiotopia.fm.
            </PodcastDescription>
          </PodcastDetailsContainer>

          <PodcastButtonsContainer>
            <Button type="button" width={200} height={40}>
              Subscribe
            </Button>
          </PodcastButtonsContainer>

          <PodcastLinksContainer>
            <PodcastLinkContainer>
              <ExternalLink size={16} strokeWidth={1} color={iconColor} />
              <PodcastLink
                href="mailto:leonardomso11@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </PodcastLink>
            </PodcastLinkContainer>

            <PodcastLinkContainer>
              <Rss size={16} strokeWidth={1} color={iconColor} />
              <PodcastLink
                href="mailto:leonardomso11@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSS
              </PodcastLink>
            </PodcastLinkContainer>
          </PodcastLinksContainer>
        </PodcastHeader>

        <PodcastEpisodesContainer>
          <EpisodeItem episode={episode} />
          <EpisodeItem episode={episode} />
          <EpisodeItem episode={episode} />
          <EpisodeItem episode={episode} />
          <EpisodeItem episode={episode} />
          <EpisodeItem episode={episode} />
          <EpisodeItem episode={episode} />
          <EpisodeItem episode={episode} />
        </PodcastEpisodesContainer>
      </PodcastContainer>
    </Scrollbars>
  );
};

export default Podcast;
