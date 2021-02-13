import { DenonConfig } from "https://deno.land/x/denon@2.4.7/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run ./src/app.ts",
      desc: "run my ./src/app.ts file",
      allow: ["net"],
    },
  },
};

export default config;
