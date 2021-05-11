import React from "react";
import { useColorMode } from "@chakra-ui/react";

import { PlayerContainer } from "./Player.styles";

import Podcast from "./Podcast/Podcast";
import Controls from "./Controls/Controls";
import RightControls from "./RightControls/RightControls";

import { usePlayerContext } from "src/machines/Player/PlayerContext";

const Player = () => {
  const { colorMode } = useColorMode();

  const backgroundColor = colorMode === "dark" ? "#151419" : "white";

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
    <PlayerContainer bgColor={backgroundColor}>
      <Podcast ready={ready} episode={episode} />

      <Controls
        ready={true}
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
