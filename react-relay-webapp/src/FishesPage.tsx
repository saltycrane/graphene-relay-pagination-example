import { useRouter } from "next/router";
import { Container } from "reactstrap";
import { graphql, useQuery as useRelayQuery } from "relay-hooks";

import FishesNavbar from "./FishesNavbar";
import FishesPagination from "./FishesPagination";
import FishesTable from "./FishesTable";
import { FishesPageQuery } from "./__generated__/FishesPageQuery.graphql";
import { withRelayEnvironment } from "./relay-utils";
import { TQuery } from "./types";

function FishesPage() {
  const { query } = useRouter<TQuery>();

  const { data } = useRelayQuery<FishesPageQuery>(
    graphql`
      query FishesPageQuery($after: String) {
        allFishes(first: 5, orderBy: "name", after: $after) {
          ...FishesPagination_fishConnection
          ...FishesTable_fishConnection
        }
      }
    `,
    { after: query.after },
  );

  return (
    <>
      <FishesNavbar />
      <Container className="py-4">
        <FishesPagination fishConnectionRef={data?.allFishes} />
        <FishesTable fishConnectionRef={data?.allFishes} />
        <FishesPagination fishConnectionRef={data?.allFishes} />
      </Container>
    </>
  );
}

export default withRelayEnvironment(FishesPage);
