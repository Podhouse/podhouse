import { FetchFunction } from "relay-runtime";

import { getToken } from "src/utils/auth";

import { getHeaders, handleData } from "./helpers";
import fetchWithRetries from "./fetchWithRetries";

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise
const fetchQuery: FetchFunction = async (operation, variables) => {
  try {
    const authorization = getToken();

    const headers = {
      ...getHeaders(),
      authorization,
    };

    const response = await fetchWithRetries(process.env.API_ENDPOINT, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
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

export default fetchQuery;
