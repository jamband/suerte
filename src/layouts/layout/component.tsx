import Head from "next/head";
import { NotificationProvider } from "../../contexts/notification";
import { Breadcrumb } from "../breadcrumb";
import { Footer } from "../footer";
import { Header } from "../header";
import { Loading } from "../loading";
import { Notification } from "../notification";
import { Title } from "../title";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
    </Head>
    <NotificationProvider>
      <Title title={props.title} />
      <Loading />
      <Notification />
      <div className="d-flex flex-column min-vh-100 py-7">
        <Header />
        <div className="container flex-grow-1">
          <Breadcrumb text={props.title} />
          {props.children}
        </div>
        <Footer />
      </div>
    </NotificationProvider>
  </>
);
