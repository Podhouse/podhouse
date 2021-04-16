import React from "react";
import { Heading, Button, Link, Image } from "@chakra-ui/react";
import { ExternalLink } from "react-feather";

import {
  EpisodeContainer,
  EpisodeHeader,
  EpisodeDetailsContainer,
  EpisodeDescription,
  EpisodeButtonsContainer,
  EpisodeLinksContainer,
  EpisodeLinkContainer,
} from "./Episode.styles";

const Episode = () => {
  return (
    <EpisodeContainer>
      <EpisodeHeader>
        <Image
          src="https://bit.ly/sage-adebayo"
          objectFit="cover"
          borderRadius={5}
          maxWidth="200px"
          loading="lazy"
          justifySelf="center"
        />

        <EpisodeDetailsContainer>
          <Heading
            as="h1"
            fontWeight="700"
            fontSize="36px"
            letterSpacing="-0.03em"
            textAlign="start"
          >
            Episode
          </Heading>

          <Heading
            as="h2"
            fontSize="16px"
            fontWeight="500"
            letterSpacing="-0.03em"
            textAlign="start"
          >
            Episode
          </Heading>

          <EpisodeDescription
            text="Episode"
            id="episode-info-description"
            lines={3}
            ellipsis="..."
            moreText="Read more"
            className="custom-class"
            innerElement="p"
          />
        </EpisodeDetailsContainer>

        <EpisodeButtonsContainer>
          <Button type="button" width="100%">
            Play
          </Button>
        </EpisodeButtonsContainer>

        <EpisodeLinksContainer>
          <EpisodeLinkContainer>
            <Link href="/" isExternal>
              Website
            </Link>
            <ExternalLink size={14} />
          </EpisodeLinkContainer>

          <EpisodeLinkContainer>
            <Link href="/" isExternal>
              RSS
            </Link>
            <ExternalLink size={14} />
          </EpisodeLinkContainer>
        </EpisodeLinksContainer>
      </EpisodeHeader>
    </EpisodeContainer>
  );
};

export default Episode;
