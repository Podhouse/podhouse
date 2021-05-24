import { useState, useCallback } from "react";
import { useAudioPlayer, useAudioPosition } from "react-use-audio-player";

import { Episode } from "src/queries/types";

const useAudio = () => {
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [muted, setMuted] = useState<boolean>(false);

  const onEnd = () => {
    console.log("ended!");
  };

  const {
    load,
    togglePlayPause,
    loading,
    ready,
    playing,
    stopped,
    ended,
    mute,
    volume,
  } = useAudioPlayer({
    src: "",
    html5: true,
    format: ["mp3"],
    autoplay: true,
    onEnd,
  });

  const { position, duration, seek } = useAudioPosition({
    highRefreshRate: true,
  });

  const onLoad = (src: string, episode: Episode) => {
    load({
      src,
      html5: true,
      preload: true,
      autoplay: true,
    });
    setEpisode(episode);
  };

  const onToggle = () => {
    togglePlayPause();
  };

  const onMute = () => {
    setMuted(!muted);
    if (muted === false) volume(1);
    else volume(0);
  };

  const onSeek = (value: number) => {
    seek(value);
  };

  const onVolume = (value: number) => {
    volume(value);
  };

  const onBackward = () => {
    if (position <= 15) seek(0);
    else seek(position - 15);
  };

  const onForward = () => {
    seek(position + 15);
  };

  return {
    episode,
    loading,
    ready,
    playing,
    stopped,
    ended,
    mute,
    seek: position,
    duration,
    volume: volume(),
    onLoad,
    onToggle,
    onMute,
    onSeek,
    onVolume,
    onBackward,
    onForward,
  };
};

export default useAudio;
