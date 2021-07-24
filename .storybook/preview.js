import { RouterContext } from "next/dist/next-server/lib/router-context";
import "../src/styles/app.scss";

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
