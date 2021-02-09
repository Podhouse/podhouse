/// <reference types="react-scripts" />
/// <reference types="react-dom/experimental" />
/// <reference types="react/experimental" />

interface Window {
  attachEvent(event: string, listener: EventListener): boolean;
  detachEvent(event: string, listener: EventListener): void;
}

declare module "babel-plugin-relay/macro" {
  export { graphql as default } from "react-relay";
}

declare module "react-router-sitemap";
