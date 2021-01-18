import React, { useCallback } from "react";
import graphql from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay/hooks";

import { SubscriptionsPodcastContainer } from "./SubscriptionsPodcast.styles";

import PodcastsWithOnlyAvatarList from "src/components/Lists/PodcastsWithOnlyAvatarList/PodcastsWithOnlyAvatarList";

import { SubscriptionsPodcastPaginationQuery } from "./__generated__/SubscriptionsPodcastPaginationQuery.graphql";

import { SubscriptionsPodcast_subscriptions$key } from "./__generated__/SubscriptionsPodcast_subscriptions.graphql";

const query = graphql`
  fragment SubscriptionsPodcast_subscriptions on User
  @argumentDefinitions(
    after: { type: "String" }
    first: { type: "Int", defaultValue: 25 }
    before: { type: "String" }
    last: { type: "Int" }
  )
  @refetchable(queryName: "SubscriptionsPodcastPaginationQuery") {
    subscriptions(after: $after, first: $first, before: $before, last: $last)
      @connection(key: "SubscriptionsPodcast_subscriptions") {
      edges {
        node {
          id
          _id
          name
          appleId
          image
        }
      }
    }
  }
`;

interface Props {
  currentUser: any;
  shouldLoadMore: boolean;
}

const SubscriptionsPodcast = ({ currentUser, shouldLoadMore }: Props) => {
  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    SubscriptionsPodcastPaginationQuery,
    SubscriptionsPodcast_subscriptions$key
  >(query, currentUser);

  const loadMore = useCallback(() => {
    if (isLoadingNext) return;
    loadNext(25);
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
