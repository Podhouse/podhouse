import React from "react";
import { useRehawk } from "rehawk";

import { PlayerContainer } from "./Player.styles";

import Podcast from "./Podcast/Podcast";
import Controls from "./Controls/Controls";
import RightControls from "./RightControls/RightControls";

const src =
  "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3";

const currentPodcast = {
  avatar:
    "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  name: "WTF with Marc Maron Podcast",
  episode: "Episode 1137 - John Legend",
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

      <RightControls
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
