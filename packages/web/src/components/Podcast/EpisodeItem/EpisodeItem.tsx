import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Play, Pause } from "react-feather";

import {
  EpisodeItemContainer,
  EpisodeItemAvatar,
  EpisodeItemName,
  EpisodeItemDescription,
  EpisodeNameDescription,
  EpisodeItemPublishedDate,
  EpisodeItemDuration,
  EpisodeItemButton,
} from "./EpisodeItem.styles";

import { usePlayerContext } from "src/machines/Player/PlayerContext";

import convertEpisodeNameToURL from "src/utils/convertEpisodeNameToURL";

interface Props {
  readonly node: {
    readonly _id: string;
    readonly title: string | null;
    readonly description: string | null;
    readonly publishedDate: string | null;
    readonly link: string | null;
    readonly image: string | null;
    readonly audio: string | null;
    readonly duration: string | null;
    readonly podcast: {
      readonly _id: string;
      readonly name: string | null;
      readonly website: string | null;
      readonly rss: string | null;
      readonly appleId: number | null;
      readonly image: string | null;
    } | null;
  } | null;
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
    node?.title,
    node?.podcast?.appleId
  );

  const renderEpisodeButton = () => {
    if (episode && episode.title === node?.title) {
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

  const renderEpisodeImage = () => {
    if (!node) {
      return "https://ebwu.education/wp-content/themes/claue/assets/images/placeholder.png";
    } else if (!node.image && node?.podcast?.image) {
      return node?.podcast?.image;
    } else if (node && node.image) {
      return node?.image;
    }
  };

  return (
    <EpisodeItemContainer>
      <ReactRouterLink to={{ pathname: route, state: { _id: node?._id } }}>
        <EpisodeItemAvatar
          src={renderEpisodeImage()}
          alt="image"
          loading="lazy"
        />
      </ReactRouterLink>

      <EpisodeNameDescription>
        <EpisodeItemName
          as={ReactRouterLink}
          to={{ pathname: route, state: { _id: node?._id } }}
          fontWeight="500"
          lineHeight="25px"
        >
          {node?.title}
        </EpisodeItemName>

        <EpisodeItemDescription lineHeight="25px" textAlign="start">
          {node?.description}
        </EpisodeItemDescription>
      </EpisodeNameDescription>

      <EpisodeItemPublishedDate textAlign="start">
        {node?.publishedDate}
      </EpisodeItemPublishedDate>

      <EpisodeItemDuration textAlign="start">
        {node?.duration}
      </EpisodeItemDuration>

      {renderEpisodeButton()}
    </EpisodeItemContainer>
  );
};

export default EpisodeItem;
