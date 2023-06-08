import { CloseButton } from "@/_components/close-button";
import { APP_NAME } from "@/_constants/app";
import { IconInfoCircleFill } from "@/_icons/info-circle-fill";
import type { Metadata } from "next";
import { Alert } from "./_components/alert";
import { ReloadButton } from "./_components/reload-button";
import { Breadcrumb } from "@/_layouts/breadcrumb";

export const metadata: Metadata = {
  title: "Alert",
};

export default function Page() {
  return (
    <div>
      <Breadcrumb text="Alert" />
      <h1>Alert</h1>
      <div className="text-end">
        <ReloadButton />
      </div>
      <Alert className="show my-3 bg-light shadow-sm">
        <IconInfoCircleFill
          style={{ height: "1em", width: "1em", verticalAlign: "-0.125em" }}
        />
        <span className="ms-1">
          {APP_NAME} is my private playground for Next.js and Bootstrap 5
        </span>
        <CloseButton dismiss="alert" />
      </Alert>
    </div>
  );
}
