import React from "react";
import { Stack, Heading, Divider, Grid } from "@chakra-ui/react";

import PodcastItemWithAvatar from "src/components/Podcast/PodcastItemWithAvatar/PodcastItemWithAvatar";

import { TrendingItem } from "src/queries/types";

interface Props {
  title: string;
  feeds: Array<TrendingItem>;
}

const PodcastsWithOnlyAvatarList = ({ title, feeds }: Props) => {
  return (
    <Stack direction="column" spacing="20px">
      <Stack direction="column" spacing="5px">
        <Heading
          as="h1"
          fontSize={16}
          fontWeight="600"
          letterSpacing="-0.03em"
          lineHeight="30px"
          textAlign="start"
        >
          {title}
        </Heading>
        <Divider variant="light" orientation="horizontal" />
      </Stack>

      <Grid templateColumns="repeat(auto-fill, 140px)" gap={5}>
        {feeds.map(({ id, image }: TrendingItem) => (
          <PodcastItemWithAvatar key={id} id={id} image={image} />
        ))}
      </Grid>
    </Stack>
  );
};

export default PodcastsWithOnlyAvatarList;
