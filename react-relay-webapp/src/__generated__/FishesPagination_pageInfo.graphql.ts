/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FishesPagination_pageInfo = {
    readonly endCursor: string | null;
    readonly hasNextPage: boolean;
    readonly hasPreviousPage: boolean;
    readonly startCursor: string | null;
    readonly " $refType": "FishesPagination_pageInfo";
};
export type FishesPagination_pageInfo$data = FishesPagination_pageInfo;
export type FishesPagination_pageInfo$key = {
    readonly " $data"?: FishesPagination_pageInfo$data;
    readonly " $fragmentRefs": FragmentRefs<"FishesPagination_pageInfo">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FishesPagination_pageInfo",
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
  "type": "PageInfo",
  "abstractKey": null
};
(node as any).hash = '24e37e4e97c9f643c4f8f3989ee8002c';
export default node;
