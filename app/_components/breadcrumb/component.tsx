import Link from "next/link";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      {props.items.map((item) => (
        <li
          key={item.pathname}
          className={`breadcrumb-item${
            props.isCurrent(item.pathname) ? " active" : ""
          }`}
          aria-current={props.isCurrent(item.pathname) ? "page" : undefined}
        >
          {props.isCurrent(item.pathname) ? (
            item.text
          ) : (
            <Link href={item.pathname}>{item.text}</Link>
          )}
        </li>
      ))}
    </ol>
  </nav>
);
