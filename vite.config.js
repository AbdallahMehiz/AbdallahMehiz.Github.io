import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 6969,
  },
  plugins: [vue()],
  assetsInclude: ["**/*.md"],
});
