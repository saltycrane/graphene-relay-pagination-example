/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type pagesQueryVariables = {};
export type pagesQueryResponse = {
    readonly allFishes: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly description: string;
                readonly iconUrl: string;
                readonly id: string;
                readonly name: string;
                readonly price: number;
            } | null;
        } | null>;
    } | null;
};
export type pagesQuery = {
    readonly response: pagesQueryResponse;
    readonly variables: pagesQueryVariables;
};



/*
query pagesQuery {
  allFishes {
    edges {
      node {
        description
        iconUrl
        id
        name
        price
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "FishNodeConnection",
    "kind": "LinkedField",
    "name": "allFishes",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FishNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FishNode",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "iconUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "price",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3b7f91237b1aea47c54e0a640f390f20",
    "id": null,
    "metadata": {},
    "name": "pagesQuery",
    "operationKind": "query",
    "text": "query pagesQuery {\n  allFishes {\n    edges {\n      node {\n        description\n        iconUrl\n        id\n        name\n        price\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f833eab1ab4fb14b3b90fb45c820f9dd';
export default node;
