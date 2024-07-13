import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { shield } from "@kindspells/astro-shield";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), shield({}), sitemap()],
  site: "https://tphbrok.github.io"
});