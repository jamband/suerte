import { ExternalLink } from "../components/external-link";
import { Layout } from "../layouts/layout";

export default function Page() {
  return (
    <>
      <h1>Contact</h1>
      Please to the message via{" "}
      <ExternalLink href="https://twitter.com/livejam_db">
        Twitter
      </ExternalLink>{" "}
      or{" "}
      <ExternalLink href="https://github.com/jamband/suerte/issues">
        GitHub Issues
      </ExternalLink>
      .
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Contact">{page}</Layout>
);
