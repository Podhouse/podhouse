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

import { usePlayerContext } from "src/machines/Player/PlayerContext";

import convertEpisodeNameToURL from "src/utils/convertEpisodeNameToURL";

interface Props {
  readonly node: {
    readonly _id: string;
    readonly title: string;
    readonly description: string;
    readonly publishedDate: string;
    readonly link: string;
    readonly image: string;
    readonly audio: string;
    readonly duration: string;
    readonly podcast: {
      readonly id: string;
      readonly _id: string;
      readonly name: string;
      readonly website: string;
      readonly rss: string;
      readonly appleId: number;
    };
  };
}

const EpisodeItem = ({ node }: Props) => {
  const {
    loading,
    playing,
    paused,
    onToggle,
    episode,
    onEpisode,
  } = usePlayerContext();

  const route: string = convertEpisodeNameToURL(
    node.title,
    node.podcast.appleId
  );

  const renderEpisodeButton = () => {
    if (episode && episode.title === node.title) {
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
      <ReactRouterLink to={{ pathname: route, state: { _id: node._id } }}>
        <EpisodeItemAvatar src={node.image} alt="image" />
      </ReactRouterLink>

      <EpisodeItemName
        as={ReactRouterLink}
        to={{ pathname: route, state: { _id: node._id } }}
        fontWeight="500"
        lineHeight="25px"
      >
        {node.title}
      </EpisodeItemName>

      <EpisodeItemDescription lineHeight="25px" textAlign="start">
        {node.description}
      </EpisodeItemDescription>

      <EpisodeItemPublishedDate textAlign="start">
        {node.publishedDate}
      </EpisodeItemPublishedDate>

      <EpisodeItemDuration textAlign="start">
        {node.duration}
      </EpisodeItemDuration>

      {renderEpisodeButton()}
    </EpisodeItemContainer>
  );
};

export default EpisodeItem;
