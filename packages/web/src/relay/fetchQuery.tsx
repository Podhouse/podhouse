import { RequestParameters, Variables } from "relay-runtime";
import fetch from "isomorphic-fetch";

import fetchWithRetries from "./fetchWithRetries";

import { handleData, isMutation } from "./helpers";

import { getToken } from "src/utils/auth";

// Define a function that fetches the results of a request (query/mutation/etc)
// and returns its results as a Promise:
const fetchQuery = async (request: RequestParameters, variables: Variables) => {
  try {
    const authorization = getToken();

    const isMutationOperation = isMutation(request);

    const fetchFn = isMutationOperation ? fetch : fetchWithRetries;

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
