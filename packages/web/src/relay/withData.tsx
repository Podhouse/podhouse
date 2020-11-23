import React from "react";
import { DocumentContext } from "next/document";
import { NextPage } from "next";
import { RelayEnvironmentProvider } from "relay-hooks";
import { GraphQLTaggedNode } from "relay-runtime";

import { RelayEnvironment } from "./RelayEnvironment";
import fetchWithRetries from "./fetchWithRetries";

import { handleData } from "./helpers";

import { getToken } from "src/utils/auth";

type OptionsWithData = {
  query: GraphQLTaggedNode;
};

const fetchQuery = async () => {
  try {
    const authorization = getToken();

    const headers = {
      authorization,
    };

    const response = await fetchWithRetries(process.env.API_ENDPOINT, {
      method: "POST",
      headers,
      fetchTimeout: 20000,
      retryDelays: [1000, 3000, 5000],
    });

    const data = await handleData(response);

    if (response.status === 401) {
      throw data.errors;
    }

    if (!data.data) {
      throw data.errors;
    }

    return data;
  } catch (err) {
    console.log("err: ", err);

    const timeoutRegexp = new RegExp(/Still no successful response after/);
    const serverUnavailableRegexp = new RegExp(/Failed to fetch/);
    if (
      timeoutRegexp.test(err.message) ||
      serverUnavailableRegexp.test(err.message)
    ) {
      throw new Error("Unavailable service. Try again later.");
    }

    throw err;
  }
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

    const { query } = options;

    if (query) {
      await fetchQuery();
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
