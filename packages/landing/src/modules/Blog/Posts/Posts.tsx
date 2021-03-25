import React from "react";
import { Stack } from "@chakra-ui/react";

import Post from "src/components/Blog/Post/Post";

const Posts = () => {
  return (
    <Stack direction={["column"]} spacing="50px">
      <Post />
      <Post />
      <Post />
      <Post />
    </Stack>
  );
};

export default Posts;
