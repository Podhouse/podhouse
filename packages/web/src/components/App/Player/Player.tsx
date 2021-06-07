import React from "react";
import { useColorMode } from "@chakra-ui/react";

import { PlayerContainer } from "./Player.styles";

import Podcast from "./Podcast/Podcast";
import Controls from "./Controls/Controls";
import RightControls from "./RightControls/RightControls";

import SkeletonPodcast from "src/components/Skeletons/SkeletonPlayer/SkeletonPodcast/SkeletonPodcast";
import SkeletonControls from "src/components/Skeletons/SkeletonPlayer/SkeletonControls/SkeletonControls";
import SkeletonRightControls from "src/components/Skeletons/SkeletonPlayer/SkeletonRightControls/SkeletonRightControls";

import { usePlayerContext } from "src/context/Player/PlayerContext";

const Player = () => {
  const { colorMode } = useColorMode();

  const backgroundColor = colorMode === "dark" ? "#151419" : "white";

  const {
    initial,
    loading,
    ready,
    idle,
    playing,
    paused,
    end,
    episode,
    seek,
    volume,
    rate,
    duration,
    mute,
    loop,
    error,
    onToggle,
    onPlay,
    onPause,
    onVolume,
    onRate,
    onMute,
    onLoop,
    onSeek,
    onForward,
    onBackward,
  } = usePlayerContext();

  if (initial) {
    return <PlayerContainer bgColor={backgroundColor}></PlayerContainer>;
  }

  if (loading || !episode) {
    return (
      <PlayerContainer bgColor={backgroundColor}>
        <SkeletonPodcast />
        <SkeletonControls />
        <SkeletonRightControls />
      </PlayerContainer>
    );
  }

  return (
    <PlayerContainer bgColor={backgroundColor}>
      <Podcast episode={episode} />

      <Controls
        playing={playing}
        seek={seek}
        duration={duration}
        onToggle={onToggle}
        onPlay={onPlay}
        onPause={onPause}
        onSeek={onSeek}
        onForward={onForward}
        onBackward={onBackward}
      />

      <RightControls
        volume={volume}
        mute={mute}
        onVolume={onVolume}
        onMute={onMute}
        onRate={onRate}
      />
    </PlayerContainer>
  );
};

export default Player;
