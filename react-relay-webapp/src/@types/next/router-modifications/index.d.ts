/**
 * Override the `useRouter` return type from `next/router`.
 *
 * Note: the path should not be `@types/next/router/index.d.ts` because this
 * will overwrite the existing Next.js type definitions. Changing the path to
 * `@types/next/router-modifications/index.d.ts` allowed extending the existing
 * type defintions. Reference:
 * https://stackoverflow.com/questions/51297601/adding-to-existing-library-typescript-types-with-a-new-definition-file#comment89579198_51298325
 */

import { NextRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

declare module "next/router" {
  // change `NextRouter` type to accept generic for query
  export type ModifiedNextRouter<Query = ParsedUrlQuery> = Omit<
    NextRouter,
    "query"
  > & {
    query: Query;
  };

  // change `useRouter` to accept generic for query
  export const useRouter: <
    Query = ParsedUrlQuery
  >() => ModifiedNextRouter<Query>;
}
