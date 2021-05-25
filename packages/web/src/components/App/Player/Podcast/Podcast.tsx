import React from "react";

import DesktopPodcast from "./DesktopPodcast/DesktopPodcast";
import MobilePodcast from "./MobilePodcast/MobilePodcast";

import useWindowSize from "src/hooks/useWindowSize";

import { Episode } from "src/queries/types";

interface Props {
  episode: Episode;
}

const Podcast = ({ episode }: Props) => {
  const { innerWidth } = useWindowSize();

  const renderPodcast = () => {
    if (innerWidth >= 800) {
      return <DesktopPodcast episode={episode} />;
    } else {
      return <MobilePodcast episode={episode} />;
    }
  };

  return renderPodcast();
};

export default Podcast;
