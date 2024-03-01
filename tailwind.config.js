/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      "kode-mono": ['"Kodo Mono"', "sans-serif"],
      body: ["Open Sans", "sans-serif"],
      garamond: ['"EB Garamond"', "serif"],
      lora: ["Lora", "serif"],
      Namdhinggo: ["Namdhinggo", "serif"],
      Gothic: ["Nanum Gothic", "serif"],
      Kalnia: ["Kalnia", "serif"],
      Merienda: ["Merienda", "cursive"],
      "protest-guerrilla": ["Protest Guerrilla", "sans-serif"],
      Comfortaa: ["Comfortaa", "serif"],
      Rubik: ["Rubik Doodle Shadow", "serif"],
      RubikM: ["Rubik Moonrocks", 'serif'],
      RubikWet: ["Rubik Wet Paint", 'serif'],
      'protest-rev': ["Protest Revolution", 'serif'],
      Cabin: ["Cabin Sketch", 'serif'],
      Lilita: ["Lilita One", 'serif'],
      Madimi: ["Madimi One", 'serif'],
      anta: ["Anta", 'serif'],
      Dancing : ["Dancing Script", 'serif'],
      
      
      
      
      
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        typing: "typing 1s steps(20, end), blink-caret 0.5s step-end infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "orange" },
        },
      },
    },
  },
  plugins: [],
};
