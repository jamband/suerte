import { Alert } from "../components/alert";
import { Button } from "../components/button";
import { CloseButton } from "../components/close-button";
import { APP_NAME } from "../constants/app";
import { IconInfoCircleFill } from "../icons/info-circle-fill";
import { Layout } from "../layouts/layout";

export default function Page() {
  const reload = () => location.reload();

  return (
    <>
      <h1>Alert</h1>
      <div className="text-end">
        <Button className="btn-primary" onClick={reload}>
          Reload
        </Button>
      </div>
      <Alert className="show my-3 bg-light shadow-sm">
        <IconInfoCircleFill />
        <span className="ps-1">
          {APP_NAME} is my private playground for Next.js and Bootstrap 5
        </span>
        <CloseButton dismiss="alert" />
      </Alert>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Alert">{page}</Layout>
);
