import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    storybookTest({ configDir: path.join(dirname, ".storybook") }),
  ],
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: ["./tests/setup.ts", ".storybook/vitest.setup.ts"],
    browser: {
      enabled: true,
      headless: true,
      provider: "playwright",
      instances: [{ browser: "chromium" }],
    },
  },
  define: {
    "process.env.NODE_ENV": '"test"',
  },
});
