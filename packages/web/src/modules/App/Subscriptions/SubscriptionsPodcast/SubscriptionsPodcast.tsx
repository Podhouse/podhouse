import React, { useCallback } from "react";
import { Helmet } from "react-helmet";
import graphql from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay/hooks";
import { useLocation } from "react-router-dom";

import { SubscriptionsPodcastContainer } from "./SubscriptionsPodcast.styles";

import PodcastsWithOnlyAvatarList from "src/components/Lists/PodcastsWithOnlyAvatarList/PodcastsWithOnlyAvatarList";

import { SubscriptionsPodcastPaginationQuery } from "./__generated__/SubscriptionsPodcastPaginationQuery.graphql";

import { SubscriptionsPodcast_subscriptions$key } from "./__generated__/SubscriptionsPodcast_subscriptions.graphql";

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
  user: any;
  shouldLoadMore: boolean;
}

const SubscriptionsPodcast = ({ user, shouldLoadMore }: Props) => {
  const location = useLocation();

  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    SubscriptionsPodcastPaginationQuery,
    SubscriptionsPodcast_subscriptions$key
  >(query, user);

  const loadMore = useCallback(() => {
    if (isLoadingNext) return;
    loadNext(10);
  }, [isLoadingNext, loadNext]);

  if (shouldLoadMore === true) loadMore();

  return (
    <SubscriptionsPodcastContainer>
      <Helmet>
        <title>Subscriptions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="The best podcast web app to listen to your favorite podcasts"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content="Podhouse" />
        <meta
          property="twitter:description"
          content="The best podcast web app to listen to your favorite podcasts"
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/C1TOvBB.jpg"
        />
        <meta property="twitter:url" content={location.pathname} />

        {/* Open Graph */}
        <meta property="og:url" content={location.pathname} key="ogurl" />
        <meta
          property="og:image"
          content="https://i.imgur.com/C1TOvBB.jpg"
          key="ogimage"
        />
        <meta property="og:site_name" content="Podhouse" key="ogsitename" />
        <meta property="og:title" content="Podhouse" key="ogtitle" />
        <meta
          property="og:description"
          content="The best podcast web app to listen to your favorite podcasts"
          key="ogdesc"
        />
      </Helmet>

      <PodcastsWithOnlyAvatarList
        title="Subscriptions"
        edges={data.subscriptions.edges}
      />
    </SubscriptionsPodcastContainer>
  );
};

export default SubscriptionsPodcast;
