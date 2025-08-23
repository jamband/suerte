import type { Metadata } from "next";
import { APP_NAME } from "./_constants/app";
import { Layout } from "./_layouts/layout";

export const metadata: Metadata = {
  title: {
    template: `%s ･ ${APP_NAME}`,
    default: APP_NAME,
  },
};

export default function RootLayout(props: LayoutProps<"/">) {
  return <Layout>{props.children}</Layout>;
}
