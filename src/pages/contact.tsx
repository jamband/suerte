import { IconBoxArrowUpRight } from "@/icons/box-arrow-up-right";
import { Layout } from "@/layouts/layout";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
  return (
    <>
      <h1>Contact</h1>
      Please to the message via{" "}
      <a href="https://twitter.com/livejam_db" target="_blank" rel="noreferrer">
        Twitter
        <IconBoxArrowUpRight
          style={{
            marginLeft: "0.2rem",
            height: "0.8em",
            width: "0.8em",
            verticalAlign: "0em",
          }}
        />
      </a>{" "}
      or{" "}
      <a
        href="https://github.com/jamband/suerte/issues"
        target="_blank"
        rel="noreferrer"
      >
        GitHub Issues
        <IconBoxArrowUpRight
          style={{
            marginLeft: "0.2rem",
            height: "0.8em",
            width: "0.8em",
            verticalAlign: "0em",
          }}
        />
      </a>
      .
    </>
  );
};

Page.getLayout = (page) => <Layout title="Contact">{page}</Layout>;

export default Page;
