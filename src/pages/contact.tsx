import { Page } from "~/layouts/page";

const View: React.VFC = () => {
  return (
    <Page title="Contact">
      <h1>Contact</h1>
      Please to the message via{" "}
      <a
        href="https://twitter.com/livejam_db"
        rel="noopener noreferrer"
        target="_blank"
      >
        Twitter
      </a>{" "}
      or{" "}
      <a
        href="https://github.com/jamband/quiet-nextz/issues"
        rel="noopener noreferrer"
        target="_blank"
      >
        GitHub Issues
      </a>
      .
    </Page>
  );
};

export default View;
