import { APP_NAME } from "~/constants/app";

export const Footer: React.VFC = () => {
  return (
    <footer className="fixed-bottom py-3 text-center bg-light">
      {APP_NAME}
    </footer>
  );
};
