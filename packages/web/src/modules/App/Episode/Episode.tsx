import React, { useEffect, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useQueryLoader } from "react-relay/hooks";
import { useLocation } from "react-router-dom";

import SkeletonPage from "src/components/Skeletons/SkeletonPage/SkeletonPage";

import EpisodeInfo from "./EpisodeInfo/EpisodeInfo";

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
        _id
        name
        website
        rss
      }
    }
  }
`;

const Episode = () => {
  const { state } = useLocation<any>();

  const [queryReference, loadQuery, disposeQuery] = useQueryLoader(query);

  useEffect(() => {
    loadQuery({ _id: state._id }, { fetchPolicy: "store-and-network" });

    return () => {
      disposeQuery();
    };
  }, [loadQuery, disposeQuery, state._id]);

  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      {queryReference !== null ? (
        <Suspense fallback={<SkeletonPage episodes={false} />}>
          <EpisodeInfo queryReference={queryReference} query={query} />
        </Suspense>
      ) : null}
    </Scrollbars>
  );
};

export default Episode;
