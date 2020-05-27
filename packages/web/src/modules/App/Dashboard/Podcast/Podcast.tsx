import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

import PodcastItem from "../../../../components/Podcast/PodcastItem/PodcastItem";

import Button from "../../../../system/Button/Button";

import {
  PodcastContainer,
  PodcastHeader,
  PodcastAvatar,
  PodcastDetailsContainer,
  PodcastPageTitle,
  PodcastName,
  PodcastProdName,
  PodcastDescription,
  PodcastButtonsContainer,
  PodcastShareButton,
  PodcastItemsContainer,
} from "./Podcast.styles";

const podcast = {
  name: "99% Invisible",
  episode: "387 - The Worst Video Game Ever",
  avatar:
    "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
};

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

const Podcast = () => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <PodcastContainer>
      <PodcastHeader>
        <PodcastAvatar avatar={avatar} />

        <PodcastDetailsContainer>
          <PodcastPageTitle>PODCAST</PodcastPageTitle>
          <PodcastName>99% Invisible</PodcastName>
          <PodcastProdName>NPR</PodcastProdName>
          <PodcastDescription>
            Design is everywhere in our lives, perhaps most importantly in the
            places where we've just stopped noticing. 99% Invisible is a weekly
            exploration of the process and power of design and architecture.
            From award winning producer Roman Mars. Learn more at
            99percentinvisible.org. A proud member of Radiotopia, from PRX.
            Learn more at radiotopia.fm.
          </PodcastDescription>
        </PodcastDetailsContainer>

        <PodcastButtonsContainer>
          <Button type="button" width={200}>
            Subscribe
          </Button>
          <PodcastShareButton>
            <FontAwesomeIcon icon={faShare} size="1x" color="#000" />
            Share
          </PodcastShareButton>
        </PodcastButtonsContainer>
      </PodcastHeader>

      <PodcastItemsContainer>
        <PodcastItem podcast={podcast} />
        <PodcastItem podcast={podcast} />
        <PodcastItem podcast={podcast} />
        <PodcastItem podcast={podcast} />
        <PodcastItem podcast={podcast} />
        <PodcastItem podcast={podcast} />
        <PodcastItem podcast={podcast} />
        <PodcastItem podcast={podcast} />
        <PodcastItem podcast={podcast} />
        <PodcastItem podcast={podcast} />
        <PodcastItem podcast={podcast} />
        <PodcastItem podcast={podcast} />
        <PodcastItem podcast={podcast} />
        <PodcastItem podcast={podcast} />
        <PodcastItem podcast={podcast} />
        <PodcastItem podcast={podcast} />
      </PodcastItemsContainer>
    </PodcastContainer>
  </Scrollbars>
);

export default Podcast;
