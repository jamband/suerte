import { ExternalLink } from "~/components/external-link";
import { Layout } from "~/layouts/layout";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
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
};

Page.getLayout = (page) => <Layout title="Contact">{page}</Layout>;

export default Page;
