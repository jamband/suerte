import Head from "next/head";
import { Breadcrumb } from "~/layouts/breadcrumb";
import { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div>
    <Head>
      <title>{props.title}</title>
    </Head>
    <Breadcrumb text={props.title} />
    {props.children}
  </div>
);
