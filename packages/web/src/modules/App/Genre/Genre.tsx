import React, { useState, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";
import { useLocation } from "react-router-dom";

import Featured from "src/components/Featured/Featured";
import SkeletonPodcastsWithOnlyAvatarList from "src/components/Skeletons/SkeletonPodcastsWithOnlyAvatarList/SkeletonPodcastsWithOnlyAvatarList";

import { GenreQuery } from "./__generated__/GenreQuery.graphql";

import GenrePodcast from "./GenrePodcast/GenrePodcast";

import featured from "src/utils/featured";

const query = graphql`
  query GenreQuery($primaryGenre: String!) {
    ...GenrePodcast_podcasts @arguments(primaryGenre: $primaryGenre)
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

const GenreComponent = () => {
  const [shouldLoadMore, setShouldLoadMore] = useState<boolean>(false);

  const { state } = useLocation<any>();

  const genreQuery = useLazyLoadQuery<GenreQuery>(
    query,
    { primaryGenre: state.primaryGenre },
    { fetchPolicy: "store-and-network" }
  );

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
      <GenrePodcast
        genreQuery={genreQuery}
        primaryGenre={state.primaryGenre}
        shouldLoadMore={shouldLoadMore}
      />
    </Scrollbars>
  );
};

const Genre = () => (
  <Suspense
    fallback={
      <>
        <Featured featured={featured} />
        <SkeletonPodcastsWithOnlyAvatarList />
      </>
    }
  >
    <GenreComponent />
  </Suspense>
);

export default Genre;
