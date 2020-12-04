import React from "react";

import { PlayerContainer } from "./Player.styles";

import Podcast from "./Podcast/Podcast";
import Controls from "./Controls/Controls";
import RightControls from "./RightControls/RightControls";

import usePlayer from "src/player/usePlayer";

const Player = () => {
  const {
    idle,
    ready,
    error,
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
  } = usePlayer({
    volume: 1.0,
    rate: 1.0,
  });

  if (idle || error) return null;

  return (
    <PlayerContainer>
      <Podcast ready={ready} episode={episode} />

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

      <RightControls
        ready={ready}
        volume={volume}
        muted={muted}
        episode={episode}
        onVolume={onVolume}
        onMute={onMute}
      />
    </PlayerContainer>
  );
};

export default Player;
