export const designTokens = {
  colors: {
    ink: {
      50: "#f6f8ff",
      100: "#e8edff",
      200: "#cdd8ff",
      300: "#9dafef",
      400: "#7482bf",
      500: "#586394",
      600: "#3f486f",
      700: "#2b334f",
      800: "#171d31",
      900: "#090d18",
      950: "#040711",
    },
    neon: {
      blue: "#00a3ff",
      cyan: "#37e6ff",
      violet: "#8b5cf6",
      purple: "#b45cff",
      mint: "#2dd4bf",
    },
    surface: {
      base: "#050816",
      raised: "rgb(255 255 255 / 0.07)",
      hover: "rgb(255 255 255 / 0.11)",
      line: "rgb(255 255 255 / 0.14)",
      strong: "rgb(255 255 255 / 0.2)",
    },
  },
  typography: {
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "sans-serif",
      ],
    },
    fontSize: {
      eyebrow: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0" }],
      body: ["1rem", { lineHeight: "1.75rem", letterSpacing: "0" }],
      lead: ["1.125rem", { lineHeight: "2rem", letterSpacing: "0" }],
      display: ["clamp(3rem, 7vw, 6.25rem)", { lineHeight: "0.96", letterSpacing: "0" }],
    },
  },
  spacing: {
    18: "4.5rem",
    22: "5.5rem",
    30: "7.5rem",
  },
  radius: {
    xs: "0.375rem",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
  },
  shadow: {
    glow: "0 0 36px rgb(0 163 255 / 0.32)",
    violet: "0 0 44px rgb(139 92 246 / 0.28)",
    glass: "0 24px 80px rgb(0 0 0 / 0.38)",
    button: "0 16px 36px rgb(0 163 255 / 0.22)",
  },
  animation: {
    duration: {
      fast: "160ms",
      base: "240ms",
      slow: "480ms",
    },
    easing: {
      premium: "cubic-bezier(0.22, 1, 0.36, 1)",
    },
  },
  container: {
    "site-sm": "40rem",
    site: "72rem",
    "site-lg": "88rem",
  },
  buttons: {
    height: {
      md: "2.75rem",
      lg: "3.25rem",
    },
  },
  cards: {
    border: "1px solid rgb(255 255 255 / 0.14)",
    background: "linear-gradient(135deg, rgb(255 255 255 / 0.1), rgb(255 255 255 / 0.04))",
  },
} as const;

export type DesignTokens = typeof designTokens;
