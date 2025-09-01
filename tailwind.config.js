/** @type {import(&#39;tailwindcss&#39;).Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandBg: "#f1f1f6",
        brandPrimary: "#4c4c96",
        brandFigure: "#323261",
        accent: "#ff7847"
      }
    }
  },
  plugins: []
};
