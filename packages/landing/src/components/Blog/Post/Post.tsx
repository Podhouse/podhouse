import React from "react";
import { Text, Link, Stack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import { PostContainer, PostImage } from "./Post.styles";

const Post = () => (
  <PostContainer>
    <PostImage
      src="/post-image.jpeg"
      alt="Post image"
      width="100%"
      height="250px"
      layout="responsive"
      lazy="loading"
    />

    <Stack direction={["column"]} spacing="10px">
      <Link
        color="#101010"
        fontSize={36}
        letterSpacing="-0.03em"
        textAlign="start"
        fontWeight="600"
        href="#"
      >
        What happened to podcasts?
      </Link>

      <Text
        color="#6F6F6F"
        fontSize={16}
        lineHeight="30px"
        fontWeight="300"
        textAlign="start"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus rutrum
        sollicitudin placerat id nisl, sed turpis.
      </Text>

      <Text
        color="#6F6F6F"
        fontSize={16}
        lineHeight="30px"
        fontWeight="300"
        textAlign="start"
      >
        December 23, 2020
      </Text>

      <Link href="#" color="#6f6f6f">
        Read article <ArrowForwardIcon />
      </Link>

      {/* <Button
        type="button"
        variant="ghost"
        aria-label="Read article"
        rightIcon={<ArrowForwardIcon />}
        size="md"
        onClick={() => { }}
        color="#6F6F6F"
        fontWeight="400"
        width="fit-content"
      >
        Read article
      </Button> */}
    </Stack>
  </PostContainer>
);

export default Post;
