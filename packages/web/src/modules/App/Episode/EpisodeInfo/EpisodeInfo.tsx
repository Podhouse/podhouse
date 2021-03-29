import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Link, Image } from "@chakra-ui/react";
import { ExternalLink } from "react-feather";
import { usePreloadedQuery, PreloadedQuery } from "react-relay/hooks";
import { useLocation } from "react-router-dom";

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
  query: any;
}

const EpisodeInfo = ({ queryReference, query }: Props) => {
  const location = useLocation();

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
      <Helmet>
        <title>{episode?.title ? episode.title : "Episode title"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={
            episode?.description ? episode.description : "Episode description"
          }
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content={episode?.title ? episode.title : "Episode title"}
        />
        <meta
          property="twitter:description"
          content={
            episode?.description ? episode.description : "Episode description"
          }
        />
        <meta
          property="twitter:image"
          content={episode?.image ? episode.image : ""}
        />
        <meta property="twitter:url" content={location.pathname} />

        {/* Open Graph */}
        <meta property="og:url" content={location.pathname} key="ogurl" />
        <meta
          property="og:image"
          content={episode?.image ? episode.image : ""}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content={episode?.title ? episode.title : "Episode title"}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content={episode?.title ? episode.title : "Episode title"}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={
            episode?.description ? episode.description : "Episode description"
          }
          key="ogdesc"
        />
      </Helmet>

      <EpisodeInfoHeader>
        <Image
          src={episode?.image ? episode.image : ""}
          objectFit="cover"
          borderRadius={5}
          maxWidth="200px"
          alignSelf="center"
          justifySelf="center"
          loading="lazy"
        />

        <EpisodeInfoDetailsContainer>
          <Heading
            as="h1"
            fontWeight="700"
            fontSize="36px"
            letterSpacing="-0.03em"
            textAlign="start"
          >
            {episode?.title ? episode.title : ""}
          </Heading>

          <Heading
            as="h2"
            fontSize="16px"
            fontWeight="500"
            letterSpacing="-0.03em"
            textAlign="start"
          >
            {episode && episode.podcast && episode.podcast.name
              ? episode.podcast.name
              : ""}
          </Heading>

          <EpisodeInfoDescription
            fontSize="16px"
            fontWeight="300"
            lineHeight="30px"
            textAlign="start"
          >
            {episode?.description ? episode.description : ""}
          </EpisodeInfoDescription>
        </EpisodeInfoDetailsContainer>

        <EpisodeInfoButtonsContainer>
          {renderEpisodeButton()}
        </EpisodeInfoButtonsContainer>

        <EpisodeInfoLinksContainer>
          <EpisodeInfoLinkContainer>
            <Link
              href={episode?.podcast?.website ? episode.podcast.website : ""}
              isExternal
            >
              Website
            </Link>
            <ExternalLink size={14} />
          </EpisodeInfoLinkContainer>

          <EpisodeInfoLinkContainer>
            <Link
              href={episode?.podcast?.rss ? episode?.podcast?.rss : ""}
              isExternal
            >
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
