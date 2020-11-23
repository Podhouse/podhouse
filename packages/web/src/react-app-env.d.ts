/// <reference types="react-scripts" />

declare module "babel-plugin-relay/macro" {
  export { graphql as default } from "react-relay";
}

interface Window {
  attachEvent(event: string, listener: EventListener): boolean;
  detachEvent(event: string, listener: EventListener): void;
}
