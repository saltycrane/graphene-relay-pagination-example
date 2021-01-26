/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FishesPageQueryVariables = {
    after?: string | null;
    before?: string | null;
    first?: number | null;
    last?: number | null;
};
export type FishesPageQueryResponse = {
    readonly allFishes: {
        readonly pageInfo: {
            readonly " $fragmentRefs": FragmentRefs<"FishesPagination_pageInfo">;
        };
        readonly " $fragmentRefs": FragmentRefs<"FishesTable_fishConnection">;
    } | null;
};
export type FishesPageQuery = {
    readonly response: FishesPageQueryResponse;
    readonly variables: FishesPageQueryVariables;
};



/*
query FishesPageQuery(
  $after: String
  $before: String
  $first: Int
  $last: Int
) {
  allFishes(after: $after, before: $before, first: $first, last: $last, orderBy: "name") {
    ...FishesTable_fishConnection
    pageInfo {
      ...FishesPagination_pageInfo
    }
  }
}

fragment FishesPagination_pageInfo on PageInfo {
  endCursor
  hasNextPage
  hasPreviousPage
  startCursor
}

fragment FishesTable_fishConnection on FishNodeConnection {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "before"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "last"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "before",
    "variableName": "before"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "last"
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "name"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FishesPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FishNodeConnection",
        "kind": "LinkedField",
        "name": "allFishes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FishesPagination_pageInfo"
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FishesTable_fishConnection"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FishesPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a55fd9494d36ba1113bcf1865e11c198",
    "id": null,
    "metadata": {},
    "name": "FishesPageQuery",
    "operationKind": "query",
    "text": "query FishesPageQuery(\n  $after: String\n  $before: String\n  $first: Int\n  $last: Int\n) {\n  allFishes(after: $after, before: $before, first: $first, last: $last, orderBy: \"name\") {\n    ...FishesTable_fishConnection\n    pageInfo {\n      ...FishesPagination_pageInfo\n    }\n  }\n}\n\nfragment FishesPagination_pageInfo on PageInfo {\n  endCursor\n  hasNextPage\n  hasPreviousPage\n  startCursor\n}\n\nfragment FishesTable_fishConnection on FishNodeConnection {\n  edges {\n    node {\n      description\n      iconUrl\n      id\n      name\n      price\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fe19f295c51a13ac0dfeee25624d76e0';
export default node;
