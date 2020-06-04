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

// const file =
//"https://traffic.omny.fm/d/clips/a858b0a5-e5e6-4a14-9717-a70b010facc1/7d7ad78a-afa7-4af6-b0ab-a7bf00d33acc/af860e31-b511-4f3b-8eb7-a95101178792/audio.mp3?utm_source=Podcast&in_playlist=63b76787-ee2e-44cd-86e1-a8c500bf6f64&t=1536141755";

const Player: React.FC = () => {
  return (
    <PlayerContainer>
      <Podcast currentPodcast={currentPodcast} />
      <Controls playing={false} />
      <Volume />
    </PlayerContainer>
  );
};

export default Player;
