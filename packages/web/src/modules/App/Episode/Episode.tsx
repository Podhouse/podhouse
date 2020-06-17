import React from "react";
import Scrollbars from "react-custom-scrollbars";

import Button from "../../../system/Button/Button";

import {
  EpisodeContainer,
  EpisodeHeader,
  EpisodeAvatar,
  EpisodeDetailsContainer,
  EpisodeName,
  EpisodeAuthor,
  EpisodeDescription,
  EpisodeListenButtonContainer,
} from "./Episode.styles";

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

const Episode = () => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <EpisodeContainer>
      <EpisodeHeader>
        <EpisodeAvatar src={avatar} />

        <EpisodeDetailsContainer>
          <EpisodeName>
            A Fantasy of Fashion: Articles of Interest #7
          </EpisodeName>
          <EpisodeAuthor href="/app/podcast/123">99% Invisible</EpisodeAuthor>
          <EpisodeDescription>
            Design is everywhere in our lives, perhaps most importantly in the
            places where we've just stopped noticing. 99% Invisible is a weekly
            exploration of the process and power of design and architecture.
            From award winning producer Roman Mars. Learn more at
            99percentinvisible.org. A proud member of Radiotopia, from PRX.
            Learn more at radiotopia.fm.
          </EpisodeDescription>
        </EpisodeDetailsContainer>

        <EpisodeListenButtonContainer>
          <Button type="button" width={200} height={40}>
            Listen
          </Button>
        </EpisodeListenButtonContainer>
      </EpisodeHeader>
    </EpisodeContainer>
  </Scrollbars>
);

export default Episode;
