import React from "react";
import { Link, Box, Stack } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const DesktopPodcast = () => {
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
          as={ReactRouterLink}
          to="/"
          fontWeight="500"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          Implementation with React Query Implementation with React Query
          Implementation with React Query
        </Link>

        <Link as={ReactRouterLink} to="/" fontWeight="300">
          Implementation with React Query
        </Link>
      </Stack>
    </Box>
  );
};

export default DesktopPodcast;
