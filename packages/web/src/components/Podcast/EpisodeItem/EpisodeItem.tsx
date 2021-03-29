import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { BsPlay, BsPause } from "react-icons/bs";

import {
  EpisodeItemContainer,
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
            onClick={onToggle}
            leftIcon={<BsPause size={16} />}
          >
            Pause
          </EpisodeItemButton>
        );
      } else if (paused) {
        return (
          <EpisodeItemButton
            type="button"
            width="90px"
            onClick={onToggle}
            leftIcon={<BsPlay size={16} />}
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
        onClick={() => onEpisode(node)}
        leftIcon={<BsPlay size={16} />}
      >
        Play
      </EpisodeItemButton>
    );
  };

  return (
    <EpisodeItemContainer>
      <EpisodeNameDescription>
        <EpisodeItemName
          as={ReactRouterLink}
          to={{ pathname: route, state: { _id: node?._id } }}
          fontSize="16px"
          fontWeight="500"
        >
          {node?.title}
        </EpisodeItemName>

        <EpisodeItemDescription
          fontSize="16px"
          fontWeight="300"
          lineHeight="30px"
        >
          {node?.description}
        </EpisodeItemDescription>
      </EpisodeNameDescription>

      <EpisodeItemPublishedDate
        fontSize="16px"
        fontWeight="300"
        lineHeight="30px"
        textAlign="start"
      >
        {node?.publishedDate}
      </EpisodeItemPublishedDate>

      <EpisodeItemDuration
        fontSize="16px"
        fontWeight="300"
        lineHeight="30px"
        textAlign="start"
      >
        {node?.duration}
      </EpisodeItemDuration>

      {renderEpisodeButton()}
    </EpisodeItemContainer>
  );
};

export default EpisodeItem;
