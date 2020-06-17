import React from "react";
import Scrollbars from "react-custom-scrollbars";

import Button from "../../../system/Button/Button";

import EpisodeItem from "../../../components/Podcast/EpisodeItem/EpisodeItem";

import {
  PodcastContainer,
  PodcastHeader,
  PodcastAvatar,
  PodcastDetailsContainer,
  PodcastName,
  PodcastAuthor,
  PodcastDescription,
  PodcastSubscribeButtonContainer,
  PodcastEpisodesContainer,
} from "./Podcast.styles";

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

const episode = {
  avatar,
  name: "A Fantasy of Fashion: Articles of Interest #7",
  author: "99% Invisible",
  description:
    "In the wake of World War II, the government of France commissioned its most prominent designers to create a collection of miniature fashion dolls. It might seem like an odd thing to fund, but the fantasy of high fashion inspired hope in postwar Paris. These dolls also...",
  publishedDate: "May 12, 2020",
};

const Podcast = () => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <PodcastContainer>
      <PodcastHeader>
        <PodcastAvatar src={avatar} />

        <PodcastDetailsContainer>
          <PodcastName>99% Invisible</PodcastName>
          <PodcastAuthor>Roman Mars</PodcastAuthor>
          <PodcastDescription>
            Design is everywhere in our lives, perhaps most importantly in the
            places where we've just stopped noticing. 99% Invisible is a weekly
            exploration of the process and power of design and architecture.
            From award winning producer Roman Mars. Learn more at
            99percentinvisible.org. A proud member of Radiotopia, from PRX.
            Learn more at radiotopia.fm.
          </PodcastDescription>
        </PodcastDetailsContainer>

        <PodcastSubscribeButtonContainer>
          <Button type="button" width={200} height={40}>
            Subscribe
          </Button>
        </PodcastSubscribeButtonContainer>
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

export default Podcast;
