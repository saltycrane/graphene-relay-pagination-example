import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { graphql, useFragment } from "relay-hooks";

import NextPaginationLink, {
  TNextPaginationLinkProps,
} from "./NextPaginationLink";
import { FishesPagination_fishConnection$key } from "./__generated__/FishesPagination_fishConnection.graphql";
import { FishesPagination_pageCursor$key } from "./__generated__/FishesPagination_pageCursor.graphql";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

/**
 * FishesPagination
 */
type TProps = {
  fishConnectionRef: FishesPagination_fishConnection$key;
};

export default function FishesPagination({ fishConnectionRef }: TProps) {
  const fishConnection = useFragment(
    graphql`
      fragment FishesPagination_fishConnection on FishNodeConnection {
        pageCursors {
          around {
            ...FishesPagination_pageCursor
            page
          }
          first {
            ...FishesPagination_pageCursor
          }
          last {
            ...FishesPagination_pageCursor
          }
          previous {
            ...FishesPagination_pageCursor
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    `,
    fishConnectionRef,
  );

  const { around = [], first, last, previous } =
    fishConnection?.pageCursors ?? {};

  /* TODO: change the backend to provide a `pageCursors.next` field like
     the `pageCursors.previous` field instead of using `pageInfo` */
  const { endCursor, hasNextPage } = fishConnection?.pageInfo ?? {};

  return (
    <Pagination>
      <FishesPaginationItem className="px-3" pageCursorRef={previous}>
        <ChevronLeftIcon className="mr-1" /> Prev
      </FishesPaginationItem>
      {first && <FishesPaginationItem ellipsis="after" pageCursorRef={first} />}
      {around.map((pageCursor) => (
        <FishesPaginationItem
          key={pageCursor.page}
          pageCursorRef={pageCursor}
        />
      ))}
      {last && <FishesPaginationItem ellipsis="before" pageCursorRef={last} />}
      <PaginationItem disabled={!hasNextPage}>
        <NextPaginationLink
          className="px-3"
          href={{ query: { after: endCursor } }}
        >
          Next <ChevronRightIcon className="ml-1" />
        </NextPaginationLink>
      </PaginationItem>
    </Pagination>
  );
}

/**
 * FishesPaginationItem
 */
type TFishesPaginationItemProps = Omit<TNextPaginationLinkProps, "href"> & {
  ellipsis?: "after" | "before";
  pageCursorRef: FishesPagination_pageCursor$key;
};

function FishesPaginationItem({
  children,
  ellipsis,
  pageCursorRef,
  ...rest
}: TFishesPaginationItemProps) {
  const { cursor, isCurrent, page } =
    useFragment(
      graphql`
        fragment FishesPagination_pageCursor on PageCursor {
          cursor
          isCurrent
          page
        }
      `,
      pageCursorRef,
    ) ?? {};

  return (
    <>
      {ellipsis === "before" && <EllipsisItem />}
      <PaginationItem active={isCurrent} disabled={!pageCursorRef}>
        <NextPaginationLink {...rest} href={{ query: { after: cursor } }}>
          {children || page}
        </NextPaginationLink>
      </PaginationItem>
      {ellipsis === "after" && <EllipsisItem />}
    </>
  );
}

/**
 * EllipsisItem
 */
function EllipsisItem() {
  return (
    <PaginationItem disabled>
      <PaginationLink>...</PaginationLink>
    </PaginationItem>
  );
}
