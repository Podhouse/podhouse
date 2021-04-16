import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { Heading, Button, Link, Image } from "@chakra-ui/react";
import { ExternalLink } from "react-feather";

import PodcastEpisodes from "./PodcastEpisodes/PodcastEpisodes";

import {
  PodcastContainer,
  PodcastHeader,
  PodcastDetailsContainer,
  PodcastDescription,
  PodcastButtonsContainer,
  PodcastLinksContainer,
  PodcastLinkContainer,
} from "./Podcast.styles";

const Podcast = () => {
  return (
    <Scrollbars
      onScrollFrame={() => {}}
      autoHide
      autoHideTimeout={100}
      autoHideDuration={100}
    >
      <PodcastContainer>
        <PodcastHeader>
          <Image
            src="https://bit.ly/sage-adebayo"
            objectFit="cover"
            borderRadius={5}
            maxWidth="200px"
            loading="lazy"
            justifySelf="center"
          />

          <PodcastDetailsContainer>
            <Heading
              as="h1"
              fontWeight="700"
              fontSize="36px"
              letterSpacing="-0.03em"
              textAlign="start"
            >
              Podcast
            </Heading>

            <Heading
              as="h2"
              fontSize="16px"
              fontWeight="500"
              letterSpacing="-0.03em"
              textAlign="start"
            >
              Podcast
            </Heading>

            <PodcastDescription
              text="Podcast"
              id="podcast-info-description"
              lines={3}
              ellipsis="..."
              moreText="Read more"
              className="custom-class"
              innerElement="p"
            />
          </PodcastDetailsContainer>

          <PodcastButtonsContainer>
            <Button type="button" width="100%">
              Subscribe
            </Button>
          </PodcastButtonsContainer>

          <PodcastLinksContainer>
            <PodcastLinkContainer>
              <Link href="/" isExternal>
                Website
              </Link>
              <ExternalLink size={14} />
            </PodcastLinkContainer>

            <PodcastLinkContainer>
              <Link href="/" isExternal>
                RSS
              </Link>
              <ExternalLink size={14} />
            </PodcastLinkContainer>
          </PodcastLinksContainer>
        </PodcastHeader>

        <PodcastEpisodes />
      </PodcastContainer>
    </Scrollbars>
  );
};

export default Podcast;
