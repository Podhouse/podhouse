import React from "react";
import { Stack } from "@chakra-ui/react";

import Post from "src/components/Blog/ArticleItem/ArticleItem";

import { ArticleType } from "src/types";

interface Props {
  articles: Array<ArticleType>;
}

const Articles = ({ articles }: Props) => (
  <Stack
    direction="column"
    spacing="50px"
    maxW="800px"
    h="fit-content"
    justifySelf="center"
    alignItems="center"
    justifyItems="center"
  >
    {articles.map((article: ArticleType) => (
      <Post key={article.slug} article={article} />
    ))}
  </Stack>
);

export default Articles;
