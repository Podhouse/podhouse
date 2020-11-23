import { useMemo } from "react";
import { Network } from "relay-runtime";
import { Store, Environment, RecordSource } from "relay-runtime";

let relayEnvironment: Environment;

import fetchQuery from "./fetchQuery";

type InitProps = {
  records?: any;
};

const network = Network.create(fetchQuery);

function createEnvironment(records) {
  const recordSource = new RecordSource(records);
  const store = new Store(recordSource);
  const environment = new Environment({
    network,
    store,
  });
  return environment;
}

export function RelayEnvironment(options: InitProps = {}) {
  const { records = {} } = options;

  // Create a network layer from the fetch function
  const environment = relayEnvironment ?? createEnvironment(records);

  // If your page has Next.js data fetching methods that use Relay, the initial records
  // will get hydrated here
  if (records) {
    environment.getStore().publish(new RecordSource(records));
  }
  // For SSG and SSR always create a new Relay environment
  if (typeof window === "undefined") return environment;
  // Create the Relay environment once in the client
  if (!relayEnvironment) relayEnvironment = environment;

  return relayEnvironment;
}

export function useEnvironment(initialRecords = {}) {
  const store = useMemo(() => RelayEnvironment(initialRecords), [
    initialRecords,
  ]);
  return store;
}
