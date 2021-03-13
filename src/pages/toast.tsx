import { useToast } from "~/hooks/toast";
import { Page } from "~/layouts/page";
import styles from "./toast.module.scss";

const View: React.VFC = () => {
  const { toastRef, showToast } = useToast();

  return (
    <Page title="Toast">
      <h1>Toast</h1>
      <button type="button" className="btn btn-primary" onClick={showToast}>
        Show
      </button>
      <div
        className={`toast ${styles.toast}`}
        ref={toastRef}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto">Toast</strong>
          <small>from version 4.2</small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          />
        </div>
        <div className="toast-body">
          Push notifications to your visitors with a toast, a lightweight and
          easily customizable alert message.
        </div>
      </div>
    </Page>
  );
};

export default View;
