import React, { useState, useEffect, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useQueryLoader } from "react-relay/hooks";
import { useLocation } from "react-router-dom";

import SkeletonPage from "src/components/Skeletons/SkeletonPage/SkeletonPage";

import PodcastInfo from "./PodcastInfo/PodcastInfo";

const podcastQuery = graphql`
  query PodcastQuery($_id: ID!) {
    podcast(_id: $_id) {
      id
      _id
      name
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

const Podcast = () => {
  const [shouldLoadMore, setShouldLoadMore] = useState<boolean>(false);

  const { state } = useLocation<any>();

  const [queryReference, loadQuery, disposeQuery] = useQueryLoader(
    podcastQuery
  );
  const [userQueryReference, userLoadQuery, userDisposeQuery] = useQueryLoader(
    userQuery
  );

  useEffect(() => {
    loadQuery({ _id: state._id }, { fetchPolicy: "store-or-network" });
    userLoadQuery({ input: { _id: state._id } });

    return () => {
      disposeQuery();
      userDisposeQuery();
    };
  }, [loadQuery, userLoadQuery, disposeQuery, userDisposeQuery, state._id]);

  const onLoadMore = (value: ScrollFrameType) => {
    if (value.top === 1) {
      setShouldLoadMore(true);
    }
    setShouldLoadMore(false);
  };

  return (
    <Scrollbars
      onScrollFrame={onLoadMore}
      autoHide
      autoHideTimeout={100}
      autoHideDuration={100}
    >
      {queryReference !== null ? (
        <Suspense fallback={<SkeletonPage episodes={true} />}>
          <PodcastInfo
            queryReference={queryReference}
            podcastQuery={podcastQuery}
            userQueryReference={userQueryReference}
            userQuery={userQuery}
            shouldLoadMore={shouldLoadMore}
          />
        </Suspense>
      ) : null}
    </Scrollbars>
  );
};

export default Podcast;
