/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FishesPagination_fishConnection = {
    readonly pageCursors: {
        readonly around: ReadonlyArray<{
            readonly page: number | null;
            readonly " $fragmentRefs": FragmentRefs<"FishesPagination_pageCursor">;
        } | null> | null;
        readonly first: {
            readonly " $fragmentRefs": FragmentRefs<"FishesPagination_pageCursor">;
        } | null;
        readonly last: {
            readonly " $fragmentRefs": FragmentRefs<"FishesPagination_pageCursor">;
        } | null;
        readonly next: {
            readonly " $fragmentRefs": FragmentRefs<"FishesPagination_pageCursor">;
        } | null;
        readonly previous: {
            readonly " $fragmentRefs": FragmentRefs<"FishesPagination_pageCursor">;
        } | null;
    } | null;
    readonly " $refType": "FishesPagination_fishConnection";
};
export type FishesPagination_fishConnection$data = FishesPagination_fishConnection;
export type FishesPagination_fishConnection$key = {
    readonly " $data"?: FishesPagination_fishConnection$data;
    readonly " $fragmentRefs": FragmentRefs<"FishesPagination_fishConnection">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "FishesPagination_pageCursor"
},
v1 = [
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FishesPagination_fishConnection",
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
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "page",
              "storageKey": null
            },
            (v0/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageCursor",
          "kind": "LinkedField",
          "name": "first",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageCursor",
          "kind": "LinkedField",
          "name": "last",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageCursor",
          "kind": "LinkedField",
          "name": "next",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageCursor",
          "kind": "LinkedField",
          "name": "previous",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "FishNodeConnection",
  "abstractKey": null
};
})();
(node as any).hash = 'f336cb22ec7b3e0f3d982b6159eff432';
export default node;
