import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    global: {}, // Add a global object polyfill if needed
  },
  build: {
    outDir: "dist", // Ensure the output directory is correct for Vercel
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Split vendor code for optimization
        },
      },
    },
  },
  server: {
    port: 3000, // Optional: Local dev server port
  },
  base: "/", // Ensure base is set to `/` unless deploying to a subdirectory
});
