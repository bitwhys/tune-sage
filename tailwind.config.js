const {
  sand,
  sandDark,
  amber,
  amberDark,
  red,
  redDark,
  blue,
  blueDark,
  orange,
  orangeDark,
  green,
  greenDark,
  oliveDark,
  limeDark,
  mauveDark,
  crimsonDark,
  blackA
} = require("@radix-ui/colors")

const radixToTailwind = (radixColorObject) => {
  const captureScaleRegEx = new RegExp(/(\d{1,2})/)
  const color = {}
  for (const [token, value] of Object.entries(radixColorObject)) {
    const match = token.match(captureScaleRegEx)
    if (match) {
      Object.assign(color, { [match[1]]: value })
    }
  }
  return color
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./popup/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          ...radixToTailwind(crimsonDark)
        },
        neutral: radixToTailwind(mauveDark),
        overlay: radixToTailwind(blackA)
      },
      backgroundColor: {
        canvas: "hsl(var(--canvas))",
        muted: "hsl(var(--muted))",
        "primary-accent": "hsl(var(--primary-accent))"
      },
      textColor: {
        "on-canvas": "hsl(var(--on-canvas))",
        "on-muted": "hsl(var(--muted-foreground))",
        "on-primary": "hsl(var(--on-primary))",
        "on-primary-muted": "hsl(var(--on-primary-muted))",
        subtle: "hsl(var(--subtle))"
      },
      keyframes: {},
      animation: {}
    }
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")]
}
