import { graphql, useLazyLoadQuery } from "react-relay";

import useRouter from "../useRouter";
import FishesPagination from "./FishesPagination";
import FishesPerPage from "./FishesPerPage";
import FishesTable from "./FishesTable";
import { FishesMainContentQuery } from "./__generated__/FishesMainContentQuery.graphql";

export default function FishesMainContent() {
  const { query } = useRouter();

  const data = useLazyLoadQuery<FishesMainContentQuery>(
    graphql`
      query FishesMainContentQuery($after: String, $first: Int!) {
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
      <div className="d-flex">
        <FishesPagination fishConnectionRef={data.allFishes} />
        <FishesPerPage />
      </div>
      <FishesTable fishConnectionRef={data.allFishes} />
      <div className="d-flex">
        <FishesPagination fishConnectionRef={data.allFishes} />
        <FishesPerPage />
      </div>
    </>
  );
}
