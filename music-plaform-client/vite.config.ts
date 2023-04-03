import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  define: {
    "process.env": process.env,
  },
  server: {
    open: true,
  },
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "assets", replacement: resolve(__dirname, "src/assets") },
      { find: "helpers", replacement: resolve(__dirname, "src/helpers") },
      { find: "hooks", replacement: resolve(__dirname, "src/hooks") },
    ],
    // alias: {
    //   "@": resolve(__dirname, "src"),
    //   assets: resolve(__dirname, "src/assets"),
    //   components: resolve(__dirname, "src/components"),
    //   views: resolve(__dirname, "src/views"),
    //   apis: resolve(__dirname, "src/apis"),
    //   constants: resolve(__dirname, "src/constants"),
    //   reducers: resolve(__dirname, "src/reducers"),
    //   hooks: resolve(__dirname, "src/hooks"),
    //   tools: resolve(__dirname, "src/styles"),
    //   helpers: resolve(__dirname, "src/helpers"),
    // },
    // extensions: [".tsx", ".ts", ".svg", ".jpg", ".png", ".jpeg"],
  },
});
