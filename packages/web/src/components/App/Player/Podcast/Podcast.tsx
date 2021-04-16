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

interface Props {
  ready: boolean;
  episode: PlayerEpisode | null;
}

const Podcast = ({ ready, episode }: Props) => {
  return (
    <PodcastContainer>
      <ReactRouterLink to="/" className="podcast-image">
        <PodcastImage src="https://bit.ly/sage-adebayo" />
      </ReactRouterLink>

      <PodcastDetails>
        <Link as={ReactRouterLink} to="/" fontSize="16px" fontWeight="500">
          Implementation with React Query
        </Link>

        <Link
          as={ReactRouterLink}
          to="/"
          fontSize="16px"
          fontWeight="300"
          lineHeight="30px"
        >
          Implementation with React Query
        </Link>

        <PodcastFavoriteContainer>
          <BsHeart className="like-button" size={20} onClick={() => {}} />
        </PodcastFavoriteContainer>
      </PodcastDetails>
    </PodcastContainer>
  );
};

export default Podcast;
