import React from "react";
import NextLink from "next/link";

import Link from "src/system/Link/Link";
import Paragraph from "src/system/Paragraph/Paragraph";

import {
  PodcastItemWithDetailsContainer,
  PodcastItemWithDetailsAvatar,
  PodcastItemInnerContainer,
} from "./PodcastItemWithDetails.styles";

import { PodcastItemWithDetailsProps } from "./PodcastItemWithDetails.types";

const PodcastItemWithDetails = ({ node }: PodcastItemWithDetailsProps) => {
  const { name, author, image } = node;

  const imageAlt = `${name} image`;

  return (
    <PodcastItemWithDetailsContainer>
      <NextLink href="/app/podcast/[podcast]" as="/app/podcast/123">
        <Link variant="secondary" size="normal" href="/app/podcast/[podcast]">
          <PodcastItemWithDetailsAvatar src={image} alt={imageAlt} />
        </Link>
      </NextLink>

      <PodcastItemInnerContainer>
        <NextLink href="/app/podcast/[podcast]" as="/app/podcast/123">
          <Link
            textAlign="start"
            variant="secondary"
            size="normal"
            href="/app/podcast/123"
          >
            {name}
          </Link>
        </NextLink>

        <Paragraph textAlign="start" variant="secondary" size="normal">
          {author}
        </Paragraph>
      </PodcastItemInnerContainer>
    </PodcastItemWithDetailsContainer>
  );
};

export default PodcastItemWithDetails;
