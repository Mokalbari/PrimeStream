import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { defineConfig as defineVitestConfig } from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 7050,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
  },
})
