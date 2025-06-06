import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { join } from "node:path"
import tailwindcss from "@tailwindcss/vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths() ],
  build: {
    outDir: join(__dirname, "..", "api", "dist", "client"),
    emptyOutDir: true,
  },
})
