import {
  Environment,
  Network,
  OperationType,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
  GraphQLResponse,
} from "relay-runtime";

/**
 * Types
 */
type TConnection<TNode> = {
  readonly edges: ReadonlyArray<{
    readonly node: TNode | null;
  } | null> | null;
} | null;

/**
 * fetchQuery
 */
function fetchQuery<T extends OperationType>(
  request: RequestParameters,
  variables: Variables,
): Promise<GraphQLResponse> {
  const url = "http://127.0.0.1:8000/graphql/";

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

/**
 * environment
 */
export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

/**
 * connectionToArray - convert Relay connection to array
 */
export function connectionToArray<TNode>(connection?: TConnection<TNode>) {
  if (!connection || !connection.edges) {
    return [];
  }
  return connection.edges
    .filter(isNotNull)
    .map((edge) => edge.node)
    .filter(isNotNull);
}

/**
 * isNotNull - use this in an `Array.filter` to tell TypeScript that the
 * returned array does not contain `null` or `undefined`.
 *
 * Example usage:
 *
 *   const itemsWithoutNulls = itemsWithNulls.filter(isNotNull)
 */
function isNotNull<T extends unknown>(arg: T): arg is NonNullable<T> {
  return arg !== null && arg !== undefined;
}
