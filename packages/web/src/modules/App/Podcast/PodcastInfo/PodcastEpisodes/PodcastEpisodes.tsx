import React, { useCallback } from "react";
import graphql from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay/hooks";
import { FragmentRefs } from "relay-runtime";

import { PodcastEpisodesContainer } from "./PodcastEpisodes.styles";

import { PodcastEpisodesPaginationQuery } from "./__generated__/PodcastEpisodesPaginationQuery.graphql";

import EpisodeItem from "src/components/Podcast/EpisodeItem/EpisodeItem";

const query = graphql`
  fragment PodcastEpisodes_episodes on Podcast
  @argumentDefinitions(
    after: { type: "String" }
    first: { type: "Int", defaultValue: 20 }
    before: { type: "String" }
    last: { type: "Int" }
  )
  @refetchable(queryName: "PodcastEpisodesPaginationQuery") {
    episodes(after: $after, first: $first, before: $before, last: $last)
      @connection(key: "PodcastEpisodes_episodes") {
      edges {
        node {
          _id
          title
          description
          publishedDate
          link
          image
          audio
          duration
          podcast {
            _id
            name
            website
            rss
            appleId
            image
          }
        }
      }
    }
  }
`;

interface Props {
  readonly podcast: {
    readonly _id: string | null;
    readonly name: string | null;
    readonly appleId: number | null;
    readonly author: string | null;
    readonly description: string | null;
    readonly website: string | null;
    readonly rss: string | null;
    readonly image: string | null;
    readonly " $fragmentRefs": FragmentRefs<"PodcastEpisodes_episodes">;
  } | null;
  shouldLoadMore: boolean;
}

type EpisodesNode = {
  readonly node: {
    readonly _id: string;
    readonly title: string | null;
    readonly description: string | null;
    readonly publishedDate: string | null;
    readonly link: string | null;
    readonly image: string | null;
    readonly audio: string | null;
    readonly duration: string | null;
    readonly podcast: {
      readonly _id: string;
      readonly name: string | null;
      readonly website: string | null;
      readonly rss: string | null;
      readonly appleId: number | null;
      readonly image: string | null;
    } | null;
  } | null;
};

const PodcastEpisodes = ({ podcast, shouldLoadMore }: Props) => {
  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    PodcastEpisodesPaginationQuery,
    any
  >(query, podcast);

  const loadMore = useCallback(() => {
    // Don't fetch again if we're already loading the next page
    if (isLoadingNext) return;
    loadNext(10);
  }, [isLoadingNext, loadNext]);

  if (shouldLoadMore === true) loadMore();

  if (Array.isArray(data.episodes.edges) && !data.episodes.edges.length) {
    return <PodcastEpisodesContainer />;
  }

  return (
    <PodcastEpisodesContainer>
      {data.episodes.edges.map(({ node }: EpisodesNode) => (
        <EpisodeItem key={node?._id} node={node} />
      ))}
    </PodcastEpisodesContainer>
  );
};

export default PodcastEpisodes;
