/**
 * Use this dynamic import with `{ssr: false}` to disable server-side rendering
 * because it is difficult to set up. Without disabling SSR, I got the following
 * warning:
 *
 *   Warning: Expected server HTML to contain a matching <div> in <td>.
 *
 * Examples of Next.js + Relay SSR:
 * - https://github.com/vercel/next.js/tree/canary/examples/with-relay-modern
 * - https://github.com/vercel/next.js/tree/canary/examples/with-react-relay-network-modern
 * - https://github.com/relay-tools/relay-hooks/tree/master/examples/relay-hook-example/pagination-nextjs-ssr
 * - https://github.com/relay-tools/relay-hooks/tree/master/examples/relay-hook-example/nextjs-ssr-preload
 *
 */
import dynamic from "next/dynamic";

const ClientOnlyFishesPage = dynamic(() => import("../FishesPage/index"), {
  ssr: false,
});

export default ClientOnlyFishesPage;
