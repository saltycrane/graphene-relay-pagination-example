import { graphql, useFragment } from "react-relay";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import NextPaginationLink, {
  TNextPaginationLinkProps,
} from "../NextPaginationLink";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons";
import useRouter from "../useRouter";
import { FishesPagination_fishConnection$key } from "./__generated__/FishesPagination_fishConnection.graphql";
import { FishesPagination_pageCursor$key } from "./__generated__/FishesPagination_pageCursor.graphql";

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
          next {
            ...FishesPagination_pageCursor
          }
          previous {
            ...FishesPagination_pageCursor
          }
        }
      }
    `,
    fishConnectionRef,
  );

  const {
    around = [],
    first,
    last,
    next,
    previous,
  } = fishConnection.pageCursors;

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
      <FishesPaginationItem className="px-3" pageCursorRef={next}>
        Next <ChevronRightIcon className="ml-1" />
      </FishesPaginationItem>
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
  const { query } = useRouter();

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
        <NextPaginationLink
          {...rest}
          href={{ query: { ...query, after: cursor } }}
        >
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
