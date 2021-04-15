import { CloseButton } from "~/components/close-button";
import styles from "./styles.module.scss";
import type { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <div
    ref={props.notificationRef}
    className={`toast align-items-center ${styles.toast}`}
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div className="d-flex">
      <div className="toast-body">{props.message}</div>
      <CloseButton
        className="me-3 m-auto btn-close-white"
        onClick={props.clear}
        dismiss="toast"
      />
    </div>
  </div>
);
