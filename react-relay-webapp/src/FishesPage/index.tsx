import { Container } from "reactstrap";
import { graphql, useQuery as useRelayQuery } from "relay-hooks";

import { withRelayEnvironment } from "../relay-utils";
import useRouter from "../useRouter";
import FishesNavbar from "./FishesNavbar";
import FishesPagination from "./FishesPagination";
import FishesPerPage from "./FishesPerPage";
import FishesTable from "./FishesTable";
import { FishesPageQuery } from "./__generated__/FishesPageQuery.graphql";

function FishesPage() {
  const { query } = useRouter();

  const { data } = useRelayQuery<FishesPageQuery>(
    graphql`
      query FishesPageQuery($after: String, $first: Int!) {
        allFishes(orderBy: "name", after: $after, first: $first) {
          ...FishesPagination_fishConnection
          ...FishesTable_fishConnection
        }
      }
    `,
    { after: query.after, first: query.first },
  );

  return (
    <>
      <FishesNavbar />
      <Container className="py-4">
        <div className="d-flex">
          <FishesPagination fishConnectionRef={data?.allFishes} />
          <FishesPerPage />
        </div>
        <FishesTable fishConnectionRef={data?.allFishes} />
        <div className="d-flex">
          <FishesPagination fishConnectionRef={data?.allFishes} />
          <FishesPerPage />
        </div>
      </Container>
    </>
  );
}

export default withRelayEnvironment(FishesPage);
