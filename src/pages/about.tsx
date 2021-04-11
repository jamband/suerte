import { APP_NAME } from "~/constants/app";
import { LinkExternal } from "~/components/link-external";
import { Page } from "~/layouts/page";

export default function View() {
  return (
    <Page title="About">
      <h1>About</h1>
      <p>
        {APP_NAME} is my private playground for{" "}
        <LinkExternal href="https://nextjs.org">Next.js</LinkExternal> and{" "}
        <LinkExternal href="https://getbootstrap.com">Bootstrap 5</LinkExternal>
        .
      </p>
      <p>
        This website is an open source project. See{" "}
        <LinkExternal href="https://github.com/jamband/quiet-nextz">
          GitHub
        </LinkExternal>{" "}
        for details.
      </p>
    </Page>
  );
}
