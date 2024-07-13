import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { shield } from "@kindspells/astro-shield";
import mdx from "@astrojs/mdx";

export default defineConfig({
    integrations: [tailwind(), mdx(), shield({})],
    site: "https://tphbrok.github.io",
});
