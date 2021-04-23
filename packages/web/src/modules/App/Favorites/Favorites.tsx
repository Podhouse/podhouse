import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { Stack } from "@chakra-ui/react";

import FavoriteItem from "src/components/FavoriteItem/FavoriteItem";

import { FavoritesContainer } from "./Favorites.styles";

const Favorites = () => (
  <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
    <Stack direction="column" spacing="20px">
      <FavoriteItem
        id={745392}
        image="https://image.simplecastcdn.com/images/521189a6-a4f6-404d-85cf-455a989a10a4/abbe2292-3127-41d5-b418-f43bf7ffb7b5/3000x3000/serial-itunes-logo.png?aid=rss_feed"
        title="A new from Serial!"
        description="Serial is a podcast from the creators of This American Life, hosted by Sarah Koenig. Serial unfolds one story - a true story - over the course of a whole season. "
        datePublished={1617098400}
        duration={225}
      />

      <FavoriteItem
        id={745392}
        image="https://image.simplecastcdn.com/images/521189a6-a4f6-404d-85cf-455a989a10a4/abbe2292-3127-41d5-b418-f43bf7ffb7b5/3000x3000/serial-itunes-logo.png?aid=rss_feed"
        title="A new from Serial!"
        description="Serial is a podcast from the creators of This American Life, hosted by Sarah Koenig. Serial unfolds one story - a true story - over the course of a whole season. "
        datePublished={1617098400}
        duration={225}
      />

      <FavoriteItem
        id={745392}
        image="https://image.simplecastcdn.com/images/521189a6-a4f6-404d-85cf-455a989a10a4/abbe2292-3127-41d5-b418-f43bf7ffb7b5/3000x3000/serial-itunes-logo.png?aid=rss_feed"
        title="A new from Serial!"
        description="Serial is a podcast from the creators of This American Life, hosted by Sarah Koenig. Serial unfolds one story - a true story - over the course of a whole season. "
        datePublished={1617098400}
        duration={225}
      />
    </Stack>
  </Scrollbars>
);

export default Favorites;
