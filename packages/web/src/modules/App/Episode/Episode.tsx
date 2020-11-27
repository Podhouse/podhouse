import React from "react";
import Scrollbars from "react-custom-scrollbars";
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

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

const Episode = () => {
  return (
    <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
      <EpisodeContainer>
        <EpisodeHeader>
          <Image
            src={avatar}
            objectFit="cover"
            borderRadius={5}
            maxWidth="200px"
            alignSelf="center"
            justifySelf="center"
          />

          <EpisodeDetailsContainer>
            <Heading as="h1" letterSpacing="-0.03em">
              99% Invisible
            </Heading>

            <Heading as="h2" size="sm" letterSpacing="-0.03em">
              Roman Mars
            </Heading>

            <EpisodeDescription lineHeight="25px" textAlign="start">
              Design is everywhere in our lives, perhaps most importantly in the
              places where we've just stopped noticing. 99% Invisible is a
              weekly exploration of the process and power of design and
              architecture. From award winning producer Roman Mars. Learn more
              at 99percentinvisible.org. A proud member of Radiotopia, from PRX.
              Learn more at radiotopia.fm.
            </EpisodeDescription>
          </EpisodeDetailsContainer>

          <EpisodeButtonsContainer>
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
              Listen
            </Button>
          </EpisodeButtonsContainer>

          <EpisodeLinksContainer>
            <EpisodeLinkContainer>
              <Link href="https://chakra-ui.com" isExternal>
                Website <ExternalLink size={12} />
              </Link>
            </EpisodeLinkContainer>

            <EpisodeLinkContainer>
              <Link href="https://chakra-ui.com" isExternal>
                RSS <ExternalLink size={12} />
              </Link>
            </EpisodeLinkContainer>
          </EpisodeLinksContainer>
        </EpisodeHeader>
      </EpisodeContainer>
    </Scrollbars>
  );
};

export default Episode;
