import { memo } from "react";
import { Divider, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { BsPlay, BsPause } from "react-icons/bs";
import { Interpreter } from "xstate";
import { useSelector } from "@xstate/react";

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

import {
  MachineContext,
  MachineEvent,
} from "src/machines/Player/PlayerMachine.types";

type Props = {
  episode: Episode;
  service: Interpreter<MachineContext, any, MachineEvent>;
  onToggle: (episode: Episode) => void;
  onPlay: () => void;
  onPause: () => void;
};

const EpisodeItem = ({
  episode,
  service,
  onToggle,
  onPlay,
  onPause,
}: Props) => {
  const loading = useSelector(service, (state) => state.matches("loading"));
  const playing = useSelector(service, (state) =>
    state.matches("ready.playing")
  );
  const currentEpisode = useSelector(service, (state) => state.context.episode);

  console.log("EpisodeItem rerender!");

  const onRenderButton = () => {
    if (currentEpisode?.enclosureUrl === episode.enclosureUrl) {
      if (loading) {
        return (
          <EpisodeItemButton
            aria-label="Loading"
            variant="light"
            isLoading={true}
          />
        );
      }

      if (playing) {
        return (
          <EpisodeItemButton
            aria-label="Pause episode"
            icon={<BsPause size="30px" />}
            variant="light"
            onClick={onPause}
          />
        );
      }

      return (
        <EpisodeItemButton
          aria-label="Play episode"
          icon={<BsPlay size="30px" />}
          variant="light"
          onClick={onPlay}
        />
      );
    }

    return (
      <EpisodeItemButton
        aria-label="Play episode"
        icon={<BsPlay size="30px" />}
        variant="light"
        onClick={() => onToggle(episode)}
      />
    );
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
