import React from "react";
import { fetchQuery } from "relay-runtime";
import { useQuery, graphql, STORE_OR_NETWORK } from "relay-hooks";

import PodcastsWithDetails from "src/components/Lists/PodcastsWithDetails/PodcastsWithDetails";

import { RelayEnvironment } from "src/relay/RelayEnvironment";

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
        }
      }
    }
  }
`;

const Trending = () => {
  const { props, error } = useQuery<TrendingQuery>(
    query,
    {
      first: 9,
    },
    {
      fetchPolicy: STORE_OR_NETWORK,
    },
  );

  if (error) {
    console.log("error: ", error);
  }

  return <PodcastsWithDetails title="Trending" podcasts={props} />;
};

Trending.getStaticProps = async () => {
  const environment = RelayEnvironment();
  const queryProps = await fetchQuery(environment, query, {
    first: 9,
  });
  const initialRecords = environment.getStore().getSource().toJSON();

  return {
    props: {
      queryProps,
      initialRecords,
    },
  };
};

export default Trending;
