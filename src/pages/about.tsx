import { APP_NAME } from "~/constants/app";
import { Page } from "~/layouts/page";

const View: React.VFC = () => {
  return (
    <Page title="About">
      <h1>About</h1>
      <p>
        {APP_NAME} is my private playground for{" "}
        <a href="https://nextjs.org">Next.js</a> and{" "}
        <a href="https://getbootstrap.com">Bootstrap 5</a>.
      </p>
      <p>
        This website is an open source project. See{" "}
        <a
          href="https://github.com/jamband/quiet-nextz"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>{" "}
        for details.
      </p>
    </Page>
  );
};

export default View;
