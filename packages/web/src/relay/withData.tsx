import React from "react";
import { DocumentContext } from "next/document";
import { NextPage } from "next";
import { fetchQuery, RelayEnvironmentProvider } from "relay-hooks";
import { Variables, GraphQLTaggedNode } from "relay-runtime";

import RelayEnvironment from "./RelayEnvironment";

type OptionsWithData = {
  query: GraphQLTaggedNode;
  variables: Variables;
};

const withData = (ComposedComponent: NextPage, options: OptionsWithData) => {
  function WithData(dataprops) {
    const environment =
      typeof window === "undefined"
        ? dataprops.environment
        : RelayEnvironment({
            records: dataprops.queryRecords,
          });
    return (
      <RelayEnvironmentProvider environment={environment}>
        <ComposedComponent />
      </RelayEnvironmentProvider>
    );
  }

  WithData.getInitialProps = async (ctx: DocumentContext) => {
    const isServer = !!ctx.req;
    let composedInitialProps = {};
    if (ComposedComponent.getInitialProps) {
      composedInitialProps = await ComposedComponent.getInitialProps(ctx);
    }
    if (!isServer) {
      return {
        ...composedInitialProps,
        environment: null,
      };
    }

    let queryRecords = {};
    const environment = RelayEnvironment();

    const { query, variables } = options;
    if (query) {
      await fetchQuery<any>(environment, query, variables);
      queryRecords = environment.getStore().getSource().toJSON();
    }
    return {
      ...composedInitialProps,
      queryRecords,
      environment,
    };
  };

  return WithData;
};

export default withData;
