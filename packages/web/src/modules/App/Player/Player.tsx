import React from "react";

import Podcast from "./Podcast/Podcast";
import Controls from "./Controls/Controls";
import Volume from "./Volume/Volume";

import { PlayerContainer } from "./Player.styles";

const currentPodcast = {
  avatar:
    "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  name: "WTF with Marc Maron",
  episode: "EP 928 - Trying to redesign this app",
};

const Player: React.FC = () => (
  <PlayerContainer>
    <Podcast currentPodcast={currentPodcast} />
    <Controls playing={false} />
    <Volume volume={100} mute={false} />
  </PlayerContainer>
);

export default Player;
