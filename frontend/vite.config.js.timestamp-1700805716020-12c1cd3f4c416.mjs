// vite.config.js
import { defineConfig } from "file:///D:/react/New%20Series/eccomerceMain/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///D:/react/New%20Series/eccomerceMain/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
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
      // 'react-redux',
      "react-router-dom",
      // 'redux',
      // 'redux-devtools-extension',
      // 'redux-thunk',
      "webfontloader"
    ]
  },
  build: {
    prebundle: true,
    minify: "terser",
    outDir: "dist",
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "[name]-[hash].js",
        format: "esm"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxyZWFjdFxcXFxOZXcgU2VyaWVzXFxcXGVjY29tZXJjZU1haW5cXFxcZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHJlYWN0XFxcXE5ldyBTZXJpZXNcXFxcZWNjb21lcmNlTWFpblxcXFxmcm9udGVuZFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcmVhY3QvTmV3JTIwU2VyaWVzL2VjY29tZXJjZU1haW4vZnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbXG4gICAgICBcInJlYWN0XCIsXG4gICAgICBcInJlYWN0LWRvbVwiLFxuICAgICAgXCJAbWF0ZXJpYWwtdWkvY29yZVwiLFxuICAgICAgXCJAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkXCIsXG4gICAgICBcIkBtYXRlcmlhbC11aS9pY29uc1wiLFxuICAgICAgXCJAbWF0ZXJpYWwtdWkvbGFiXCIsXG4gICAgICBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCIsXG4gICAgICBcIkBzdHJpcGUvc3RyaXBlLWpzXCIsXG4gICAgICBcImF4aW9zXCIsXG4gICAgICBcImNoYXJ0LmpzXCIsXG4gICAgICBcImNvdW50cnktc3RhdGUtY2l0eVwiLFxuICAgICAgXCJvdmVybGF5LW5hdmJhclwiLFxuICAgICAgXCJyZWFjdC1hbGVydFwiLFxuICAgICAgXCJyZWFjdC1hbGVydC10ZW1wbGF0ZS1iYXNpY1wiLFxuICAgICAgXCJyZWFjdC1jaGFydGpzLTJcIixcbiAgICAgIFwicmVhY3QtaGVsbWV0XCIsXG4gICAgICBcInJlYWN0LWljb25zXCIsXG4gICAgICBcInJlYWN0LWpzLXBhZ2luYXRpb25cIixcbiAgICAgIFwicmVhY3QtbWF0ZXJpYWwtdWktY2Fyb3VzZWxcIixcbiAgICAgIC8vICdyZWFjdC1yZWR1eCcsXG4gICAgICAncmVhY3Qtcm91dGVyLWRvbScsXG4gICAgICAvLyAncmVkdXgnLFxuICAgICAgLy8gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbicsXG4gICAgICAvLyAncmVkdXgtdGh1bmsnLFxuICAgICAgJ3dlYmZvbnRsb2FkZXInLFxuICAgIF0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgcHJlYnVuZGxlOiB0cnVlLFxuICAgIG1pbmlmeTogXCJ0ZXJzZXJcIixcbiAgICBvdXREaXI6IFwiZGlzdFwiLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJhc3NldHMvW25hbWVdLVtoYXNoXS5qc1wiLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJbbmFtZV0tW2hhc2hdLmpzXCIsXG4gICAgICAgIGZvcm1hdDogXCJlc21cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VCxTQUFTLG9CQUFvQjtBQUN6VixPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLGNBQWM7QUFBQSxJQUNaLFNBQVM7QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
