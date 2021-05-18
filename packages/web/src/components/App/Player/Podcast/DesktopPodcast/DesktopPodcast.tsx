import React from "react";
import { Link, Box, Stack } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import { usePlayerContext } from "src/machines/Player/PlayerContext";

const DesktopPodcast = () => {
  const { episode } = usePlayerContext();

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
            pathname: `/episode/${episode.id}`,
            state: { id: episode.id },
          }}
          href={`/episode/${episode.id}`}
          as={ReactRouterLink}
          fontWeight="500"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          {episode.title}
        </Link>

        <Link as={ReactRouterLink} to="/" fontWeight="300">
          {episode.title}
        </Link>
      </Stack>
    </Box>
  );
};

export default DesktopPodcast;
