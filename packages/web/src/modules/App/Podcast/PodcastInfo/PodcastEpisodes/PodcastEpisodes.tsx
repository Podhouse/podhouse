import React, { useCallback } from "react";
import graphql from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay/hooks";

import { PodcastEpisodesContainer } from "./PodcastEpisodes.styles";

import { PodcastEpisodesPaginationQuery } from "./__generated__/PodcastEpisodesPaginationQuery.graphql";
import { PodcastEpisodes_episodes$key } from "./__generated__/PodcastEpisodes_episodes.graphql";

import EpisodeItem from "src/components/Podcast/EpisodeItem/EpisodeItem";

const fragment = graphql`
  fragment PodcastEpisodes_episodes on Podcast
  @argumentDefinitions(
    after: { type: "String" }
    first: { type: "Int", defaultValue: 10 }
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
            id
            _id
            name
            website
            rss
            appleId
          }
        }
      }
    }
  }
`;

interface Props {
  query: PodcastEpisodes_episodes$key;
  shouldLoadMore: boolean;
}

const PodcastEpisodes = ({ query, shouldLoadMore }: Props) => {
  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    PodcastEpisodesPaginationQuery,
    PodcastEpisodes_episodes$key
  >(fragment, query);

  const loadMore = useCallback(() => {
    // Don't fetch again if we're already loading the next page
    if (isLoadingNext) return;
    loadNext(10);
  }, [isLoadingNext, loadNext]);

  if (shouldLoadMore === true) loadMore();

  return (
    <PodcastEpisodesContainer>
      {data.episodes.edges.map(({ node }: any) => (
        <EpisodeItem key={node._id} node={node} />
      ))}
    </PodcastEpisodesContainer>
  );
};

export default PodcastEpisodes;
