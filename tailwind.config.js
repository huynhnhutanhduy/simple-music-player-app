/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-content": "calc(100vh - 105px)",
      },
      colors: {
        song: "#4F3B78",
        "song-list": "#202040",
        "song-name": "#C4BBF0",
      },
    },
  },
  plugins: [],
};
