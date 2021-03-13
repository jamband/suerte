import { AppProps } from "next/app";
import { Layout } from "~/layouts/layout";
import "~/styles/app.scss";

const Component: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default Component;
