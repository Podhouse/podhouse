import React from "react";
import { useColorMode } from "@chakra-ui/react";

import { PlayerContainer } from "./Player.styles";

import Podcast from "./Podcast/Podcast";
import Controls from "./Controls/Controls";
import RightControls from "./RightControls/RightControls";

import SkeletonPodcast from "src/components/Skeletons/SkeletonPlayer/SkeletonPodcast/SkeletonPodcast";
import SkeletonControls from "src/components/Skeletons/SkeletonPlayer/SkeletonControls/SkeletonControls";
import SkeletonRightControls from "src/components/Skeletons/SkeletonPlayer/SkeletonRightControls/SkeletonRightControls";

import { usePlayer } from "src/machines/Player/";

const Player = () => {
  const { colorMode } = useColorMode();

  const backgroundColor = colorMode === "dark" ? "#151419" : "white";

  const {
    idle,
    loading,
    ready,
    playing,
    paused,
    stopped,
    episode,
    seek,
    volume,
    muted,
    rate,
    loop,
    duration,
    ended,
    onLoad,
    onToggle,
    onPlay,
    onPause,
    onStop,
    onMute,
    onLoop,
    onVolume,
    onRate,
    onSeek,
    onForward,
    onBackward,
  } = usePlayer();

  if (idle) {
    return <PlayerContainer bgColor={backgroundColor}></PlayerContainer>;
  }

  return (
    <PlayerContainer bgColor={backgroundColor}>
      {loading || !episode ? (
        <SkeletonPodcast />
      ) : (
        <Podcast episode={episode} />
      )}
      {loading || !episode ? <SkeletonControls /> : <Controls />}
      {loading || !episode ? (
        <SkeletonRightControls />
      ) : (
        <RightControls
          volume={volume}
          muted={muted}
          onMute={onMute}
          onVolume={onVolume}
          onRate={onRate}
        />
      )}
    </PlayerContainer>
  );
};

export default Player;
