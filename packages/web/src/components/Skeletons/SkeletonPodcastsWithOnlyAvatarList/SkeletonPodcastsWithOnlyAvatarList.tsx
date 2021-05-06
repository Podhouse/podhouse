import React from "react";
import { Divider, Skeleton, Stack, Grid } from "@chakra-ui/react";

const SkeletonPodcastsWithOnlyAvatarList = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Stack direction="column" spacing="20px" p="20px">
      <Stack direction="column" spacing="5px">
        <Skeleton width="120px" height="30px" />
        <Divider variant="solid" orientation="horizontal" />
      </Stack>

      <Grid templateColumns="repeat(auto-fill, 140px)" gap={5}>
        {array.map((item) => (
          <Skeleton key={item} width="140px" height="140px" />
        ))}
      </Grid>
    </Stack>
  );
};

export default SkeletonPodcastsWithOnlyAvatarList;
