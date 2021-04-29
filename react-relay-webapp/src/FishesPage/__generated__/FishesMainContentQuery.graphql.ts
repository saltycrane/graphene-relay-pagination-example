/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FishesMainContentQueryVariables = {
    after?: string | null;
    first: number;
};
export type FishesMainContentQueryResponse = {
    readonly allFishes: {
        readonly " $fragmentRefs": FragmentRefs<"FishesPagination_fishConnection" | "FishesTable_fishConnection">;
    } | null;
};
export type FishesMainContentQuery = {
    readonly response: FishesMainContentQueryResponse;
    readonly variables: FishesMainContentQueryVariables;
};



/*
query FishesMainContentQuery(
  $after: String
  $first: Int!
) {
  allFishes(orderBy: "name", after: $after, first: $first) {
    ...FishesPagination_fishConnection
    ...FishesTable_fishConnection
  }
}

fragment FishesPagination_fishConnection on FishNodeConnection {
  pageCursors {
    around {
      ...FishesPagination_pageCursor
      page
    }
    first {
      ...FishesPagination_pageCursor
    }
    last {
      ...FishesPagination_pageCursor
    }
    next {
      ...FishesPagination_pageCursor
    }
    previous {
      ...FishesPagination_pageCursor
    }
  }
}

fragment FishesPagination_pageCursor on PageCursor {
  cursor
  isCurrent
  page
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
    "name": "first"
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
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "name"
  }
],
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "cursor",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "isCurrent",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "page",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FishesMainContentQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "FishesPagination_fishConnection"
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
    "name": "FishesMainContentQuery",
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
            "concreteType": "PageCursors",
            "kind": "LinkedField",
            "name": "pageCursors",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PageCursor",
                "kind": "LinkedField",
                "name": "around",
                "plural": true,
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageCursor",
                "kind": "LinkedField",
                "name": "first",
                "plural": false,
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageCursor",
                "kind": "LinkedField",
                "name": "last",
                "plural": false,
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageCursor",
                "kind": "LinkedField",
                "name": "next",
                "plural": false,
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageCursor",
                "kind": "LinkedField",
                "name": "previous",
                "plural": false,
                "selections": (v2/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
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
    ]
  },
  "params": {
    "cacheID": "021a9a3f719cbd68ada0f602e2743d16",
    "id": null,
    "metadata": {},
    "name": "FishesMainContentQuery",
    "operationKind": "query",
    "text": "query FishesMainContentQuery(\n  $after: String\n  $first: Int!\n) {\n  allFishes(orderBy: \"name\", after: $after, first: $first) {\n    ...FishesPagination_fishConnection\n    ...FishesTable_fishConnection\n  }\n}\n\nfragment FishesPagination_fishConnection on FishNodeConnection {\n  pageCursors {\n    around {\n      ...FishesPagination_pageCursor\n      page\n    }\n    first {\n      ...FishesPagination_pageCursor\n    }\n    last {\n      ...FishesPagination_pageCursor\n    }\n    next {\n      ...FishesPagination_pageCursor\n    }\n    previous {\n      ...FishesPagination_pageCursor\n    }\n  }\n}\n\nfragment FishesPagination_pageCursor on PageCursor {\n  cursor\n  isCurrent\n  page\n}\n\nfragment FishesTable_fishConnection on FishNodeConnection {\n  edges {\n    node {\n      description\n      iconUrl\n      id\n      name\n      price\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd7b3fe5521cfb9ca8aacf4abf17053a3';
export default node;
