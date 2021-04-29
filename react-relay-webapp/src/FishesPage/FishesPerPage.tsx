import { Input } from "reactstrap";

import useRouter from "../useRouter";

export default function FishesPerPage() {
  const { push, query } = useRouter();
  return (
    <Input
      className="ml-3"
      onChange={(event) => push({ query: { first: event.target.value } })}
      style={{ maxWidth: "9rem" }}
      type="select"
      value={query.first}
    >
      <option value={5}>5 per page</option>
      <option value={10}>10 per page</option>
      <option value={15}>15 per page</option>
      <option value={20}>20 per page</option>
    </Input>
  );
}
