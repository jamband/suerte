import { rmSync } from "fs";

/** @type {import("fs").RmOptions} */
const options = {
  recursive: true,
  force: true,
};

rmSync(".next", options);
rmSync(".swc", options);
rmSync("node_modules", options);
rmSync("storybook-static", options);
rmSync("tsconfig.tsbuildinfo", options);
