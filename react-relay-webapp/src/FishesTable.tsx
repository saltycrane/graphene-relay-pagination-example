import { Spinner, Table } from "reactstrap";
import { graphql, useQuery as useRelayQuery } from "relay-hooks";

import { FishesTableQuery } from "./__generated__/FishesTableQuery.graphql";
import { connToArray } from "./relay-utils";

function FishesTable() {
  const { data, isLoading } = useRelayQuery<FishesTableQuery>(
    graphql`
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
    `,
  );

  const fishes = connToArray(data?.allFishes);

  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td className="text-muted">
              <Spinner color="secondary" size="sm" /> Loading...
            </td>
          </tr>
        ) : (
          fishes.map((fish) => (
            <tr key={fish.id}>
              <td className="p-0">
                <img src={fish.iconUrl} />
              </td>
              <td>{fish.name}</td>
              <td>{fish.description}</td>
              <td>{fish.price}</td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}

export default FishesTable;
