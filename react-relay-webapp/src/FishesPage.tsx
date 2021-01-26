import { useRouter } from "next/router";
import { Container } from "reactstrap";
import { graphql, useQuery as useRelayQuery } from "relay-hooks";

import FishesNavbar from "./FishesNavbar";
import FishesPagination from "./FishesPagination";
import FishesTable from "./FishesTable";
import { FishesPageQuery } from "./__generated__/FishesPageQuery.graphql";
import { PAGE_SIZE } from "./constants";
import { withRelayEnvironment } from "./relay-utils";
import { TQuery } from "./types";

function FishesPage() {
  const { query } = useRouter<TQuery>();

  const { data } = useRelayQuery<FishesPageQuery>(
    graphql`
      query FishesPageQuery(
        $after: String
        $before: String
        $first: Int
        $last: Int
      ) {
        allFishes(
          after: $after
          before: $before
          first: $first
          last: $last
          orderBy: "name"
        ) {
          ...FishesTable_fishConnection
          pageInfo {
            ...FishesPagination_pageInfo
          }
        }
      }
    `,
    isEmpty(query) ? { first: PAGE_SIZE } : query,
  );

  return (
    <>
      <FishesNavbar />
      <Container className="py-4">
        <FishesPagination pageInfoRef={data?.allFishes.pageInfo} />
        <FishesTable fishConnectionRef={data?.allFishes} />
        <FishesPagination pageInfoRef={data?.allFishes.pageInfo} />
      </Container>
    </>
  );
}

export default withRelayEnvironment(FishesPage);

function isEmpty(obj: Record<string, any>) {
  return Object.keys(obj).length === 0;
}
