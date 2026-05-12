import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://juan-ramirez.es",
  output: "static",
  integrations: [sitemap()]
});
