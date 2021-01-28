import { useRouter as useNextRouter } from "next/router";

import { TQuery } from "./types";

const defaultQuery: TQuery = {
  first: 5,
};

/**
 * useRouter - thin wrapper around Next.js `useRouter` used to provide an intial
 * default query state
 */
export default function useRouter() {
  const router = useNextRouter<TQuery>();
  const query = isEmpty(router.query) ? defaultQuery : router.query;
  return { ...router, query };
}

/**
 * isEmpty
 */
function isEmpty(obj: Record<string, any>) {
  return Object.keys(obj).length === 0;
}
