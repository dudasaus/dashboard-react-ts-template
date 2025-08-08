import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  // https://vite.dev/guide/static-deploy.html#github-pages
  base: "dashboard-react-ts-template",
  plugins: [react(), tsconfigPaths()],
});
