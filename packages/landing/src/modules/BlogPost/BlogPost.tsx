import React from "react";
import { Stack, Divider } from "@chakra-ui/react";

import Header from "./Header/Header";
import Content from "./Content/Content";

interface Props {
  readingTime: {
    text: string;
  };
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    picture: string;
  };
  ogImage: {
    url: string;
  };
  content: React.ReactNode;
  slug: string;
}

const BlogPost = ({
  readingTime,
  title,
  description,
  date,
  author,
  ogImage,
  content,
}: Props) => (
  <Stack
    direction="column"
    spacing="50px"
    maxW="800px"
    justifySelf="center"
    alignItems="center"
    justifyItems="center"
  >
    <Header
      readingTime={readingTime}
      title={title}
      description={description}
      date={date}
      author={author}
      ogImage={ogImage}
    />
    <Content content={content} />
    <Divider orientation="horizontal" />
  </Stack>
);

export default BlogPost;
