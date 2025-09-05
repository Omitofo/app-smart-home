/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Habilita dark mode con clase "dark"
  theme: {
    extend: {
      colors: {
        // Fondo general
        "homepage-black": "#0a0a0a",         // fondo principal homepage
        "homepage-gray": "#1c1c1c",          // secciones contrastadas
        "futuristic-gray": "#121212",        // gris base oscuro
        "futuristic-dark": "#0d0d0d",        // negro profundo
        "futuristic-green": "#00FFAA",       // verde acento
        "futuristic-blue": "#1E90FF",        // azul acento
        "futuristic-red": "#FF4C4C",         // rojo para alertas
        "futuristic-yellow": "#FFD700",      // amarillo para iluminación
        "futuristic-purple": "#B19CD9",      // morado para destacados
        "futuristic-orange": "#FF8C42",      // naranja para botones o highlights

        // Grises para contraste y bordes
        "futuristic-gray-light": "#2a2a2a",
        "futuristic-gray-lighter": "#3a3a3a",
        "futuristic-gray-dark": "#0f0f0f",

        // Accentos adicionales
        "futuristic-teal": "#1ABC9C",
        "futuristic-pink": "#FF69B4",
        "futuristic-cyan": "#00FFFF",
      },

      // Bordes y radios
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
        "full": "9999px",
      },

      // Sombras
      boxShadow: {
        "futuristic": "0 4px 20px rgba(0,255,170,0.25)",
        "futuristic-dark": "0 4px 20px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
