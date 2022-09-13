import Link from "next/link";
import { IconChevronDoubleLeft } from "~/icons/chevron-double-left";
import { IconChevronDoubleRight } from "~/icons/chevron-double-right";
import { IconChevronLeft } from "~/icons/chevron-left";
import { IconChevronRight } from "~/icons/chevron-right";
import styles from "./style.module.scss";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <nav className="text-center" aria-label="Page navigation">
    <ul className="pagination">
      <li className={props.itemClass("first")}>
        <Link href={props.href("first")}>
          <a
            className={props.linkClass()}
            tabIndex={props.disabled("first") ? -1 : 0}
            aria-label="First"
            aria-disabled={props.disabled("first")}
            onClickCapture={props.blur}
          >
            <IconChevronDoubleLeft
              style={{ height: "1em", width: "1em", verticalAlign: "-0.125em" }}
            />
          </a>
        </Link>
      </li>
      <li className={props.itemClass("previous")}>
        <Link href={props.href("previous")}>
          <a
            className={props.linkClass()}
            tabIndex={props.disabled("previous") ? -1 : 0}
            aria-label="Previous"
            aria-disabled={props.disabled("previous")}
            onClickCapture={props.blur}
          >
            <IconChevronLeft
              style={{ height: "1em", width: "1em", verticalAlign: "-0.125em" }}
            />
          </a>
        </Link>
      </li>
      <li className={props.itemClass("next")}>
        <Link href={props.href("next")}>
          <a
            className={props.linkClass()}
            tabIndex={props.disabled("next") ? -1 : 0}
            aria-label="Next"
            aria-disabled={props.disabled("next")}
            onClickCapture={props.blur}
          >
            <IconChevronRight
              style={{ height: "1em", width: "1em", verticalAlign: "-0.125em" }}
            />
          </a>
        </Link>
      </li>
      <li className={props.itemClass("last")}>
        <Link href={props.href("last")}>
          <a
            className={props.linkClass()}
            tabIndex={props.disabled("last") ? -1 : 0}
            aria-label="Last"
            aria-disabled={props.disabled("last")}
            onClickCapture={props.blur}
          >
            <IconChevronDoubleRight
              style={{ height: "1em", width: "1em", verticalAlign: "-0.125em" }}
            />
          </a>
        </Link>
      </li>
    </ul>
    <div className={styles.information} aria-label="Page Information">
      {props.currentPage}/{props.pageCount}
    </div>
  </nav>
);
