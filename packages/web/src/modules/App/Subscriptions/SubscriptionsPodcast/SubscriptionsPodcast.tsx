import React, { useCallback } from "react";
import graphql from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay/hooks";

import { SubscriptionsPodcastContainer } from "./SubscriptionsPodcast.styles";

import PodcastsWithOnlyAvatarList from "src/components/Lists/PodcastsWithOnlyAvatarList/PodcastsWithOnlyAvatarList";

import { SubscriptionsPodcastPaginationQuery } from "./__generated__/SubscriptionsPodcastPaginationQuery.graphql";

const query = graphql`
  fragment SubscriptionsPodcast_subscriptions on User
  @argumentDefinitions(
    after: { type: "String" }
    first: { type: "Int", defaultValue: 10 }
    before: { type: "String" }
    last: { type: "Int" }
  )
  @refetchable(queryName: "SubscriptionsPodcastPaginationQuery") {
    subscriptions(after: $after, first: $first, before: $before, last: $last)
      @connection(key: "SubscriptionsPodcast_subscriptions") {
      edges {
        node {
          _id
          image
        }
      }
    }
  }
`;

interface Props {
  user: any;
  shouldLoadMore: boolean;
}

const SubscriptionsPodcast = ({ user, shouldLoadMore }: Props) => {
  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    SubscriptionsPodcastPaginationQuery,
    any
  >(query, user);

  const loadMore = useCallback(() => {
    if (isLoadingNext) return;
    loadNext(10);
  }, [isLoadingNext, loadNext]);

  if (shouldLoadMore === true) loadMore();

  return (
    <SubscriptionsPodcastContainer>
      <PodcastsWithOnlyAvatarList
        title="Subscriptions"
        edges={data.subscriptions.edges}
      />
    </SubscriptionsPodcastContainer>
  );
};

export default SubscriptionsPodcast;
