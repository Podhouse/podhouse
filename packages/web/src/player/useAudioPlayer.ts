import { useState, useEffect, useRef } from "react";
import { useMachine } from "@xstate/react";

import PlayerMachine from "./PlayerMachine";

import {
  NewAudioOptions,
  PlayerMachineContext,
  PlayerMachineEvents,
} from "src/player/Player.types";

const useAudioPlayer = () => {
  const [current, send] = useMachine<PlayerMachineContext, PlayerMachineEvents>(
    PlayerMachine
  );
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const playerRef = useRef<HTMLAudioElement | null>();

  const initial = current.matches("initial");
  const loading = current.matches("loading");
  const ready = current.matches("ready");
  const playing = current.matches("ready.playing");
  const paused = current.matches("ready.paused");
  const stopped = current.matches("ready.stopped");

  const muted = current.context.muted;
  const loop = current.context.loop;

  const createNewAudioElement = ({
    src,
    volume = 0.5,
    muted = false,
    loop = false,
    rate = 1.0,
  }: NewAudioOptions): HTMLAudioElement => {
    const audioElement = new Audio(src);
    audioElement.autoplay = true;
    audioElement.volume = volume;
    audioElement.muted = muted;
    audioElement.loop = loop;
    audioElement.playbackRate = rate;
    return audioElement;
  };

  const createAndSetNewAudio = ({
    src,
    volume,
    muted,
    loop,
    rate,
  }: NewAudioOptions) => {
    const newAudioElement = createNewAudioElement({
      src,
      volume,
      muted,
      loop,
      rate,
    });

    newAudioElement.addEventListener("abort", () => console.log("error"));
    newAudioElement.addEventListener("error", () => console.log("error"));
    newAudioElement.addEventListener("loadstart", () => {
      send({ type: "LOADING" });
    });
    newAudioElement.addEventListener("loadeddata", () => {
      send({
        type: "READY",
        muted,
        loop,
      });
    });
    newAudioElement.addEventListener("play", () => send("PLAY"));
    newAudioElement.addEventListener("pause", () => send("PAUSE"));

    setAudio(newAudioElement);
    playerRef.current = newAudioElement;
  };

  const load = ({ src, volume, muted, loop, rate }: NewAudioOptions) => {
    if (playerRef.current) {
      if (playerRef.current.currentSrc === src) return;

      playerRef.current.pause();
      send("RELOAD");
      playerRef.current.removeAttribute("src");
      playerRef.current = null;
    }

    createAndSetNewAudio({ src, volume, muted, loop, rate });
  };

  useEffect(() => {
    return () => {
      if (!playerRef.current) return;
      if (playerRef.current) {
        playerRef.current.pause();
        playerRef.current.removeAttribute("src");
      }
    };
  }, []);

  return {
    audio,
    load,
    initial,
    loading,
    ready,
    playing,
    paused,
    stopped,
    muted,
    loop,
    send,
  };
};

export default useAudioPlayer;
