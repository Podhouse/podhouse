import React from "react";
import { Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import DesktopPodcast from "./DesktopPodcast/DesktopPodcast";
import MobilePodcast from "./MobilePodcast/MobilePodcast";

import useWindowSize from "src/hooks/useWindowSize";

interface Props {
  ready: boolean;
  episode: any;
}

const Podcast = ({ ready, episode }: Props) => {
  const { innerWidth } = useWindowSize();

  const renderPodcast = () => {
    if (innerWidth >= 800) {
      return <DesktopPodcast />;
    } else {
      return <MobilePodcast />;
    }
  };

  return renderPodcast();
};

export default Podcast;
