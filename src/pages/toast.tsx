import { Button } from "~/components/button";
import { useNotificationAction } from "~/hooks/notification";
import { Layout } from "~/layouts/layout";

export default function Page() {
  const { setNotification } = useNotificationAction();

  const showNotification = () => {
    setNotification("Hello, world! This is a toast message.");
  };

  return (
    <>
      <h1>Toast</h1>
      <Button type="button" className="btn-primary" onClick={showNotification}>
        Show
      </Button>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Toast">{page}</Layout>
);
