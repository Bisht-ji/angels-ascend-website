import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode, command }) => {
  // Use the base path passed from the build command or default to '/'
  const base = command === 'build' ? undefined : '/'; // Let the CLI --base override in production

  return {
    server: {
      port: 8080
    },
    base,
    plugins: [
      react(),
      mode === 'development' && componentTagger()
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
