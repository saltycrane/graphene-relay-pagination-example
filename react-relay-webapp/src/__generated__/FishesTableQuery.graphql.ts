/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type FishesTableQueryVariables = {};
export type FishesTableQueryResponse = {
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
export type FishesTableQuery = {
    readonly response: FishesTableQueryResponse;
    readonly variables: FishesTableQueryVariables;
};



/*
query FishesTableQuery {
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
    "name": "FishesTableQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FishesTableQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "453f084ef3f5d82f0ba07533d7b92ec9",
    "id": null,
    "metadata": {},
    "name": "FishesTableQuery",
    "operationKind": "query",
    "text": "query FishesTableQuery {\n  allFishes {\n    edges {\n      node {\n        description\n        iconUrl\n        id\n        name\n        price\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '8fac64929003a59bea5d6bceb6a00e07';
export default node;
