// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.ASTRO_SITE || "https://bloque3.github.io";
const base = process.env.ASTRO_BASE !== undefined ? process.env.ASTRO_BASE : "/";

export default defineConfig({
  site,
  base,
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
