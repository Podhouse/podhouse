import { Store, RecordSource, Environment } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import { RelayNetworkLayer, urlMiddleware } from "react-relay-network-modern";

const network = new RelayNetworkLayer([
  urlMiddleware({
    url: process.env.API_ENDPOINT as string,
  }),
]);

const RelayEnvironment = (records?: RecordMap) => {
  return new Environment({
    network,
    store: new Store(new RecordSource(records)),
  });
};

export default RelayEnvironment;
