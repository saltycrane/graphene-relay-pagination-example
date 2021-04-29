/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FishesTable_fishConnection = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly description: string;
            readonly iconUrl: string;
            readonly id: string;
            readonly name: string;
            readonly price: number;
        } | null;
    } | null>;
    readonly " $refType": "FishesTable_fishConnection";
};
export type FishesTable_fishConnection$data = FishesTable_fishConnection;
export type FishesTable_fishConnection$key = {
    readonly " $data"?: FishesTable_fishConnection$data;
    readonly " $fragmentRefs": FragmentRefs<"FishesTable_fishConnection">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FishesTable_fishConnection",
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
  "type": "FishNodeConnection",
  "abstractKey": null
};
(node as any).hash = 'bcdc99dc701c27aab8034531b650f692';
export default node;
