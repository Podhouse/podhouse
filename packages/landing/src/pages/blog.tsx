import React from "react";

import { getLayout } from "src/components/Landing/Landing";

import Blog from "src/modules/Blog/Blog";

import { api } from "src/lib/lib";

import { BlogArticleType, ArticleType } from "src/types";

interface Props {
  articles: Array<ArticleType>;
}

const Index = ({ articles }: Props) => <Blog articles={articles} />;

Index.getLayout = getLayout;

export const getStaticProps = async () => {
  const articles: Array<BlogArticleType> = api.getAllArticles([
    "slug",
    "title",
    "description",
    "date",
    "coverImage",
    "author",
    "excerpt",
    "timeReading",
    "ogImage",
    "content",
  ]);

  return {
    props: { articles },
  };
};

export default Index;
