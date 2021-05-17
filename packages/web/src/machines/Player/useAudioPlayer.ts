import { useState, useEffect, useRef } from "react";
import { useMachine } from "@xstate/react";

import PlayerMachine from "./PlayerMachine";

import { PlayerMachineContext, PlayerMachineEvents } from "./Player.types";

const useAudioPlayer = () => {
  const [current, send] = useMachine<PlayerMachineContext, PlayerMachineEvents>(
    PlayerMachine
  );

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const playerRef = useRef<HTMLAudioElement | null>();

  const idle = current.matches("idle");
  const loading = current.matches("loading");
  const ready = current.matches("ready");
  const playing = current.matches("ready.playing");
  const paused = current.matches("ready.paused");
  const stopped = current.matches("ready.stopped");

  const episode = current.context.episode;
  const volume = current.context.volume;
  const rate = current.context.rate;
  const muted = current.context.muted;
  const loop = current.context.loop;

  const createAndSetNewAudioElement = (src: string) => {
    const audioElement = new Audio(src);

    audioElement.autoplay = true;
    audioElement.volume = volume;
    audioElement.muted = muted;
    audioElement.loop = loop;
    audioElement.playbackRate = rate;

    audioElement.addEventListener("abort", () => send({ type: "ERROR" }));
    audioElement.addEventListener("error", () => send({ type: "ERROR" }));
    audioElement.addEventListener("loadstart", () => {
      send({ type: "LOADING" });
    });
    audioElement.addEventListener("loadeddata", () => {
      send({ type: "READY" });
    });
    audioElement.addEventListener("play", () => send("PLAY"));
    audioElement.addEventListener("pause", () => send("PAUSE"));
    audioElement.addEventListener("ended", () => {
      send("END");
    });

    setAudio(audioElement);
    playerRef.current = audioElement;
  };

  const load = (src: string) => {
    if (playerRef.current) {
      if (playerRef.current.currentSrc === src) {
        return;
      } else {
        playerRef.current.pause();
        send("RELOAD");
        playerRef.current.removeAttribute("src");
        playerRef.current = null;
      }
    }

    createAndSetNewAudioElement(src);
  };

  useEffect(() => {
    return () => {
      if (!playerRef.current) {
        return;
      } else {
        playerRef.current.pause();
        playerRef.current.removeAttribute("src");
      }
    };
  }, []);

  return {
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
  };
};

export default useAudioPlayer;
