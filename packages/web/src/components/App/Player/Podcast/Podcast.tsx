import React from "react";
import { Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  PodcastContainer,
  PodcastImage,
  PodcastDetails,
  PodcastFavoriteContainer,
} from "./Podcast.styles";

import { PlayerEpisode } from "src/machines/Player/Player.types";

import convertPodcastNameToURL from "src/utils/convertPodcastNameToURL";
import convertEpisodeNameToURL from "src/utils/convertEpisodeNameToURL";

interface Props {
  ready: boolean;
  episode: PlayerEpisode | null;
}

const Podcast = ({ ready, episode }: Props) => {
  if (!ready) {
    return null;
  }

  if (!episode) {
    return null;
  }

  const podcastRoute: string = convertPodcastNameToURL(
    episode.podcast.name,
    episode.podcast.appleId
  );

  const episodeRoute: string = convertEpisodeNameToURL(
    episode.title,
    episode.podcast.appleId
  );

  return (
    <PodcastContainer>
      <ReactRouterLink
        to={{ pathname: episodeRoute, state: { _id: episode._id } }}
        className="podcast-image"
      >
        <PodcastImage src={episode.image} />
      </ReactRouterLink>

      <PodcastDetails>
        <Link
          as={ReactRouterLink}
          to={{
            pathname: episodeRoute,
            state: { _id: episode._id },
          }}
          fontWeight="500"
        >
          {episode.title}
        </Link>

        <Link
          as={ReactRouterLink}
          to={{
            pathname: podcastRoute,
            state: { _id: episode.podcast._id },
          }}
        >
          {episode.podcast.name}
        </Link>

        <PodcastFavoriteContainer>
          {/* <Heart
            className="like-button"
            size={16}
            strokeWidth={1.7}
            color="#101010"
            style={iconStyle}
            onClick={() => {}}
          /> */}
        </PodcastFavoriteContainer>
      </PodcastDetails>
    </PodcastContainer>
  );
};

export default Podcast;
