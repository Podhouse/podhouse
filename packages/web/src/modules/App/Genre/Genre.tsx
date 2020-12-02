import React, { useState, useCallback, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery, usePaginationFragment } from "react-relay/hooks";
import { useLocation } from "react-router-dom";

import { GenreContainer } from "./Genre.styles";

import Featured from "src/components/Featured/Featured";

import { GenreQuery } from "./__generated__/GenreQuery.graphql";
import { GenrePaginationQuery } from "./__generated__/GenrePaginationQuery.graphql";
import { Genre_podcasts$key } from "./__generated__/Genre_podcasts.graphql";

import featured from "src/utils/featured";

const query = graphql`
  query GenreQuery {
    ...Genre_podcasts
  }
`;

const fragment = graphql`
  fragment Genre_podcasts on Query
  @argumentDefinitions(
    primaryGenre: { type: "String" }
    after: { type: "String" }
    first: { type: "Int", defaultValue: 10 }
    before: { type: "String" }
    last: { type: "Int" }
  )
  @refetchable(queryName: "GenrePaginationQuery") {
    podcastsByGenre(
      primaryGenre: $primaryGenre
      after: $after
      first: $first
      before: $before
      last: $last
    ) @connection(key: "Genre_podcastsByGenre") {
      edges {
        node {
          _id
          image
        }
      }
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

const GenreComponent = () => {
  const [shouldLoadMore, setShouldLoadMore] = useState<boolean>(false);

  const { state } = useLocation<any>();

  const queryData = useLazyLoadQuery<GenreQuery>(
    query,
    { primaryGenre: state.primaryGenre },
    { fetchPolicy: "store-and-network" }
  );

  console.log("queryData: ", queryData);

  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    GenrePaginationQuery,
    Genre_podcasts$key
  >(fragment, queryData);

  console.log("data: ", data);

  const loadMore = useCallback(() => {
    // Don't fetch again if we're already loading the next page
    if (isLoadingNext) return;
    loadNext(10);
  }, [isLoadingNext, loadNext]);

  if (shouldLoadMore === true) loadMore();

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
      <GenreContainer>
        <Featured featured={featured} />
        <div>
          <h1>genre</h1>
        </div>
      </GenreContainer>
    </Scrollbars>
  );
};

const Genre = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <GenreComponent />
  </Suspense>
);

export default Genre;
