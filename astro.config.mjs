import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://juanramirez.es",
  output: "static",
  integrations: [sitemap()]
});
