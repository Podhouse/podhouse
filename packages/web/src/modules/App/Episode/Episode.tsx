import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

import Button from "../../../system/Button/Button";

import {
  EpisodeContainer,
  EpisodeHeader,
  EpisodeAvatar,
  EpisodeDetailsContainer,
  EpisodePageTitle,
  EpisodeName,
  EpisodeProdName,
  EpisodeDescription,
  EpisodeButtonsContainer,
  EpisodeShareButton,
} from "./Episode.styles";

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

const Episode = () => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <EpisodeContainer>
      <EpisodeHeader>
        <EpisodeAvatar avatar={avatar} />

        <EpisodeDetailsContainer>
          <EpisodePageTitle>EPISODE</EpisodePageTitle>
          <EpisodeName>99% Invisible</EpisodeName>
          <EpisodeProdName>NPR</EpisodeProdName>
          <EpisodeDescription>
            Design is everywhere in our lives, perhaps most importantly in the
            places where we've just stopped noticing. 99% Invisible is a weekly
            exploration of the process and power of design and architecture.
            From award winning producer Roman Mars. Learn more at
            99percentinvisible.org. A proud member of Radiotopia, from PRX.
            Learn more at radiotopia.fm.
          </EpisodeDescription>
        </EpisodeDetailsContainer>

        <EpisodeButtonsContainer>
          <Button type="button" width={200}>
            Listen
          </Button>
          <EpisodeShareButton>
            <FontAwesomeIcon icon={faShare} size="1x" color="#000" />
            Share
          </EpisodeShareButton>
        </EpisodeButtonsContainer>
      </EpisodeHeader>
    </EpisodeContainer>
  </Scrollbars>
);

export default Episode;
