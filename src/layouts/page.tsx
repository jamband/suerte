import Head from "next/head";
import { APP_NAME } from "~/constants/app";

type Props = {
  title: string;
};

export const Page: React.FC<Props> = (props) => {
  const title = props.title === "" ? APP_NAME : `${props.title} · ${APP_NAME}`;

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {props.children}
    </div>
  );
};
