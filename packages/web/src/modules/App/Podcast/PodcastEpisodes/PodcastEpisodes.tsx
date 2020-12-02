import React, { useCallback } from "react";
import graphql from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay/hooks";

import { PodcastEpisodesContainer } from "./PodcastEpisodes.styles";

import { PodcastEpisodesPaginationQuery } from "./__generated__/PodcastEpisodesPaginationQuery.graphql";

import EpisodeItem from "src/components/Podcast/EpisodeItem/EpisodeItem";

const query = graphql`
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
  podcast: any;
  shouldLoadMore: boolean;
}

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

  return (
    <PodcastEpisodesContainer>
      {data.episodes.edges.map(({ node }: any) => (
        <EpisodeItem key={node._id} node={node} />
      ))}
    </PodcastEpisodesContainer>
  );
};

export default PodcastEpisodes;
