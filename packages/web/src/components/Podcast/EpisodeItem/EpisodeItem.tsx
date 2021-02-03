import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Play, Pause } from "react-feather";

import {
  EpisodeItemContainer,
  EpisodeItemAvatar,
  EpisodeItemName,
  EpisodeItemDescription,
  EpisodeItemPublishedDate,
  EpisodeItemDuration,
  EpisodeItemButton,
} from "./EpisodeItem.styles";

import { EpisodeItemProps } from "./EpisodeItem.types";

import { usePlayerContext } from "src/machines/Player/PlayerContext";

import convertEpisodeNameToURL from "src/utils/convertEpisodeNameToURL";

const EpisodeItem = ({ node }: EpisodeItemProps) => {
  const {
    _id,
    image,
    title,
    description,
    publishedDate,
    duration,
    podcast,
  } = node;

  const {
    loading,
    playing,
    paused,
    onToggle,
    episode,
    onEpisode,
  } = usePlayerContext();

  const route: string = convertEpisodeNameToURL(title, podcast.appleId);

  const renderEpisodeButton = () => {
    if (episode && episode.title === title) {
      if (loading) {
        return (
          <EpisodeItemButton type="button" width="90px" isLoading={true}>
            Loading
          </EpisodeItemButton>
        );
      } else if (playing) {
        return (
          <EpisodeItemButton
            type="button"
            width="90px"
            leftIcon={<Pause size={14} />}
            onClick={onToggle}
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
          >
            Pause
          </EpisodeItemButton>
        );
      } else if (paused) {
        return (
          <EpisodeItemButton
            type="button"
            width="90px"
            leftIcon={<Play size={14} />}
            onClick={onToggle}
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
          >
            Play
          </EpisodeItemButton>
        );
      }
    }

    return (
      <EpisodeItemButton
        type="button"
        width="90px"
        leftIcon={<Play size={14} />}
        onClick={() => onEpisode(node)}
      >
        Play
      </EpisodeItemButton>
    );
  };

  return (
    <EpisodeItemContainer>
      <ReactRouterLink to={{ pathname: route, state: { _id } }}>
        <EpisodeItemAvatar src={image} alt="image" />
      </ReactRouterLink>

      <EpisodeItemName
        as={ReactRouterLink}
        to={{ pathname: route, state: { _id } }}
        fontWeight="500"
        lineHeight="25px"
      >
        {title}
      </EpisodeItemName>

      <EpisodeItemDescription lineHeight="25px" textAlign="start">
        {description}
      </EpisodeItemDescription>

      <EpisodeItemPublishedDate textAlign="start">
        {publishedDate}
      </EpisodeItemPublishedDate>

      <EpisodeItemDuration textAlign="start">{duration}</EpisodeItemDuration>

      {renderEpisodeButton()}
    </EpisodeItemContainer>
  );
};

export default EpisodeItem;
