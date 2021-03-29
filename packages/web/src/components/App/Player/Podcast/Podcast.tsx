import React from "react";
import { Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { BsHeart } from "react-icons/bs";

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
          fontSize="16px"
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
          fontSize="16px"
          fontWeight="300"
          lineHeight="30px"
        >
          {episode.podcast.name}
        </Link>

        <PodcastFavoriteContainer>
          <BsHeart className="like-button" size={20} onClick={() => {}} />
        </PodcastFavoriteContainer>
      </PodcastDetails>
    </PodcastContainer>
  );
};

export default Podcast;
