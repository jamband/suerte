import { rm } from "node:fs/promises";

await rm(".next", { recursive: true, force: true });
await rm("out", { recursive: true, force: true });
await rm("storybook-static", { recursive: true, force: true });
