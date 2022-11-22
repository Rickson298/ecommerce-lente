import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@shared": fileURLToPath(new URL("./src/shared", import.meta.url)),
      "@global-styles": fileURLToPath(
        new URL("./src/shared/styles", import.meta.url)
      ),
      "@hooks": fileURLToPath(new URL("./src/shared/hooks", import.meta.url)),
      "@content-page": fileURLToPath(
        new URL("./src/content-page", import.meta.url)
      ),
      "@constants": fileURLToPath(
        new URL("./src/shared/contants", import.meta.url)
      ),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
    },
  },
});
