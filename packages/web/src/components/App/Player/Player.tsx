import React from "react";

import { PlayerContainer } from "./Player.styles";

import Podcast from "./Podcast/Podcast";
import Controls from "./Controls/Controls";
import RightControls from "./RightControls/RightControls";

import { usePlayerContext } from "src/player/Player";

const Player = () => {
  const {
    idle,
    loading,
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
  } = usePlayerContext();

  if (loading) {
    return (
      <PlayerContainer>
        <h1>Loading...</h1>
      </PlayerContainer>
    );
  }

  if (idle || error) {
    return <PlayerContainer />;
  }

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
