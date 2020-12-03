import React, { useState, useEffect, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useQueryLoader } from "react-relay/hooks";
import { useLocation } from "react-router-dom";

import SkeletonPage from "src/components/Skeletons/SkeletonPage/SkeletonPage";

import PodcastInfo from "./PodcastInfo/PodcastInfo";

const query = graphql`
  query PodcastQuery($_id: ID!) {
    podcast(_id: $_id) {
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

  const [queryReference, loadQuery, disposeQuery] = useQueryLoader(query);

  useEffect(() => {
    loadQuery({ _id: state._id }, { fetchPolicy: "store-and-network" });

    return () => {
      disposeQuery();
    };
  }, [loadQuery, disposeQuery, state._id]);

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
            query={query}
            shouldLoadMore={shouldLoadMore}
          />
        </Suspense>
      ) : null}
    </Scrollbars>
  );
};

export default Podcast;
