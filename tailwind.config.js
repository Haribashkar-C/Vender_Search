/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {
    colors: { navy: "#102653", brand: "#155eef", pale: "#f4f7ff" },
    boxShadow: { soft: "0 8px 30px rgba(16, 38, 83, .07)" }
  }},
  plugins: []
};