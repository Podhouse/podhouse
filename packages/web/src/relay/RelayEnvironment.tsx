import { Network } from "relay-runtime";
import { Store, Environment, RecordSource } from "relay-runtime";

let relayEnvironment: Environment;

import cacheHandler from "./cacheHandler";

type InitProps = {
  records?: any;
};

const network = Network.create(cacheHandler);

function createEnvironment(records) {
  const recordSource = new RecordSource(records);
  const store = new Store(recordSource);
  const environment = new Environment({
    network,
    store,
  });
  return environment;
}

export default function RelayEnvironment(options: InitProps = {}) {
  const { records = {} } = options;

  if (typeof window === "undefined") {
    return createEnvironment(records);
  }

  // reuse Relay environment on client-side
  if (!relayEnvironment) {
    relayEnvironment = createEnvironment(records);
  }

  return relayEnvironment;
}
