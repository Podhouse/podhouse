import { Link as ReactRouterLink } from "react-router-dom";
import { Interpreter } from "xstate";
import { useSelector } from "@xstate/react";

import {
  MobilePodcastContainer,
  MobilePodcastImage,
} from "./MobilePodcast.styles";

import {
  MachineContext,
  MachineEvent,
} from "src/machines/Player/PlayerMachine.types";

type Props = {
  service: Interpreter<MachineContext, any, MachineEvent>;
};

const MobilePodcast = ({ service }: Props) => {
  const episode = useSelector(service, (state) => state.context.episode);

  return (
    <MobilePodcastContainer>
      <MobilePodcastImage
        to={{
          pathname: `/episode/${episode?.id}`,
          state: { id: episode?.id },
        }}
        href={`/episode/${episode?.id}`}
        as={ReactRouterLink}
        src={episode?.image}
        lazy="loading"
      />
    </MobilePodcastContainer>
  );
};

export default MobilePodcast;
