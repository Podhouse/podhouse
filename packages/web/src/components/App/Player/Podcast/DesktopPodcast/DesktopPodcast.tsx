import { Link, Box, Stack } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Interpreter } from "xstate";
import { useSelector } from "@xstate/react";

import {
  MachineContext,
  MachineEvent,
} from "src/machines/Player/PlayerMachine.types";

type Props = {
  service: Interpreter<MachineContext, any, MachineEvent>;
};

const DesktopPodcast = ({ service }: Props) => {
  const episode = useSelector(service, (state) => state.context.episode);

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      margin="0px"
      gridColumn="1 / 2"
      gridRow="1 / 2"
    >
      <Stack direction="column" spacing="10px">
        <Link
          width="100%"
          maxWidth="300px"
          to={{
            pathname: `/episode/${episode?.id}`,
            state: { id: episode?.id },
          }}
          href={`/episode/${episode?.id}`}
          as={ReactRouterLink}
          fontWeight="500"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          {episode?.title}
        </Link>

        <Link
          width="100%"
          maxWidth="300px"
          to={{
            pathname: `/episode/${episode?.id}`,
            state: { id: episode?.id },
          }}
          href={`/episode/${episode?.id}`}
          as={ReactRouterLink}
          fontWeight="500"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          {episode?.title}
        </Link>
      </Stack>
    </Box>
  );
};

export default DesktopPodcast;
