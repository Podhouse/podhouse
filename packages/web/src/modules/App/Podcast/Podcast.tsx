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

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

const Podcast = () => {
  return (
    <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
      <PodcastContainer>
        <PodcastHeader>
          <Image src={avatar} objectFit="cover" borderRadius={5} />

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
                Website <ExternalLink size={12} />
              </Link>
            </PodcastLinkContainer>

            <PodcastLinkContainer>
              <Link href="https://chakra-ui.com" isExternal>
                RSS <ExternalLink size={12} />
              </Link>
            </PodcastLinkContainer>
          </PodcastLinksContainer>
        </PodcastHeader>

        <PodcastEpisodesContainer></PodcastEpisodesContainer>
      </PodcastContainer>
    </Scrollbars>
  );
};

export default Podcast;
