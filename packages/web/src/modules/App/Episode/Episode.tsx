import React, { useEffect, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useQueryLoader } from "react-relay/hooks";
import { useLocation } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ReactGA from "react-ga";

import SkeletonPage from "src/components/Skeletons/SkeletonPage/SkeletonPage";
import ErrorFallback from "src/components/ErrorFallback/ErrorFallback";

import EpisodeInfo from "./EpisodeInfo/EpisodeInfo";

import { EpisodeQuery } from "./__generated__/EpisodeQuery.graphql";

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ID as string);
ReactGA.pageview(window.location.pathname + window.location.search);

const query = graphql`
  query EpisodeQuery($_id: ID!) {
    episode(_id: $_id) {
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
`;

type LocationState = {
  _id: string;
};

const Episode = () => {
  const { state } = useLocation<LocationState>();

  const [
    queryReference,
    loadQuery,
    disposeQuery,
  ] = useQueryLoader<EpisodeQuery>(query);

  useEffect(() => {
    loadQuery({ _id: state._id }, { fetchPolicy: "store-or-network" });

    return () => {
      disposeQuery();
    };
  }, [loadQuery, disposeQuery, state._id]);

  const onRefetchQuery = () => {
    loadQuery({ _id: state._id }, { fetchPolicy: "store-or-network" });
  };

  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      {queryReference && (
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={onRefetchQuery}
        >
          <Suspense fallback={<SkeletonPage episodes={false} />}>
            <EpisodeInfo queryReference={queryReference} query={query} />
          </Suspense>
        </ErrorBoundary>
      )}
    </Scrollbars>
  );
};

export default Episode;
