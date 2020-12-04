import { useState, useEffect, useCallback, useRef } from "react";
import { useMachine } from "@xstate/react";

import PlayerMachine from "./PlayerMachine";

import { LoadAudioOptions } from "src/player/Player.types";

const useAudioPlayer = () => {
  const [current, send] = useMachine(PlayerMachine);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const idle = current.matches("idle");
  const loading = current.matches("loading");
  const ready = current.matches("ready");
  const error = current.context.error;
  const playing = current.matches("ready.playing");
  const paused = current.matches("ready.paused");
  const stopped = current.matches("ready.stopped");
  const muted = current.context.muted;
  const loop = current.context.loop;

  const rehawkRef = useRef<HTMLAudioElement | null>();
  const previousPlayerRef = useRef<HTMLAudioElement | null>();

  const newAudio = useCallback(
    ({
      src,
      volume = 0.5,
      muted = false,
      loop = false,
      rate = 1.0,
    }: LoadAudioOptions): HTMLAudioElement => {
      const audioElement = new Audio(src);
      audioElement.autoplay = true;
      audioElement.volume = volume;
      audioElement.muted = muted;
      audioElement.loop = loop;
      audioElement.playbackRate = rate;
      return audioElement;
    },
    []
  );

  const load = useCallback(
    ({ src, volume, muted, loop, rate }: LoadAudioOptions) => {
      if (rehawkRef.current) {
        if (rehawkRef.current.currentSrc === src) return;

        if (idle) {
          previousPlayerRef.current = rehawkRef.current;
          previousPlayerRef.current.addEventListener("loadeddata", () => {
            previousPlayerRef.current = null;
          });
        }

        rehawkRef.current.addEventListener("playing", () => {
          rehawkRef.current?.pause();
          rehawkRef.current = null;
        });
      }

      const newAudioElement = newAudio({
        src,
        volume,
        muted,
        loop,
        rate,
      });

      newAudioElement.addEventListener("abort", () =>
        send({ type: "ERROR", error: "Error" })
      );
      newAudioElement.addEventListener("error", () =>
        send({ type: "ERROR", error: "Error" })
      );
      newAudioElement.addEventListener("loadstart", () => {
        send({ type: "LOADING" });
      });
      newAudioElement.addEventListener("loadeddata", () => {
        send({
          type: "READY",
          muted,
          loop,
          error,
        });
        send("PLAY");
      });
      newAudioElement.addEventListener("play", () => send("PLAY"));
      newAudioElement.addEventListener("pause", () => send("PAUSE"));

      setAudio(newAudioElement);
      rehawkRef.current = newAudioElement;
    },
    // eslint-disable-next-line
    [newAudio]
  );

  useEffect(() => {
    return () => {
      if (!rehawkRef.current) return;
      if (rehawkRef.current) {
        rehawkRef.current.pause();
        rehawkRef.current.removeAttribute("src");
      }
    };
  }, []);

  return {
    audio,
    load,
    idle,
    loading,
    ready,
    error,
    playing,
    paused,
    stopped,
    muted,
    loop,
    send,
  };
};

export default useAudioPlayer;
