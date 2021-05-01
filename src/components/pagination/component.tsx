import Link from "next/link";
import { IconChevronDoubleLeft } from "~/icons/chevron-double-left";
import { IconChevronDoubleRight } from "~/icons/chevron-double-right";
import { IconChevronLeft } from "~/icons/chevron-left";
import { IconChevronRight } from "~/icons/chevron-right";
import { blur } from "~/utils/functions";
import styles from "./style.module.scss";
import type { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <nav className="text-center" aria-label="Page navigation">
    <ul onClick={blur} className="pagination d-flex" role="presentation">
      <li className={`page-item flex-fill ${props.disabledSelector("first")}`}>
        <Link href={props.pageLink(1)}>
          <a
            className={`page-link ${!props.hasTouchScreen && styles.link}`}
            tabIndex={props.disabled("first") ? -1 : 0}
            aria-label="First"
            aria-disabled={props.disabled("first")}
          >
            <IconChevronDoubleLeft size="0.8em" />
          </a>
        </Link>
      </li>
      <li
        className={`page-item flex-fill ${props.disabledSelector("previous")}`}
      >
        <Link href={props.pageLink(props.currentPage - 1)}>
          <a
            className={`page-link ${!props.hasTouchScreen && styles.link}`}
            tabIndex={props.disabled("previous") ? -1 : 0}
            aria-label="Previous"
            aria-disabled={props.disabled("previous")}
          >
            <IconChevronLeft size="0.8em" />
          </a>
        </Link>
      </li>
      <li className={`page-item flex-fill ${props.disabledSelector("next")}`}>
        <Link href={props.pageLink(props.currentPage + 1)}>
          <a
            className={`page-link ${!props.hasTouchScreen && styles.link}`}
            tabIndex={props.disabled("next") ? -1 : 0}
            aria-label="Next"
            aria-disabled={props.disabled("next")}
          >
            <IconChevronRight size="0.8em" />
          </a>
        </Link>
      </li>
      <li className={`page-item flex-fill ${props.disabledSelector("last")}`}>
        <Link href={props.pageLink(props.pageCount)}>
          <a
            className={`page-link ${!props.hasTouchScreen && styles.link}`}
            tabIndex={props.disabled("last") ? -1 : 0}
            aria-label="Last"
            aria-disabled={props.disabled("last")}
          >
            <IconChevronDoubleRight size="0.8em" />
          </a>
        </Link>
      </li>
    </ul>
    <div className={styles.information} aria-label="Page Information">
      {props.currentPage}/{props.pageCount}
    </div>
  </nav>
);
