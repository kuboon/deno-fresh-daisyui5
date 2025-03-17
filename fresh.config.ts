import { defineConfig } from "$fresh/server.ts";

// waiting official support https://github.com/denoland/fresh/issues/2819
import tailwind from "@pakornv/fresh-plugin-tailwindcss";

export default defineConfig({
  plugins: [tailwind()],
});
