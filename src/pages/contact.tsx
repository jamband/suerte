import { LinkExternal } from "~/components/link-external";
import { Page } from "~/layouts/page";

export default function View() {
  return (
    <Page title="Contact">
      <h1>Contact</h1>
      Please to the message via{" "}
      <LinkExternal href="https://twitter.com/livejam_db">
        Twitter
      </LinkExternal>{" "}
      or{" "}
      <LinkExternal href="https://github.com/jamband/quiet-nextz/issues">
        GitHub Issues
      </LinkExternal>
      .
    </Page>
  );
}
