import { Spinner, Table } from "reactstrap";
import { graphql, useFragment } from "relay-hooks";

import { connectionToArray } from "../relay-utils";
import { FishesTable_fishConnection$key } from "./__generated__/FishesTable_fishConnection.graphql";

type TProps = {
  fishConnectionRef: FishesTable_fishConnection$key;
};

export default function FishesTable({ fishConnectionRef }: TProps) {
  const fishConnection = useFragment(
    graphql`
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
    `,
    fishConnectionRef,
  );

  const isLoading = !fishConnectionRef;

  return (
    <Table>
      <thead>
        <tr>
          <th>Image</th>
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
          connectionToArray(fishConnection).map((fish) => (
            <tr key={fish.id}>
              <td className="p-0">
                <img height="128" src={fish.iconUrl} width="128" />
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
