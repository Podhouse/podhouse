import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  MobilePodcastContainer,
  MobilePodcastImage,
} from "./MobilePodcast.styles";

const MobilePodcast = () => {
  return (
    <MobilePodcastContainer>
      <MobilePodcastImage
        as={ReactRouterLink}
        to="/"
        src="https://yt3.ggpht.com/ytc/AAUvwnjtZ27pIbLoaHBRgDTeCSZ5yiH7CWqKbjhpL-TgLA=s900-c-k-c0x00ffffff-no-rj"
        lazy="loading"
      />
    </MobilePodcastContainer>
  );
};

export default MobilePodcast;
