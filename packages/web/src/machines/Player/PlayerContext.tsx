import React, { useContext } from "react";

import useAudioPlayer from "./useAudioPlayer";

import { UseAudioPlayer, UseAudioPlayerOptions } from "./Player.types";

const PlayerContext = React.createContext(undefined as any);

const PlayerProvider = ({ children }: any) => {
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
  } = useAudioPlayer();

  const value: UseAudioPlayerOptions = {
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
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};

const usePlayer: UseAudioPlayer = () => {
  const context: UseAudioPlayerOptions =
    useContext<UseAudioPlayerOptions>(PlayerContext);
  if (context === undefined) {
    throw new Error("usePlayer can only be used inside PlayerProvider");
  }
  return context;
};

export { PlayerProvider, usePlayer };
