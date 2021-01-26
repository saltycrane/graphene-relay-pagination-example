import { useRouter } from "next/router";
import { Pagination, PaginationItem } from "reactstrap";
import { graphql, useFragment } from "relay-hooks";

import NextPaginationLink from "./NextPaginationLink";
import { FishesPagination_pageInfo$key } from "./__generated__/FishesPagination_pageInfo.graphql";
import { PAGE_SIZE } from "./constants";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import { TQuery } from "./types";

type TProps = {
  pageInfoRef: FishesPagination_pageInfo$key;
};

export default function FishesPagination({ pageInfoRef }: TProps) {
  const { query } = useRouter<TQuery>();

  const pageInfo = useFragment(
    graphql`
      fragment FishesPagination_pageInfo on PageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    `,
    pageInfoRef,
  );

  // `pageInfo.hasNextPage` is only required to be correct when paginating forward.
  // See the Connections spec:
  // https://github.com/facebook/relay/blob/v10.1.3/website/spec/Connections.md#pageinfo-1
  const hasNextPage = query.before || pageInfo?.hasNextPage;
  const hasPrevPage = query.after || pageInfo?.hasPreviousPage;

  return (
    <Pagination>
      <PaginationItem disabled={!hasPrevPage}>
        <NextPaginationLink
          className="px-3"
          href={
            pageInfo
              ? { query: { last: PAGE_SIZE, before: pageInfo.startCursor } }
              : null
          }
        >
          <ChevronLeftIcon className="mr-1" /> Prev
        </NextPaginationLink>
      </PaginationItem>
      <PaginationItem disabled={!hasNextPage}>
        <NextPaginationLink
          className="px-3"
          href={
            pageInfo
              ? { query: { first: PAGE_SIZE, after: pageInfo.endCursor } }
              : null
          }
        >
          Next <ChevronRightIcon className="ml-1" />
        </NextPaginationLink>
      </PaginationItem>
    </Pagination>
  );
}
