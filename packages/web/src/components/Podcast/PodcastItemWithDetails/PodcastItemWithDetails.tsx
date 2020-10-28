import React from "react";
import NextLink from "next/link";

import {
  PodcastItemWithDetailsContainer,
  PodcastItemWithDetailsAvatar,
  PodcastItemName,
  PodcastItemAuthor,
} from "./PodcastItemWithDetails.styles";

import { PodcastItemWithDetailsProps } from "./PodcastItemWithDetails.types";

import Link from "src/system/Link/Link";

const PodcastItemWithDetails = ({ podcast }: PodcastItemWithDetailsProps) => {
  const { name, author, avatar } = podcast;

  const imageAlt = `${name} avatar`;

  return (
    <PodcastItemWithDetailsContainer>
      <NextLink href="/app/podcast/[podcast]" as="/app/podcast/123">
        <Link variant="secondary" size="normal" href="/app/podcast/[podcast]">
          <PodcastItemWithDetailsAvatar src={avatar} alt={imageAlt} />
        </Link>
      </NextLink>

      <NextLink href="/app/podcast/[podcast]" as="/app/podcast/123">
        <PodcastItemName
          variant="secondary"
          size="normal"
          href="/app/podcast/123"
        >
          {name}
        </PodcastItemName>
      </NextLink>

      <PodcastItemAuthor variant="secondary" size="normal">
        {author}
      </PodcastItemAuthor>
    </PodcastItemWithDetailsContainer>
  );
};

export default PodcastItemWithDetails;
