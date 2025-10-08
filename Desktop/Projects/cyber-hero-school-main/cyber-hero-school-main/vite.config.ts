import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    // IMPORTANT pour GitHub Pages (assets sous /cyber-hero-school/)
    base: isProd ? "/cyber-hero-school/" : "/",

    server: {
      host: "::",
      port: 8080,
    },

    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    build: {
      outDir: "dist",   // par défaut, mais on le précise
      emptyOutDir: true
    }
  };
});
