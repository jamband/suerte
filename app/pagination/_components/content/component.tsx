import { BoxImage } from "@/_components/box-image";
import { Pagination } from "@/_components/pagination";
import { IconArrowLeft } from "@/_icons/arrow-left";
import { IconCircleExclamation } from "@/_icons/circle-exclamation";
import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    {props.isValidCurrentPage ? (
      <>
        <div className={styles.boxContainer}>
          {[...Array(props.lastPage)].map((_, index) => (
            <BoxImage
              key={index}
              size={26}
              color={props.match(index) ? "#4b5563" : "#d1d5db"}
              className={styles.box}
              title={
                props.match(index)
                  ? `current page: ${props.currentPage}`
                  : undefined
              }
              disabled={props.match(index) ? undefined : true}
            />
          ))}
        </div>
        <Pagination
          pathname="/pagination"
          currentPage={props.currentPage}
          lastPage={props.lastPage}
          className={styles.pagination}
        />
      </>
    ) : (
      <div className={styles.alertContainer}>
        <div className={styles.alert}>
          <h2 className={styles.alertTitle}>Invalid page parameter:</h2>
          <p className={styles.alertDescription}>
            <IconCircleExclamation className={styles.alertIcon} />
            Page parameters must be between 1 and 10.
          </p>
        </div>
        <div className={styles.alertLinkContainer}>
          <Link href="/pagination" className={styles.alertLink}>
            <IconArrowLeft className={styles.alertLinkIcon} />
            Back to Pagination
          </Link>
        </div>
      </div>
    )}
  </>
);
