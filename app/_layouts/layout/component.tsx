import { NotificationProvider } from "@/_contexts/notification";
import { Suspense } from "react";
import { Footer } from "../footer";
import { Header } from "../header";
import { Loading } from "../loading";
import { Notification } from "../notification";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <html lang="en">
    <body className="d-flex flex-column min-vh-100 py-7">
      <Suspense>
        <Loading />
      </Suspense>
      <NotificationProvider>
        <Notification />
        <Header />
        <main className="container flex-grow-1">{props.children}</main>
        <Footer />
      </NotificationProvider>
    </body>
  </html>
);
