import { Environment, Network, RecordSource, Store } from "relay-runtime";

import cacheHandler from "./cacheHandler";

const network = Network.create(cacheHandler);

const env = new Environment({
  network,
  store: new Store(new RecordSource(), {
    // This property tells Relay to not immediately clear its cache when the user
    // navigates around the app. Relay will hold onto the specified number of
    // query results, allowing the user to return to recently visited pages
    // and reusing cached data if its available/fresh.
    gcReleaseBufferSize: 10,
  }),
});

export default env;
