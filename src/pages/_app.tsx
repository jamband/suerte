import type { AppProps } from "next/app";
import { Notification } from "~/components/notification";
import { NotificationProvider } from "~/contexts/notification";
import { Layout } from "~/layouts/layout";
import "~/styles/app.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NotificationProvider>
        <Notification />
        <Component {...pageProps} />
      </NotificationProvider>
    </Layout>
  );
}
