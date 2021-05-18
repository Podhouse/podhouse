import React from "react";
import { useColorMode } from "@chakra-ui/react";

import { PlayerContainer } from "./Player.styles";

import Podcast from "./Podcast/Podcast";
import Controls from "./Controls/Controls";
import RightControls from "./RightControls/RightControls";

import SkeletonPodcast from "src/components/Skeletons/SkeletonPlayer/SkeletonPodcast/SkeletonPodcast";
import SkeletonControls from "src/components/Skeletons/SkeletonPlayer/SkeletonControls/SkeletonControls";
import SkeletonRightControls from "src/components/Skeletons/SkeletonPlayer/SkeletonRightControls/SkeletonRightControls";

import { usePlayerContext } from "src/machines/Player/PlayerContext";

const Player = () => {
  const { colorMode } = useColorMode();

  const backgroundColor = colorMode === "dark" ? "#151419" : "white";

  const {
    idle,
    loading,
    ready,
    playing,
    episode,
    seek,
    volume,
    muted,
    onPlay,
    onPause,
    onMute,
    onVolume,
    onSeek,
    onForward,
    onBackward,
  } = usePlayerContext();

  if (idle) {
    return <PlayerContainer bgColor={backgroundColor}></PlayerContainer>;
  }

  return (
    <PlayerContainer bgColor={backgroundColor}>
      {loading ? <SkeletonPodcast /> : <Podcast />}

      {loading ? <SkeletonControls /> : <Controls />}

      {loading ? <SkeletonRightControls /> : <RightControls />}
    </PlayerContainer>
  );
};

export default Player;
