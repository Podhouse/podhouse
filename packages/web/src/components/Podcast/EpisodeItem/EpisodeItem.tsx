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

const EpisodeItem = ({ node }: EpisodeItemProps) => {
  const { _id, image, title, description, publishedDate, duration } = node;

  const { playing, episode, onEpisode } = usePlayerContext();

  const renderEpisodeButton = () => {
    if (episode && episode.title === title) {
      if (playing) {
        return (
          <EpisodeItemButton
            type="button"
            leftIcon={<Pause size={14} />}
            onClick={() => onEpisode(node)}
          >
            Pause
          </EpisodeItemButton>
        );
      } else {
        return (
          <EpisodeItemButton
            type="button"
            leftIcon={<Play size={14} />}
            onClick={() => onEpisode(node)}
          >
            Play
          </EpisodeItemButton>
        );
      }
    } else {
      return (
        <EpisodeItemButton
          type="button"
          leftIcon={<Play size={14} />}
          onClick={() => onEpisode(node)}
        >
          Play
        </EpisodeItemButton>
      );
    }
  };

  return (
    <EpisodeItemContainer>
      <EpisodeItemAvatar src={image} alt="image" />

      <EpisodeItemName
        as={ReactRouterLink}
        to={{ pathname: `/episode/${_id}`, state: { _id } }}
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
