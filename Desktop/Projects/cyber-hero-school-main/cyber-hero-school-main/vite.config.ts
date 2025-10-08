import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    /**
     * ⚙️ BASE :
     * GitHub Pages sert le site sous /cyber-hero-school/
     * donc il faut le préciser ici en prod.
     * En dev (localhost), on garde "/".
     */
    base: isProd ? "/cyber-hero-school/" : "/",

    server: {
      host: "0.0.0.0",  // compatible Windows + WSL
      port: 8080,
      open: true,       // ouvre le navigateur en dev
    },

    plugins: [
      react(),
      mode === "development" && componentTagger(), // tagger activé uniquement en dev
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"), // import '@/...' pour src/
      },
    },

    build: {
      outDir: "dist",        // dossier de sortie par défaut
      emptyOutDir: true,     // nettoie avant build
      sourcemap: !isProd,    // utile en dev, désactivé en prod
      rollupOptions: {
        output: {
          manualChunks: undefined, // bundle unique, plus fiable sur GH Pages
        },
      },
    },

    /**
     * ✅ FIX pour GitHub Pages :
     * Force les chemins relatifs aux assets si besoin.
     * (évite que les images / JS pointent vers la racine / au lieu du sous-dossier)
     */
    assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg", "**/*.webp"],
  };
});
