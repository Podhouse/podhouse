import React, { useState, useEffect, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useQueryLoader } from "react-relay/hooks";
import { useLocation } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import SkeletonPage from "src/components/Skeletons/SkeletonPage/SkeletonPage";
import ErrorFallback from "src/components/ErrorFallback/ErrorFallback";

import PodcastInfo from "./PodcastInfo/PodcastInfo";

import { PodcastQuery } from "./__generated__/PodcastQuery.graphql";
import { PodcastInfoUserQuery } from "./__generated__/PodcastInfoUserQuery.graphql";

const podcastQuery = graphql`
  query PodcastQuery($_id: ID!) {
    podcast(_id: $_id) {
      id
      _id
      name
      appleId
      author
      description
      website
      rss
      image
      ...PodcastEpisodes_episodes
    }
  }
`;

const userQuery = graphql`
  query PodcastInfoUserQuery($input: UserSubscribedInput!) {
    currentUser {
      id
      _id
      subscribed(input: $input)
    }
  }
`;

type ScrollFrameType = {
  clientHeight: number;
  clientWidth: number;
  left: number;
  scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  scrollWidth: number;
  top: number;
};

type LocationState = {
  _id: string;
};

const Podcast = () => {
  const [shouldLoadMore, setShouldLoadMore] = useState<boolean>(false);

  const { state } = useLocation<LocationState>();

  const [
    podcastQueryReference,
    podcastLoadQuery,
    podcastDisposeQuery,
  ] = useQueryLoader<PodcastQuery>(podcastQuery);

  const [
    userQueryReference,
    userLoadQuery,
    userDisposeQuery,
  ] = useQueryLoader<PodcastInfoUserQuery>(userQuery);

  useEffect(() => {
    podcastLoadQuery({ _id: state._id }, { fetchPolicy: "store-or-network" });
    userLoadQuery({ input: { _id: state._id } });

    return () => {
      podcastDisposeQuery();
      userDisposeQuery();
    };
  }, [
    podcastLoadQuery,
    userLoadQuery,
    podcastDisposeQuery,
    userDisposeQuery,
    state._id,
  ]);

  const onLoadMore = (value: ScrollFrameType) => {
    if (value.top === 1) {
      setShouldLoadMore(true);
    }
    setShouldLoadMore(false);
  };

  const onRefetchQuery = () => {
    podcastLoadQuery({ _id: state._id }, { fetchPolicy: "store-or-network" });
    userLoadQuery({ input: { _id: state._id } });
  };

  return (
    <Scrollbars
      onScrollFrame={onLoadMore}
      autoHide
      autoHideTimeout={100}
      autoHideDuration={100}
    >
      {podcastQueryReference && (
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={onRefetchQuery}
        >
          <Suspense fallback={<SkeletonPage episodes={true} />}>
            <PodcastInfo
              podcastQueryReference={podcastQueryReference}
              podcastQuery={podcastQuery}
              userQueryReference={userQueryReference}
              userQuery={userQuery}
              shouldLoadMore={shouldLoadMore}
            />
          </Suspense>
        </ErrorBoundary>
      )}
    </Scrollbars>
  );
};

export default Podcast;