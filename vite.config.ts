import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { fileURLToPath } from "node:url"
import { resolve } from "node:path"
import tailwindcss from "@tailwindcss/vite"
const __dirname = fileURLToPath(new URL(".", import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/ZTIC-Overhauled"
,
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
})
