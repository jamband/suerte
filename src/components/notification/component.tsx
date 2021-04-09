import { CloseButton } from "~/components/close-button";
import { _Props } from "./types";
import styles from "./styles.module.scss";

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
