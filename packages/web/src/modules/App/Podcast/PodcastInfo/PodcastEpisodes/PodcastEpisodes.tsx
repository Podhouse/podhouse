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
    first: { type: "Int", defaultValue: 25 }
    before: { type: "String" }
    last: { type: "Int" }
  )
  @refetchable(queryName: "PodcastEpisodesPaginationQuery") {
    episodes(after: $after, first: $first, before: $before, last: $last)
      @connection(key: "PodcastEpisodes_episodes") {
      edges {
        node {
          id
          _id
          title
          description
          publishedDate
          link
          image
          audio
          duration
          podcast {
            name
            website
            rss
          }
        }
      }
    }
  }
`;

interface Props {
  readonly podcast: {
    readonly id: string | null;
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

const PodcastEpisodes = ({ podcast, shouldLoadMore }: Props) => {
  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    PodcastEpisodesPaginationQuery,
    any
  >(query, podcast);

  console.log("data: ", data);

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
      {data.episodes.edges.map(({ node }: any) => (
        <EpisodeItem key={node._id} node={node} />
      ))}
    </PodcastEpisodesContainer>
  );
};

export default PodcastEpisodes;
