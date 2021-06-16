import React, { memo } from "react";
import { Stack, Heading, Divider, Grid } from "@chakra-ui/react";

import PodcastItemWithAvatar from "src/components/Podcast/PodcastItemWithAvatar/PodcastItemWithAvatar";

import { TrendingItem } from "src/queries/types";

import useColor from "src/hooks/useColor";

interface Props {
  title: string;
  feeds: Array<TrendingItem>;
}

const PodcastsWithOnlyAvatarList = ({ title, feeds }: Props) => {
  return (
    <Stack direction="column" spacing="20px">
      <Stack direction="column" spacing="5px">
        <Heading as="h1" fontSize={16} fontWeight="600" textAlign="start">
          {title}
        </Heading>
        <Divider
          orientation="horizontal"
          borderBottomWidth="1px"
          borderBottomColor={useColor("2C2E34", "#f2f2f2")}
        />
      </Stack>

      <Grid templateColumns="repeat(auto-fill, 140px)" gap={5}>
        {feeds.map(({ id, image }: TrendingItem) => (
          <PodcastItemWithAvatar key={id} id={id} image={image} />
        ))}
      </Grid>
    </Stack>
  );
};

export default memo(PodcastsWithOnlyAvatarList);
