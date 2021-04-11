import { Button } from "~/components/button";
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
      <Button className="btn-primary" onClick={showNotification}>
        Show
      </Button>
    </Page>
  );
}
