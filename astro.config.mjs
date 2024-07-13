import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { shield } from "@kindspells/astro-shield";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    shield({
      securityHeaders: {
        contentSecurityPolicy: {
          cspDirectives: {
            "script-src": "self gc.zgo.at",
          },
        },
      },
    }),
  ],
  site: "https://tphbrok.github.io",
});
