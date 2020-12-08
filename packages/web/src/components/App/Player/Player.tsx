import React from "react";

import { PlayerContainer } from "./Player.styles";

import Podcast from "./Podcast/Podcast";
import Controls from "./Controls/Controls";
import RightControls from "./RightControls/RightControls";

import SkeletonPodcast from "src/components/Skeletons/SkeletonPlayer/SkeletonPodcast/SkeletonPodcast";
import SkeletonControls from "src/components/Skeletons/SkeletonPlayer/SkeletonControls/SkeletonControls";
import SkeletonRightControls from "src/components/Skeletons/SkeletonPlayer/SkeletonRightControls/SkeletonRightControls";

import { usePlayerContext } from "src/machines/Player/PlayerContext";

const Player = () => {
  const {
    initial,
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

  return (
    <PlayerContainer>
      {loading ? (
        <SkeletonPodcast />
      ) : (
        <Podcast ready={ready} episode={episode} />
      )}

      {initial || loading ? (
        <SkeletonControls />
      ) : (
        <Controls
          ready={ready}
          playing={playing}
          seek={seek}
          episode={episode}
          onPlay={onPlay}
          onPause={onPause}
          onSeek={onSeek}
          onBackward={onBackward}
          onForward={onForward}
        />
      )}

      {initial || loading ? (
        <SkeletonRightControls />
      ) : (
        <RightControls
          ready={ready}
          volume={volume}
          muted={muted}
          episode={episode}
          onVolume={onVolume}
          onMute={onMute}
        />
      )}
    </PlayerContainer>
  );
};

export default Player;
