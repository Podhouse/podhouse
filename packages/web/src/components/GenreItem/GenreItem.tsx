import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

import { Genre } from "src/utils/genres";

const GenreItem = ({ href, name, primaryGenre }: Genre) => (
  <ReactRouterLink
    to={{ pathname: href, state: { primaryGenre: primaryGenre } }}
  >
    <Flex
      w="140px"
      h="140px"
      borderRadius="5px"
      alignItems="center"
      justifyContent="center"
    >
      <Text>{name}</Text>
    </Flex>
  </ReactRouterLink>
);

export default GenreItem;
