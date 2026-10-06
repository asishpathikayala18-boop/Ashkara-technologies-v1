import type { Config } from "tailwindcss";
import { designTokens } from "./src/constants/design-tokens";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: designTokens.colors,
      fontFamily: {
        sans: [...designTokens.typography.fontFamily.sans],
      },
      fontSize: {
        eyebrow: [
          designTokens.typography.fontSize.eyebrow[0],
          { ...designTokens.typography.fontSize.eyebrow[1] },
        ],
        body: [
          designTokens.typography.fontSize.body[0],
          { ...designTokens.typography.fontSize.body[1] },
        ],
        lead: [
          designTokens.typography.fontSize.lead[0],
          { ...designTokens.typography.fontSize.lead[1] },
        ],
        display: [
          designTokens.typography.fontSize.display[0],
          { ...designTokens.typography.fontSize.display[1] },
        ],
      },
      spacing: designTokens.spacing,
      borderRadius: designTokens.radius,
      boxShadow: designTokens.shadow,
      maxWidth: designTokens.container,
      transitionTimingFunction: designTokens.animation.easing,
      transitionDuration: designTokens.animation.duration,
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.08) 1px, transparent 0)",
        "aurora":
          "radial-gradient(circle at 18% 20%, rgb(0 163 255 / 0.18), transparent 28%), radial-gradient(circle at 78% 8%, rgb(139 92 246 / 0.18), transparent 32%), radial-gradient(circle at 65% 82%, rgb(45 212 191 / 0.12), transparent 26%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
