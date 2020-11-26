import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { Heading, Button, Link, Image } from "@chakra-ui/react";
import { ExternalLink } from "react-feather";

import {
  PodcastContainer,
  PodcastHeader,
  PodcastDetailsContainer,
  PodcastDescription,
  PodcastButtonsContainer,
  PodcastEpisodesContainer,
  PodcastLinksContainer,
  PodcastLinkContainer,
} from "./Podcast.styles";

import EpisodeItem from "src/components/Podcast/EpisodeItem/EpisodeItem";

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
  return (
    <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
      <PodcastContainer>
        <PodcastHeader>
          <Image
            src={avatar}
            objectFit="cover"
            borderRadius={5}
            maxWidth="200px"
            alignSelf="center"
            justifySelf="center"
          />

          <PodcastDetailsContainer>
            <Heading as="h1" letterSpacing="-0.03em">
              99% Invisible
            </Heading>

            <Heading as="h2" size="sm" letterSpacing="-0.03em">
              Roman Mars
            </Heading>

            <PodcastDescription lineHeight="25px" textAlign="start">
              Design is everywhere in our lives, perhaps most importantly in the
              places where we've just stopped noticing. 99% Invisible is a
              weekly exploration of the process and power of design and
              architecture. From award winning producer Roman Mars. Learn more
              at 99percentinvisible.org. A proud member of Radiotopia, from PRX.
              Learn more at radiotopia.fm.
            </PodcastDescription>
          </PodcastDetailsContainer>

          <PodcastButtonsContainer>
            <Button
              type="button"
              width="100%"
              bgColor="#101010"
              color="#ffffff"
              _hover={{ bg: "#101010" }}
              _active={{
                bg: "#101010",
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(0, 0, 0, .50), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
              _disabled={{
                bgColor: "#eaeaea",
                cursor: "not-allowed",
              }}
            >
              Subscribe
            </Button>
          </PodcastButtonsContainer>

          <PodcastLinksContainer>
            <PodcastLinkContainer>
              <Link href="https://chakra-ui.com" isExternal>
                Website
              </Link>
              <ExternalLink size={14} />
            </PodcastLinkContainer>

            <PodcastLinkContainer>
              <Link href="https://chakra-ui.com" isExternal>
                RSS
              </Link>
              <ExternalLink size={14} />
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
