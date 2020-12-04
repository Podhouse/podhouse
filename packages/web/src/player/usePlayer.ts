import { useState, useEffect, useRef, ChangeEvent } from "react";
import raf from "raf";

import { UsePlayerOptions } from "src/player/Player.types";
import { PlayerEpisode } from "./Player.types";

import useAudioPlayer from "./useAudioPlayer";

const usePlayer = ({
  volume = 0.5,
  muted = false,
  loop = false,
  rate = 1.0,
  onReady = () => {},
  onPlaying = () => {},
  onPaused = () => {},
  onStopped = () => {},
  onMuted = () => {},
  onLooped = () => {},
  onEnded = () => {},
}: UsePlayerOptions) => {
  const {
    audio,
    load,
    initial,
    loading,
    ready,
    playing: playerPlaying,
    paused: playerPaused,
    stopped: playerStopped,
    muted: playerMuted,
    loop: playerLoop,
    send,
  } = useAudioPlayer();

  const hasEnded = audio?.ended;
  if (hasEnded) send("END");

  const [episode, setEpisode] = useState<PlayerEpisode | null>(null);
  const [playerVolume, setPlayerVolume] = useState<number>(volume);
  const [playerRate, setPlayerRate] = useState<number>(rate);
  const [playerSeek, setPlayerSeek] = useState<number>(0);

  const playerSeekRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      const seek = audio?.currentTime;
      setPlayerSeek(seek as number);
      playerSeekRef.current = raf(animate);
    };

    if (audio && playerPlaying) {
      playerSeekRef.current = raf(animate);
    }

    return () => {
      if (playerSeekRef.current) {
        raf.cancel(playerSeekRef.current);
      }
    };
  }, [audio, playerPlaying, playerStopped]);

  useEffect(() => {
    if (ready) {
      onReady();
    }
    // eslint-disable-next-line
  }, [ready]);

  useEffect(() => {
    if (playerPlaying) {
      onPlaying();
    }
    // eslint-disable-next-line
  }, [playerPlaying]);

  useEffect(() => {
    if (playerPaused) {
      onPaused();
    }
    // eslint-disable-next-line
  }, [playerPaused]);

  useEffect(() => {
    if (playerStopped) {
      onStopped();
    }
    // eslint-disable-next-line
  }, [playerStopped]);

  useEffect(() => {
    if (playerMuted) {
      onMuted();
    }
    // eslint-disable-next-line
  }, [playerMuted]);

  useEffect(() => {
    if (playerLoop) {
      onLooped();
    }
    // eslint-disable-next-line
  }, [playerLoop]);

  useEffect(() => {
    if (hasEnded) {
      onEnded();
      setEpisode(null);
    }
    // eslint-disable-next-line
  }, [hasEnded]);

  const onToggle = () => {
    if (!audio) return;
    if (ready) audio.play();
    if (playerPlaying) audio.pause();
  };

  const onPlay = () => {
    if (!audio) return;
    audio.play();
  };

  const onPause = () => {
    if (!audio) return;
    audio.pause();
  };

  const onStop = () => {
    if (!audio) return;
    audio.pause();
    send("STOP");
    setPlayerSeek(0);
    audio.currentTime = 0;
  };

  const onMute = () => {
    if (!audio) return;
    audio.muted = !playerMuted;
    send("MUTE");
  };

  const onLoop = () => {
    if (!audio) return;
    audio.loop = !playerLoop;
    send("LOOP");
  };

  const onVolume = (e: ChangeEvent<HTMLInputElement>) => {
    if (!audio) return;
    const volume = parseFloat(e.target.value);
    setPlayerVolume(volume);
    audio.volume = volume;
  };

  const onRate = (value: any) => {
    if (!audio) return;
    const rate = parseFloat(value);
    setPlayerRate(rate);
    audio.playbackRate = rate;
  };

  const onSeek = (e: ChangeEvent<HTMLInputElement>) => {
    if (!audio) return;
    const seek = parseFloat(e.target.value);
    setPlayerSeek(seek);
    audio.currentTime = seek;
  };

  const onForward = (value: number = 15) => {
    if (!audio) return;
    if (hasEnded) return;
    const seek = playerSeek + value;
    setPlayerSeek(seek);
    audio.currentTime = seek;
  };

  const onBackward = (value: number = 15) => {
    if (!audio) return;
    if (initial) return;
    const seek = playerSeek - value;
    setPlayerSeek(seek);
    audio.currentTime = seek;
  };

  const onEpisode = (newEpisode: PlayerEpisode) => {
    if (newEpisode !== null) {
      load({ src: newEpisode.audio, volume, muted, loop, rate });
      setEpisode(newEpisode);
    }
  };

  return {
    initial,
    loading,
    ready,
    playing: playerPlaying,
    paused: playerPaused,
    stopped: playerStopped,
    episode,
    seek: playerSeek,
    volume: playerVolume,
    muted: playerMuted,
    rate: playerRate,
    loop: playerLoop,
    ended: hasEnded,
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
