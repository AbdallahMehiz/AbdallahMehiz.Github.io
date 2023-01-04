import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portofolio/",
  server: {
    host: true,
    port: 6969,
  },
  plugins: [vue()],
});
