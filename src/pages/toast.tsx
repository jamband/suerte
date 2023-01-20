import { Button } from "@/components/button";
import { useNotificationAction } from "@/hooks/notification";
import { Layout } from "@/layouts/layout";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
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
};

Page.getLayout = (page) => <Layout title="Toast">{page}</Layout>;

export default Page;
