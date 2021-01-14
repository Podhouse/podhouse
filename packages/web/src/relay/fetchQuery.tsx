import { RequestParameters, Variables } from "relay-runtime";
import fetch from "isomorphic-fetch";

import fetchWithRetries from "./fetchWithRetries";

import { handleData, isMutation } from "./helpers";

import { getToken } from "src/utils/auth";

const fetchQuery = async (request: RequestParameters, variables: Variables) => {
  try {
    const authorization = getToken();

    const isMutationOperation = isMutation(request);

    const fetchFn = isMutationOperation ? fetch : fetchWithRetries;

    // Uncomment to see optimistic update working
    // const fetchFn = fetchWithRetries;

    const response = await fetchFn(
      "https://podhouse-server.herokuapp.com/graphql",
      {
        method: "POST",
        headers: {
          authorization,
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          query: request.text,
          variables,
        }),
        fetchTimeout: 20000,
        retryDelays: [1000, 3000, 5000],
      }
    );

    const data = await handleData(response);

    if (response.status === 401) {
      throw data.errors;
    }

    if (isMutation(request) && data.errors) {
      throw data;
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

export default fetchQuery;
