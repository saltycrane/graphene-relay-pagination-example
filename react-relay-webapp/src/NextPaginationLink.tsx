import NextLink, { LinkProps } from "next/link";
import {
  AnchorHTMLAttributes,
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
} from "react";
import { PaginationLink, PaginationLinkProps } from "reactstrap";

/**
 * NextPaginationLink - combine the Next.js `Link` and the reactstrap
 * `PaginationLink` component.
 *
 * Next.js `Link`: https://nextjs.org/docs/api-reference/next/link
 * reactstrap `PaginationLink`: https://reactstrap.github.io/components/pagination/
 */
export type TNextPaginationLinkProps = PropsWithChildren<
  Omit<LinkProps, "passHref">
> & {
  className?: string;
};

export default function NextPaginationLink({
  children,
  className,
  href,
  ...rest
}: TNextPaginationLinkProps) {
  const MaybeNextLink = href ? NextLink : DoNothing;
  return (
    <MaybeNextLink {...rest} href={href} passHref={true}>
      <RefForwardedPaginationLink className={className}>
        {children}
      </RefForwardedPaginationLink>
    </MaybeNextLink>
  );
}

/**
 * RefForwardedPaginationLink - this component exists because the Next.js `Link`
 * component wants its child to be wrapped with `forwardRef`.
 */
type TRefForwardedPaginationLinkProps = Omit<PaginationLinkProps, "tag">;

const RefForwardedPaginationLink = forwardRef(function _PaginationLink(
  { className = "", ...rest }: TRefForwardedPaginationLinkProps,
  ref: ForwardedRef<any>,
) {
  function RefForwardedAnchorTag(
    props: AnchorHTMLAttributes<HTMLAnchorElement>,
  ) {
    return <a {...props} ref={ref} />;
  }
  return (
    <PaginationLink
      {...rest}
      className={`d-flex align-items-center ${className}`}
      tag={RefForwardedAnchorTag}
    />
  );
});

/**
 * DoNothing - does nothing except renders children. Like Fragment but allows
 * TypeScript to pass arbitrary props. For use with `Maybe*` components.
 */
function DoNothing({ children }: PropsWithChildren<Record<string, any>>) {
  return <>{children}</>;
}
