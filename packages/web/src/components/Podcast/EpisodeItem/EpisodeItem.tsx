import { memo } from "react";
import { Divider, Link as ChakraLink, Tooltip } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { BsPlay, BsPause } from "react-icons/bs";

import {
  EpisodeItemContainer,
  EpisodeItemDescription,
  EpisodeNameDescription,
  EpisodeItemPublishedDate,
  EpisodeItemDuration,
  EpisodeItemButton,
  EpisodeDividerContainer,
} from "./EpisodeItem.styles";

import { formatTime, formatDate } from "src/utils/";

import { Episode } from "src/queries/types";

import useColor from "src/hooks/useColor";

interface Props {
  episode: Episode;
  currentEpisode: Episode | null;
  loading: boolean;
  ready: boolean;
  idle: boolean;
  playing: boolean;
  onToggle: (episode: Episode) => void;
  onPlay: () => void;
  onPause: () => void;
}

const EpisodeItem = ({
  episode,
  currentEpisode,
  loading,
  ready,
  idle,
  playing,
  onToggle,
  onPlay,
  onPause,
}: Props) => {
  console.log("EpisodeItem rerender!");

  const onRenderButton = () => {
    if (currentEpisode === null) {
      return (
        <Tooltip label="Play" aria-label="Play audio">
          <EpisodeItemButton
            aria-label="Play episode"
            icon={<BsPlay size="30px" />}
            variant="light"
            onClick={() => onToggle(episode)}
          />
        </Tooltip>
      );
    }

    if (currentEpisode.enclosureUrl === episode.enclosureUrl) {
      if (loading) {
        return (
          <Tooltip label="Loading" aria-label="Loading">
            <EpisodeItemButton
              aria-label="Loading"
              variant="light"
              isLoading={true}
            />
          </Tooltip>
        );
      }

      if (playing) {
        return (
          <Tooltip label="Pause" aria-label="Pause audio">
            <EpisodeItemButton
              aria-label="Pause episode"
              icon={<BsPause size="30px" />}
              variant="light"
              onClick={onPause}
            />
          </Tooltip>
        );
      }

      return (
        <Tooltip label="Play" aria-label="Play audio">
          <EpisodeItemButton
            aria-label="Play episode"
            icon={<BsPlay size="30px" />}
            variant="light"
            onClick={onPlay}
          />
        </Tooltip>
      );
    }

    if (currentEpisode.enclosureUrl !== episode.enclosureUrl) {
      return (
        <Tooltip label="Play" aria-label="Play audio">
          <EpisodeItemButton
            aria-label="Play episode"
            icon={<BsPlay size="30px" />}
            variant="light"
            onClick={() => onToggle(episode)}
          />
        </Tooltip>
      );
    }
  };

  return (
    <>
      <EpisodeItemContainer>
        <EpisodeNameDescription>
          <ChakraLink
            to={{
              pathname: `/episode/${episode.id}`,
              state: { id: episode.id },
            }}
            href={`/episode/${episode.id}`}
            as={ReactRouterLink}
            color={useColor("#e7e7e7", "#6F6F6F")}
          >
            {episode.title}
          </ChakraLink>

          <EpisodeItemDescription>{episode.description}</EpisodeItemDescription>
        </EpisodeNameDescription>

        <EpisodeItemPublishedDate>
          {formatDate(episode.datePublished)}
        </EpisodeItemPublishedDate>

        <EpisodeItemDuration>
          {formatTime(episode.duration)}
        </EpisodeItemDuration>

        {onRenderButton()}

        <EpisodeDividerContainer>
          <Divider
            orientation="horizontal"
            borderBottomWidth="1px"
            borderBottomColor={useColor("2C2E34", "#f2f2f2")}
          />
        </EpisodeDividerContainer>
      </EpisodeItemContainer>
    </>
  );
};

export default memo(EpisodeItem);
