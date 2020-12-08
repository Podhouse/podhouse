import React, { useContext } from "react";

import usePlayer from "./usePlayer";

const PlayerContext = React.createContext(undefined as any);

const PlayerProvider = ({ children }: any) => {
  const {
    initial,
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
    ended,
    load,
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
    onEpisode,
  } = usePlayer({
    volume: 0.5,
    muted: false,
    loop: false,
    rate: 1.0,
  });

  const value = {
    initial,
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
    ended,
    load,
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
    onEpisode,
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};

const usePlayerContext = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error("usePlayer can only be used inside PlayerProvider");
  }
  return context;
};

export { PlayerProvider, usePlayerContext };
