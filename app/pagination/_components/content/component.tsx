import { Pagination } from "../pagination";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <p className="mb-6 text-center">{props.content}</p>
    <Pagination currentPage={props.currentPage} pageCount={props.pageCount} />
  </>
);
