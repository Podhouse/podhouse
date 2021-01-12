import React from "react";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";

import PodcastsWithDetailsList from "src/components/Lists/PodcastsWithDetailsList/PodcastsWithDetailsList";

import { TrendingQuery } from "./__generated__/TrendingQuery.graphql";

const query = graphql`
  query TrendingQuery($first: Int!, $after: String) {
    podcasts(first: $first, after: $after) {
      edges {
        node {
          id
          _id
          name
          author
          image
          appleId
        }
      }
    }
  }
`;

const Trending = () => {
  const { podcasts } = useLazyLoadQuery<TrendingQuery>(
    query,
    { first: 9 },
    {
      fetchPolicy: "store-or-network",
    }
  );

  return <PodcastsWithDetailsList title="Trending" podcasts={podcasts} />;
};

export default Trending;
