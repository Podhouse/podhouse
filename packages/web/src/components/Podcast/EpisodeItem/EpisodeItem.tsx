import React from "react";
import { Divider, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { BsPlay } from "react-icons/bs";

import {
  EpisodeItemContainer,
  EpisodeItemDescription,
  EpisodeNameDescription,
  EpisodeItemPublishedDate,
  EpisodeItemDuration,
  EpisodeItemButton,
  EpisodeDividerContainer,
} from "./EpisodeItem.styles";

import { usePlayerContext } from "src/machines/Player/PlayerContext";

import { formatTime, formatDate } from "src/utils/";

import { Episode } from "src/queries/types";

import useColor from "src/hooks/useColor";

interface Props {
  episode: Episode;
}

const EpisodeItem = ({ episode }: Props) => {
  const { playing, onEpisode, onPlay, onPause } = usePlayerContext();

  // const renderControlButton = () => {
  //   if (playing) {
  //     return (
  //       <Tooltip label="Pause" aria-label="Pause audio">
  //         <IconButton
  //           aria-label="Pause episode"
  //           icon={<BsPause size="42px" />}
  //           variant="light"
  //           size="lg"
  //           onClick={onPause}
  //         />
  //       </Tooltip>
  //     );
  //   }

  //   return (

  //     <Tooltip label="Play" aria-label="Play audio">
  //       <EpisodeItemButton
  //         aria-label="Play episode"
  //         icon={<BsPlay size="30px" />}
  //         variant="light"
  //         onClick={() => onEpisode(episode)}
  //       />

  //       <IconButton
  //         aria-label="Play episode"
  //         icon={<BsPlay size="42px" />}
  //         variant="light"
  //         size="lg"
  //         onClick={onPlay}
  //       />
  //     </Tooltip>
  //   );
  // };

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

        <EpisodeItemButton
          aria-label="Play episode"
          icon={<BsPlay size="30px" />}
          variant="light"
          onClick={() => onEpisode(episode)}
        />

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

export default EpisodeItem;
