import React from "react";
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
  name: "WTF with Marc Maron",
  episode: "EP 928 - Trying to redesign this app",
};

const Player: React.FC = () => {
  const {
    ready,
    loading,
    error,
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
  } = useRehawk({
    src,
    autoplay: false,
    html5: true,
  });

  if (ready) console.log("ready!", ready);
  if (loading) console.log("loading!", loading);
  if (error) console.log("error!", error);

  return (
    <PlayerContainer>
      <Podcast currentPodcast={currentPodcast} />
      <Controls
        playing={playing}
        seek={seek}
        duration={duration}
        onPlay={onPlay}
        onPause={onPause}
        onSeek={onSeek}
      />
      <Volume
        volume={volume}
        muted={muted}
        onVolume={onVolume}
        onMute={onMute}
      />
    </PlayerContainer>
  );
};

export default Player;
