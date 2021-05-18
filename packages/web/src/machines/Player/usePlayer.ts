import { useState, useEffect, useRef } from "react";
import raf from "raf";

import { Episode } from "src/queries/types";

import useAudioPlayer from "./useAudioPlayer";

const usePlayer = () => {
  const {
    audio,
    load,
    idle,
    loading,
    ready,
    playing,
    paused,
    stopped,
    episode,
    volume,
    rate,
    muted,
    loop,
    send,
  } = useAudioPlayer();

  const [playerSeek, setPlayerSeek] = useState<number>(0);

  const playerSeekRef = useRef<number>();

  const episodeHasEnded = audio?.ended;

  useEffect(() => {
    const animate = () => {
      const seek = audio?.currentTime;
      setPlayerSeek(seek as number);
      playerSeekRef.current = raf(animate);
    };

    if (audio && playing) {
      playerSeekRef.current = raf(animate);
    }

    return () => {
      if (playerSeekRef.current) {
        raf.cancel(playerSeekRef.current);
      }
    };
  }, [audio, playing, stopped]);

  const onToggle = (): void => {
    if (!audio) return;
    if (ready) audio.play();
    if (playing) audio.pause();
  };

  const onPlay = (): void => {
    if (!audio) return;
    audio.play();
  };

  const onPause = (): void => {
    if (!audio) return;
    audio.pause();
  };

  const onStop = (): void => {
    if (!audio) return;
    audio.pause();
    send("STOP");
    setPlayerSeek(0);
    audio.currentTime = 0;
  };

  const onMute = (): void => {
    if (!audio) return;
    audio.muted = !muted;
    send("MUTE");
  };

  const onLoop = (): void => {
    if (!audio) return;
    audio.loop = !loop;
    send("LOOP");
  };

  const onVolume = (
    newValue: number,
    props?: { min?: number; max?: number; handlePosition?: string }
  ): void => {
    if (!audio) return;
    send({ type: "VOLUME", volume: newValue });
    audio.volume = newValue;
  };

  const onRate = (value: any): void => {
    if (!audio) return;
    const rate = parseFloat(value);
    send({ type: "RATE", rate });
    audio.playbackRate = rate;
  };

  const onSeek = (
    newValue: number,
    props?: { min?: number; max?: number; handlePosition?: string }
  ): void => {
    if (!audio) return;
    setPlayerSeek(newValue);
    audio.currentTime = newValue;
  };

  const onForward = (value: number = 15): void => {
    if (!audio) return;
    if (episodeHasEnded) return;
    const seek = playerSeek + value;
    setPlayerSeek(seek);
    audio.currentTime = seek;
  };

  const onBackward = (value: number = 15): void => {
    if (!audio) return;
    if (idle) return;
    const seek = playerSeek - value;
    setPlayerSeek(seek);
    audio.currentTime = seek;
  };

  const onEpisode = (episode: Episode): void => {
    if (episode !== null) {
      load(episode);
      onToggle();
    }
  };

  return {
    idle,
    loading,
    ready,
    playing,
    paused,
    stopped,
    episode,
    seek: playerSeek,
    volume,
    muted,
    rate,
    loop,
    ended: episodeHasEnded,
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
};

export default usePlayer;
