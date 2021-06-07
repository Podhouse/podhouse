import React, { useContext } from "react";

import usePlayer from "src/hooks/usePlayer/usePlayer";
import { ReturnArgs } from "src/hooks/usePlayer/usePlayer.types";

const PlayerContext = React.createContext(undefined as any);

const PlayerProvider = ({ children }: any) => {
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
  } = usePlayer();

  const value: ReturnArgs = {
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
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};

const usePlayerContext = () => {
  const context: ReturnArgs = useContext<ReturnArgs>(PlayerContext);
  if (context === undefined) {
    throw new Error("usePlayerContext can only be used inside PlayerProvider");
  }
  return context;
};

export { PlayerProvider, usePlayerContext };
