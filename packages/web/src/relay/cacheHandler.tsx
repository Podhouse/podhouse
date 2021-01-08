import { QueryResponseCache, FetchFunction } from "relay-runtime";

import fetchQuery from "./fetchQuery";
import { isMutation, isQuery, forceFetch } from "./helpers";

const oneMinute = 60 * 1000;
const queryResponseCache = new QueryResponseCache({
  size: 250,
  ttl: oneMinute,
});

const cacheHandler: FetchFunction = async (
  operation,
  variables,
  cacheConfig,
  uploadables
) => {
  const queryID: string = operation.text || "";

  if (isMutation(operation)) {
    queryResponseCache.clear();
    return fetchQuery(operation, variables);
  }

  const fromCache = queryResponseCache.get(queryID, variables);
  if (isQuery(operation) && fromCache !== null && !forceFetch(cacheConfig)) {
    return fromCache;
  }

  const fromServer = await fetchQuery(operation, variables);
  if (fromServer) {
    queryResponseCache.set(queryID, variables, fromServer);
  }

  return fromServer;
};

export default cacheHandler;
