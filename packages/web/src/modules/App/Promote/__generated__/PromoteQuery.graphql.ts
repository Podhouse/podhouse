/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PromoteQueryVariables = {
  podcastName: string;
};
export type PromoteQueryResponse = {
  readonly " $fragmentRefs": FragmentRefs<"PromotePodcast_podcasts">;
};
export type PromoteQuery = {
  readonly response: PromoteQueryResponse;
  readonly variables: PromoteQueryVariables;
};

/*
query PromoteQuery(
  $podcastName: String!
) {
  ...PromotePodcast_podcasts_h9Yo2
}

fragment PromotePodcast_podcasts_h9Yo2 on Query {
  podcastsByName(podcastName: $podcastName, first: 10) {
    edges {
      node {
        id
        _id
        name
        image
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
*/

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "podcastName",
      },
    ],
    v1 = {
      kind: "Variable",
      name: "podcastName",
      variableName: "podcastName",
    },
    v2 = [
      {
        kind: "Literal",
        name: "first",
        value: 10,
      },
      v1 /*: any*/,
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "PromoteQuery",
      selections: [
        {
          args: [v1 /*: any*/],
          kind: "FragmentSpread",
          name: "PromotePodcast_podcasts",
        },
      ],
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "PromoteQuery",
      selections: [
        {
          alias: null,
          args: v2 /*: any*/,
          concreteType: "PodcastConnection",
          kind: "LinkedField",
          name: "podcastsByName",
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "PodcastEdge",
              kind: "LinkedField",
              name: "edges",
              plural: true,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Podcast",
                  kind: "LinkedField",
                  name: "node",
                  plural: false,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "_id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "name",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "image",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "cursor",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "PageInfoExtended",
              kind: "LinkedField",
              name: "pageInfo",
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "endCursor",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "hasNextPage",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "hasPreviousPage",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "startCursor",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: v2 /*: any*/,
          filters: ["podcastName"],
          handle: "connection",
          key: "PromotePodcast_podcastsByName",
          kind: "LinkedHandle",
          name: "podcastsByName",
        },
      ],
    },
    params: {
      cacheID: "b8f8352e27facb61e3e443a85f7ceab0",
      id: null,
      metadata: {},
      name: "PromoteQuery",
      operationKind: "query",
      text:
        "query PromoteQuery(\n  $podcastName: String!\n) {\n  ...PromotePodcast_podcasts_h9Yo2\n}\n\nfragment PromotePodcast_podcasts_h9Yo2 on Query {\n  podcastsByName(podcastName: $podcastName, first: 10) {\n    edges {\n      node {\n        id\n        _id\n        name\n        image\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n",
    },
  };
})();
(node as any).hash = "0a6a5df3face955961a6ea63b906e5f1";
export default node;
