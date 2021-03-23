import Link from "next/link";
import { useRouter } from "next/router";
import { useHasTouchScreen } from "~/hooks/screen";
import { IconChevronDoubleLeft } from "~/icons/chevron-double-left";
import { IconChevronDoubleRight } from "~/icons/chevron-double-right";
import { IconChevronLeft } from "~/icons/chevron-left";
import { IconChevronRight } from "~/icons/chevron-right";
import { blur } from "~/utils/functions";
import styles from "./style.module.scss";

type Props = {
  currentPage: number;
  pageCount: number;
};

type Part = "first" | "prev" | "next" | "last";

export const Pagination: React.VFC<Props> = (props) => {
  const router = useRouter();
  const { hasTouchScreen } = useHasTouchScreen();

  const disabled = (part: Part) => {
    return ["first", "prev"].includes(part)
      ? props.currentPage < 2
      : props.currentPage >= props.pageCount;
  };

  const disabledSelector = (part: Part) => {
    return disabled(part) ? "disabled" : "";
  };

  return (
    <nav className="text-center" aria-label="Page navigation">
      <ul onClick={blur} className="pagination d-flex">
        <li className={`page-item flex-fill ${disabledSelector("first")}`}>
          <Link href={{ pathname: router.pathname, query: { page: 1 } }}>
            <a
              className={`page-link ${!hasTouchScreen && styles.link}`}
              tabIndex={disabled("first") ? -1 : 0}
              aria-label="First"
              aria-disabled={disabled("first")}
            >
              <IconChevronDoubleLeft className="w-3 h-3" />
            </a>
          </Link>
        </li>
        <li className={`page-item flex-fill ${disabledSelector("prev")}`}>
          <Link
            href={{
              pathname: router.pathname,
              query: { page: props.currentPage - 1 },
            }}
          >
            <a
              className={`page-link ${!hasTouchScreen && styles.link}`}
              tabIndex={disabled("prev") ? -1 : 0}
              aria-label="Prev"
              aria-disabled={disabled("prev")}
            >
              <IconChevronLeft className="w-3 h-3" />
            </a>
          </Link>
        </li>
        <li className={`page-item flex-fill ${disabledSelector("next")}`}>
          <Link
            href={{
              pathname: router.pathname,
              query: { page: props.currentPage + 1 },
            }}
          >
            <a
              className={`page-link ${!hasTouchScreen && styles.link}`}
              tabIndex={disabled("next") ? -1 : 0}
              aria-label="Next"
              aria-disabled={disabled("next")}
            >
              <IconChevronRight className="w-3 h-3" />
            </a>
          </Link>
        </li>
        <li className={`page-item flex-fill ${disabledSelector("last")}`}>
          <Link
            href={{
              pathname: router.pathname,
              query: { page: props.pageCount },
            }}
          >
            <a
              className={`page-link ${!hasTouchScreen && styles.link}`}
              tabIndex={disabled("last") ? -1 : 0}
              aria-label="Last"
              aria-disabled={disabled("last")}
            >
              <IconChevronDoubleRight className="w-3 h-3" />
            </a>
          </Link>
        </li>
      </ul>
      <div className={styles.information} aria-label="Page Information">
        {props.currentPage}/{props.pageCount}
      </div>
    </nav>
  );
};
