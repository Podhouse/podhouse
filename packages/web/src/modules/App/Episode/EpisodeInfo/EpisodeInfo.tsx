import React from "react";
import { Heading, Button, Link, Image } from "@chakra-ui/react";
import { ExternalLink } from "react-feather";
import { GraphQLTaggedNode } from "relay-runtime";
import { usePreloadedQuery, PreloadedQuery } from "react-relay/hooks";

import {
  EpisodeInfoContainer,
  EpisodeInfoHeader,
  EpisodeInfoDetailsContainer,
  EpisodeInfoDescription,
  EpisodeInfoButtonsContainer,
  EpisodeInfoLinksContainer,
  EpisodeInfoLinkContainer,
} from "./EpisodeInfo.styles";

import { EpisodeQuery } from "../__generated__/EpisodeQuery.graphql";

import { usePlayerContext } from "src/machines/Player/PlayerContext";

interface Props {
  queryReference: PreloadedQuery<EpisodeQuery>;
  query: GraphQLTaggedNode;
}

const EpisodeInfo = ({ queryReference, query }: Props) => {
  const { episode } = usePreloadedQuery<EpisodeQuery>(query, queryReference);

  const {
    episode: playerEpisode,
    loading,
    playing,
    paused,
    onToggle,
    onEpisode,
  } = usePlayerContext();

  const renderEpisodeButton = () => {
    if (playerEpisode && playerEpisode.title === episode?.title) {
      if (loading) {
        return (
          <Button
            type="button"
            width="100%"
            isLoading={loading}
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
          />
        );
      } else if (playing) {
        return (
          <Button
            type="button"
            width="100%"
            onClick={onToggle}
            isLoading={loading}
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
            Pause
          </Button>
        );
      } else if (paused) {
        return (
          <Button
            type="button"
            width="100%"
            onClick={onToggle}
            isLoading={loading}
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
            Play
          </Button>
        );
      }
    }

    return (
      <Button
        type="button"
        width="100%"
        onClick={() => onEpisode(episode)}
        isLoading={loading}
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
        Play
      </Button>
    );
  };

  return (
    <EpisodeInfoContainer>
      <EpisodeInfoHeader>
        <Image
          src={episode?.image}
          objectFit="cover"
          borderRadius={5}
          maxWidth="200px"
          alignSelf="center"
          justifySelf="center"
        />

        <EpisodeInfoDetailsContainer>
          <Heading
            color="#101010"
            as="h1"
            letterSpacing="-0.03em"
            textAlign="start"
          >
            {episode?.title}
          </Heading>

          <Heading
            color="#101010"
            as="h2"
            size="sm"
            letterSpacing="-0.03em"
            textAlign="start"
          >
            {episode?.podcast.name}
          </Heading>

          <EpisodeInfoDescription
            color="#101010"
            lineHeight="25px"
            textAlign="start"
          >
            {episode?.description}
          </EpisodeInfoDescription>
        </EpisodeInfoDetailsContainer>

        <EpisodeInfoButtonsContainer>
          {renderEpisodeButton()}
        </EpisodeInfoButtonsContainer>

        <EpisodeInfoLinksContainer>
          <EpisodeInfoLinkContainer>
            <Link href={episode?.podcast?.website} isExternal>
              Website
            </Link>
            <ExternalLink size={14} />
          </EpisodeInfoLinkContainer>

          <EpisodeInfoLinkContainer>
            <Link href={episode?.podcast?.rss} isExternal>
              RSS
            </Link>
            <ExternalLink size={14} />
          </EpisodeInfoLinkContainer>
        </EpisodeInfoLinksContainer>
      </EpisodeInfoHeader>
    </EpisodeInfoContainer>
  );
};

export default EpisodeInfo;
