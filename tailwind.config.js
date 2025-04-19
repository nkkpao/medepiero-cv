module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C0032", // Нежно-синий
        secondary: "#190061", // Сине-фиолетовый
        soft: "#ffffff", // Белый для текста
        accent: "#b6b6b6", // Светлый акцент (светлый серый для кнопок)
        dark: "#1a1a1a", // Черный для карточек
      },
      backgroundImage: {
        "gradient-radial": "linear-gradient(135deg, #6a11cb, #2575fc)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
