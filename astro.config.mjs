// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://diegowebdev.com.br/",
  output: "static",

  server: {
    host: true,
  },

  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  // https://docs.astro.build/en/guides/integrations-guide/cloudflare/
  adapter: cloudflare({ imageService: "custom" }),
});
