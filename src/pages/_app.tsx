import type { AppProps } from "next/app";
import Head from "next/head";
import { Notification } from "~/components/notification";
import { NotificationProvider } from "~/contexts/notification";
import { Layout } from "~/layouts/layout";
import "~/styles/app.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <NotificationProvider>
        <Notification />
        <Component {...pageProps} />
      </NotificationProvider>
    </Layout>
  );
}
