import * as React from "react";
import { useRehawk } from "rehawk";

import Podcast from "./Podcast/Podcast";
import Controls from "./Controls/Controls";
import Volume from "./Volume/Volume";

import { PlayerContainer } from "./Player.styles";

const src =
  "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3";

const currentPodcast = {
  avatar:
    "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  name:
    "WTF with Marc Maron WTF with Marc Maron WTF with Marc Maron WTF with Marc Maron",
  episode:
    "EP 928 - Trying to redesign this app, EP 928 - Trying to redesign this app",
};

const Player = () => {
  const {
    ready,
    playing,
    seek,
    duration,
    volume,
    muted,
    onPlay,
    onPause,
    onSeek,
    onVolume,
    onMute,
    onBackward,
    onForward,
  } = useRehawk({
    src,
    preload: true,
    volume: 1.0,
    rate: 1.0,
    autoplay: false,
  });

  return (
    <PlayerContainer>
      <Podcast ready={ready} currentPodcast={currentPodcast} />
      <Controls
        ready={ready}
        playing={playing}
        seek={seek}
        duration={duration}
        onPlay={onPlay}
        onPause={onPause}
        onSeek={onSeek}
        onBackward={onBackward}
        onForward={onForward}
      />
      <Volume
        ready={ready}
        volume={volume}
        muted={muted}
        onVolume={onVolume}
        onMute={onMute}
      />
    </PlayerContainer>
  );
};

export default Player;
