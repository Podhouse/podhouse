import { useMemo } from "react";
import { Interpreter } from "xstate";
import { useSelector } from "@xstate/react";

import DesktopPodcast from "./DesktopPodcast/DesktopPodcast";
import MobilePodcast from "./MobilePodcast/MobilePodcast";

import useWindowSize from "src/hooks/useWindowSize";

import {
  MachineContext,
  MachineEvent,
} from "src/machines/Player/PlayerMachine.types";

type Props = {
  service: Interpreter<MachineContext, any, MachineEvent>;
};

const Podcast = ({ service }: Props) => {
  const { innerWidth } = useWindowSize();

  if (innerWidth >= 800) {
    return <DesktopPodcast service={service} />;
  } else {
    return <MobilePodcast service={service} />;
  }
};

export default Podcast;
