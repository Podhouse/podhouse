import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { Stack, Heading, Divider } from "@chakra-ui/react";

import FavoriteItem from "src/components/FavoriteItem/FavoriteItem";

import useColor from "src/hooks/useColor";

const Favorites = () => {
  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      <Stack
        direction="column"
        spacing="20px"
        w="100%"
        maxW="1000px"
        p="20px"
        margin="0 auto"
      >
        <Stack direction="column" spacing="5px">
          <Heading
            as="h1"
            fontSize={16}
            fontWeight="600"
            letterSpacing="-0.03em"
            lineHeight="30px"
            textAlign="start"
          >
            Favorites
          </Heading>

          <Divider
            orientation="horizontal"
            borderBottomWidth="1px"
            borderBottomColor={useColor("2C2E34", "#f2f2f2")}
          />
        </Stack>

        <Stack direction="column" spacing="20px"></Stack>
      </Stack>
    </Scrollbars>
  );
};

export default Favorites;
