import { APP_NAME } from "~/constants/app";
import { IconInfoCircleFill } from "~/icons/info-circle-fill";
import { useAlert } from "~/hooks/alert";
import { Page } from "~/layouts/page";

const View: React.VFC = () => {
  useAlert();
  const reload = () => location.reload();

  return (
    <Page title="Alert">
      <h1>Alert</h1>
      <div className="text-end">
        <button type="button" className="btn btn-primary" onClick={reload}>
          Reload
        </button>
      </div>
      <div
        className="alert alert-dismissible show fade my-3 bg-light shadow-sm"
        role="alert"
      >
        <IconInfoCircleFill className="w-4 h-4" />
        <span className="ps-1">
          {APP_NAME} is my private playground for Next.js and Bootstrap 5
        </span>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>
    </Page>
  );
};

export default View;
