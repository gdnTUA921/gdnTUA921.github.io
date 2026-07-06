import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // NOTE: If deploying to GitHub Pages under a repo subpath
  // (e.g. https://<user>.github.io/<repo>/), set base to '/<repo>/'.
  // For Vercel/Netlify, the default '/' is correct.
  base: '/',
});
