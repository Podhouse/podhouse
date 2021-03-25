import React from "react";
import readingTime from "reading-time";
import mdxPrism from "mdx-prism";
import renderToString from "next-mdx-remote/render-to-string";
import externalLinks from "remark-external-links";
import hydrate from "next-mdx-remote/hydrate";
import { Text } from "@chakra-ui/react";

import { getLayout } from "src/components/Landing/Landing";

import BlogPost from "src/modules/BlogPost/BlogPost";

import { api } from "src/lib/lib";
import { BlogArticleType } from "src/types";

const components = { Text };

interface Props {
  readingTime: {
    text: string;
  };
  frontMatter: {
    title: string;
    description: string;
    date: string;
    content: string;
    author: {
      name: string;
      picture: string;
    };
    ogImage: {
      url: string;
    };
  };
  slug: string;
  source: any;
  tags: Array<string>;
}

const Index = ({ readingTime, frontMatter, slug, source }: Props) => {
  const content = hydrate(source, { components });

  return (
    <BlogPost
      readingTime={readingTime}
      title={frontMatter.title}
      description={frontMatter.description}
      date={frontMatter.date}
      content={content}
      author={frontMatter.author}
      ogImage={frontMatter.ogImage}
      slug={slug}
    />
  );
};

Index.getLayout = getLayout;

export default Index;

type Params = {
  params: {
    slug: string;
    timeReading: {
      text: string;
    };
  };
};

export async function getStaticProps({ params }: Params) {
  const { content, data } = api.getRawArticleBySlug(params.slug);

  const mdxSource = await renderToString(content, {
    mdxOptions: {
      remarkPlugins: [externalLinks],
      rehypePlugins: [mdxPrism],
    },
    scope: data,
  });

  const tags = data.tags ?? [];

  return {
    props: {
      slug: params.slug,
      readingTime: readingTime(content),
      source: mdxSource,
      frontMatter: data,
      tags,
    },
  };
}

export async function getStaticPaths() {
  const articles: Array<BlogArticleType> = api.getAllArticles(["slug"]);

  return {
    paths: articles.map((articles) => {
      return {
        params: {
          slug: articles.slug,
        },
      };
    }),
    fallback: false,
  };
}
