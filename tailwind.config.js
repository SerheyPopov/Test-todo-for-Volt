/** @type {import('tailwindcss').Config} */
export default {
  "content": ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  "theme": {
    "extend": {
      "boxShadow": {
        "todo": "rgba(80, 193, 251, 0.12) 0px 2px 4px 0px, rgba(80, 193, 251, 0.32) 0px 2px 16px 0px",
      },
    },
  },
  "plugins": [],
};
