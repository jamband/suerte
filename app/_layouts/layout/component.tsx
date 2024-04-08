import { NotificationProvider } from "@/_contexts/notification";
import "@/_styles/app.css";
import { Suspense } from "react";
import { Footer } from "../footer";
import { Header } from "../header";
import { Loading } from "../loading";
import { Notification } from "../notification";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <html lang="en">
    <body>
      <Suspense>
        <Loading />
      </Suspense>
      <NotificationProvider>
        <Notification />
        <Header />
        <main className={styles.main}>{props.children}</main>
        <Footer />
      </NotificationProvider>
    </body>
  </html>
);
