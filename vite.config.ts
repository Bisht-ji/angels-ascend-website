import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1] || '';
  const isUserSite = repo.endsWith('.github.io');
  const base = mode === 'production' ? (isUserSite ? '/' : `/${repo}/`) : '/';

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
