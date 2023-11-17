import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@material-ui/core",
      "@material-ui/data-grid",
      "@material-ui/icons",
      "@material-ui/lab",
      "@stripe/react-stripe-js",
      "@stripe/stripe-js",
      "axios",
      "chart.js",
      "country-state-city",
      "overlay-navbar",
      "react-alert",
      "react-alert-template-basic",
      "react-chartjs-2",
      "react-helmet",
      "react-icons",
      "react-js-pagination",
      "react-material-ui-carousel",
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-devtools-extension',
      'redux-thunk',
      'webfontloader',
    ],
  },
  build: {
    prebundle: true,
    minify: "terser",
    outDir: "dist",
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "[name]-[hash].js",
        format: "esm",
      },
    },
  },
});
