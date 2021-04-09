import { useNotificationAction } from "~/hooks/notification";
import { Page } from "~/layouts/page";

export default function View() {
  const { setNotification } = useNotificationAction();

  const showNotification = () => {
    setNotification("Hello, world! This is a toast message.");
  };

  return (
    <Page title="Toast">
      <h1>Toast</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={showNotification}
      >
        Show
      </button>
    </Page>
  );
}
