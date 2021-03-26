import React from "react";
import NextLink from "next/link";
import { Text, Link, Stack, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import { ArticleItemContainer } from "./ArticleItem.styles";

import { ArticleType } from "src/types";

interface Props {
  article: ArticleType;
}

const ArticleItem = ({ article }: Props) => (
  <ArticleItemContainer>
    <Image
      src={article.ogImage.url}
      alt="Image for article"
      width="100%"
      height="250px"
      layout="responsive"
      lazy="loading"
      borderRadius="5px"
      objectFit="cover"
    />

    <Stack direction={["column"]} spacing="10px">
      <NextLink as={`/blog/${article.slug}`} href="/blog/[slug]">
        <Link
          aria-label="link"
          href="/blog"
          color="#101010"
          fontSize={36}
          letterSpacing="-0.03em"
          textAlign="start"
          fontWeight="600"
        >
          {article.title}
        </Link>
      </NextLink>

      <Text
        color="#6F6F6F"
        fontSize={16}
        lineHeight="30px"
        fontWeight="300"
        textAlign="start"
      >
        {article.description}
      </Text>

      <Stack direction="row" spacing="10px">
        <Text
          color="#6F6F6F"
          fontSize={16}
          lineHeight="30px"
          fontWeight="300"
          textAlign="start"
        >
          {article.timeReading.text}
        </Text>

        <Text
          color="#6F6F6F"
          fontSize={16}
          lineHeight="30px"
          fontWeight="300"
          textAlign="start"
        >
          •
        </Text>

        <Text
          color="#6F6F6F"
          fontSize={16}
          lineHeight="30px"
          fontWeight="300"
          textAlign="start"
        >
          {article.date}
        </Text>
      </Stack>

      <NextLink as={`/blog/${article.slug}`} href="/blog/[slug]">
        <Link aria-label="link" href="/blog" color="#6f6f6f">
          Read article <ArrowForwardIcon />
        </Link>
      </NextLink>
    </Stack>
  </ArticleItemContainer>
);

export default ArticleItem;
