import { LinkExternal } from "../components/link-external";
import { Layout } from "../layouts/layout";

export default function Page() {
  return (
    <>
      <h1>Contact</h1>
      Please to the message via{" "}
      <LinkExternal href="https://twitter.com/livejam_db">
        Twitter
      </LinkExternal>{" "}
      or{" "}
      <LinkExternal href="https://github.com/jamband/suerte/issues">
        GitHub Issues
      </LinkExternal>
      .
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Contact">{page}</Layout>
);
