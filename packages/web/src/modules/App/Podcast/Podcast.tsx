import React, { useEffect, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useQueryLoader } from "react-relay/hooks";
import { useLocation } from "react-router-dom";

import { PodcastContainer } from "./Podcast.styles";

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
    }
  }
`;

const Podcast = () => {
  const { state } = useLocation<any>();

  const [queryReference, loadQuery, disposeQuery] = useQueryLoader(query);

  useEffect(() => {
    loadQuery({ _id: state._id }, { fetchPolicy: "store-and-network" });

    return () => {
      disposeQuery();
    };
  }, [loadQuery, disposeQuery, state._id]);

  return (
    <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
      <PodcastContainer>
        {queryReference !== null ? (
          <Suspense fallback={<h1>Loading...</h1>}>
            <PodcastInfo queryReference={queryReference} query={query} />
          </Suspense>
        ) : null}
      </PodcastContainer>
    </Scrollbars>
  );
};

export default Podcast;
