import { ExternalLink } from "../components/external-link";
import { APP_NAME } from "../constants/app";
import { Layout } from "../layouts/layout";

export default function Page() {
  return (
    <>
      <h1>About</h1>
      <p>
        {APP_NAME} is my private playground for{" "}
        <ExternalLink href="https://nextjs.org">Next.js</ExternalLink> and{" "}
        <ExternalLink href="https://getbootstrap.com">Bootstrap 5</ExternalLink>
        .
      </p>
      <p>
        This website is an open source project. See{" "}
        <ExternalLink href="https://github.com/jamband/suerte">
          GitHub
        </ExternalLink>{" "}
        for details.
      </p>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="About">{page}</Layout>
);
