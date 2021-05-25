import { useState, useEffect, useRef } from "react";
import { useMachine } from "@xstate/react";
import raf from "raf";

import PlayerMachine from "./PlayerMachine";

import {
  PlayerMachineContext,
  PlayerMachineEvents,
  Episode,
  UseAudioPlayer,
} from "./Player.types";

const useAudioPlayer: UseAudioPlayer = () => {
  const [state, send] = useMachine<PlayerMachineContext, PlayerMachineEvents>(
    PlayerMachine,
    { devTools: process.env.NODE_ENV === "development" }
  );

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const playerRef = useRef<HTMLAudioElement | null>(null);

  const [seek, setSeek] = useState<number>(0);
  const playerSeekRef = useRef<number>(0);

  const idle: boolean = state.matches("idle");
  const loading: boolean = state.matches("loading");
  const ready: boolean = state.matches("ready");
  const playing: boolean = state.matches("ready.playing");
  const paused: boolean = state.matches("ready.paused");
  const stopped: boolean = state.matches("ready.stopped");

  const episode: Episode | null = state.context.episode;
  const duration: number = state.context.duration;
  const volume: number = state.context.volume;
  const rate: number = state.context.rate;
  const muted: boolean = state.context.muted;
  const loop: boolean = state.context.loop;

  const loadAudio = async (episode: Episode): Promise<HTMLAudioElement> => {
    const audioElement: HTMLAudioElement = await new Audio(
      episode.enclosureUrl
    );

    audioElement.autoplay = true;
    audioElement.volume = 0.5;
    audioElement.muted = false;
    audioElement.loop = false;
    audioElement.playbackRate = 1.0;

    audioElement.addEventListener("error", () => send({ type: "ERROR" }));
    audioElement.addEventListener("loadstart", () => {
      send({ type: "LOADING" });
    });
    audioElement.addEventListener("loadeddata", () => {
      send({
        type: "READY",
        episode,
        duration: audioElement.duration,
      });
    });
    audioElement.addEventListener("ended", () => {
      send("END");
    });

    return audioElement;
  };

  const onLoad = async (episodeToLoad: Episode) => {
    if (playerRef.current) {
      await loadAnotherEpisode(episodeToLoad);
    } else {
      const newAudio: HTMLAudioElement = await loadAudio(episodeToLoad);
      setAudio(newAudio);
      playerRef.current = newAudio;
    }
  };

  const loadAnotherEpisode = (episode: Episode) => {
    if (playerRef.current) {
      const currentSrc: string = playerRef.current.currentSrc;

      if (currentSrc === episode.enclosureUrl) {
        return;
      }

      send("RELOAD");
      audio?.setAttribute("src", episode.enclosureUrl);
      audio?.load();
      audio?.play();
    } else return;
  };

  useEffect(() => {
    const animate = () => {
      const seek = audio?.currentTime;
      setSeek(seek as number);
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
  }, [audio, playing]);

  const onToggle = () => {
    if (!audio) return;
    if (ready || paused) {
      audio.play();
      send("PLAY");
    }
    if (playing) {
      audio.pause();
      send("PAUSE");
    }
  };

  const onPlay = () => {
    if (!audio) return;
    send("PLAY");
    audio.play();
  };

  const onPause = () => {
    if (!audio) return;
    send("PAUSE");
    audio.pause();
  };

  const onStop = () => {
    if (!audio) return;
    send("STOP");
    audio.pause();
    audio.currentTime = 0;
    setSeek(0);
  };

  const onMute = () => {
    if (!audio) return;
    send("MUTE");
    audio.muted = !muted;
  };

  const onLoop = () => {
    if (!audio) return;
    send("LOOP");
    audio.loop = !loop;
  };

  const onVolume = (value: number) => {
    if (!audio) return;
    send({ type: "VOLUME", volume: value });
    audio.volume = value;
  };

  const onRate = (value: string) => {
    if (!audio) return;
    const rate: number = parseFloat(value);
    audio.playbackRate = rate;
    send({ type: "RATE", rate });
  };

  const onSeek = (value: number) => {
    if (!audio) return;
    setSeek(value);
    audio.currentTime = value;
  };

  const onForward = () => {
    if (!audio || audio.ended) return;
    const newSeek: number = seek + 15;
    setSeek(newSeek);
    audio.currentTime = newSeek;
  };

  const onBackward = () => {
    if (!audio || audio.ended) return;
    const newSeek: number = seek - 15;
    setSeek(newSeek);
    audio.currentTime = newSeek;
  };

  return {
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
    ended: audio ? audio.ended : false,
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
};

export default useAudioPlayer;
