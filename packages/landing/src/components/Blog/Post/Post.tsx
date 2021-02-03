import React from "react";
import { Heading, Text, Link } from "@chakra-ui/react";

import { PostContainer, PostImage } from "./Post.styles";

const Post = () => (
  <PostContainer>
    <PostImage
      src="https://source.unsplash.com/assets/photo-1433959352364-9314c5b6eb0b-ef3fe6b0fe97031bbaf5d39b9e9382c4662a45ab1b8bb0f395cb9ddf62d4739a.jpg"
      width="100%"
      height="190px"
    />
    <Heading
      color="#101010"
      as="h2"
      fontSize={48}
      letterSpacing="-0.03em"
      textAlign="start"
    >
      What happened to podcasts?
    </Heading>
    <Text color="#101010" lineHeight="30px" textAlign="start">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus rutrum
      sollicitudin placerat id nisl, sed turpis. Viverra aliquam nibh
      consectetur sed turpis urna.
    </Text>
    <Text color="#101010" lineHeight="30px" textAlign="start">
      December 23, 2020
    </Text>
    <Link>Read article</Link>
  </PostContainer>
);

export default Post;
