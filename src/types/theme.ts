export const THEME = {
  light: "light",
  dark: "dark",
} as const

export type Theme = (typeof THEME)[keyof typeof THEME]

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return THEME.light
  return window.localStorage.getItem("themeColor") === THEME.dark
    ? THEME.dark
    : THEME.light
}
