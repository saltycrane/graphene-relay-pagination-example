/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FishesPagination_pageCursor = {
    readonly cursor: string | null;
    readonly isCurrent: boolean | null;
    readonly page: number | null;
    readonly " $refType": "FishesPagination_pageCursor";
};
export type FishesPagination_pageCursor$data = FishesPagination_pageCursor;
export type FishesPagination_pageCursor$key = {
    readonly " $data"?: FishesPagination_pageCursor$data;
    readonly " $fragmentRefs": FragmentRefs<"FishesPagination_pageCursor">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FishesPagination_pageCursor",
  "selections": [
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
  ],
  "type": "PageCursor",
  "abstractKey": null
};
(node as any).hash = 'e081a2e0b82d86b2773c4084633fd451';
export default node;
