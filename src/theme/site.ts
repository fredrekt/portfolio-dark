import { createDarkTheme, createLightTheme } from "baseui"
import type { Font, Theme as BaseTheme } from "baseui/theme"
import { THEME, type Theme } from "../types/theme"

const SANS = "Lato, sans-serif"
const DISPLAY = "Playball, cursive"

const sans = (
  fontSize: string,
  fontWeight: Font["fontWeight"],
  lineHeight: string
): Font => ({
  fontFamily: SANS,
  fontSize,
  fontWeight,
  lineHeight,
})

const display = (fontSize: string, lineHeight: string): Font => ({
  fontFamily: DISPLAY,
  fontSize,
  fontWeight: "normal",
  lineHeight,
})

type Themed = BaseTheme & {
  typography: BaseTheme["typography"] & {
    HeroCompact: Font
    PageTitleCompact: Font
    StatementCompact: Font
    EyebrowCompact: Font
  }
}

const applyScale = (theme: BaseTheme): Themed => {
  const typography = theme.typography as Themed["typography"]

  typography.DisplayLarge = display("10rem", "1.05")
  typography.HeroCompact = display("4rem", "1.1")
  typography.HeadingXXLarge = sans("5rem", 900, "1.05")
  typography.PageTitleCompact = sans("3rem", 900, "1.05")
  typography.HeadingXLarge = sans("3.25rem", 700, "1.25")
  typography.StatementCompact = sans("2.25rem", 700, "1.3")
  typography.HeadingLarge = sans("2.5rem", 700, "1.2")
  typography.HeadingMedium = sans("2rem", 700, "1.25")
  typography.HeadingSmall = sans("1.5rem", 700, "1.35")
  typography.HeadingXSmall = sans("1.25rem", 500, "1.4")
  typography.ParagraphLarge = sans("1.3rem", 400, "1.7")
  typography.ParagraphMedium = sans("1rem", 400, "1.7")
  typography.LabelMedium = sans("0.95rem", 500, "1.4")
  typography.EyebrowCompact = sans("0.72rem", 500, "1.4")

  return theme as Themed
}

const primitives = { primaryFontFamily: SANS }

export const lightTheme = applyScale(
  createLightTheme(primitives, { colors: { contentPrimary: "#000" } })
)
export const darkTheme = applyScale(
  createDarkTheme(primitives, { colors: { contentPrimary: "#fff" } })
)

export const siteTheme = (theme: Theme) =>
  theme === THEME.light ? lightTheme : darkTheme

export const heroFont = ["HeroCompact", "HeroCompact", "DisplayLarge"]
export const pageTitleFont = [
  "PageTitleCompact",
  "PageTitleCompact",
  "HeadingXXLarge",
]
export const statementFont = [
  "StatementCompact",
  "StatementCompact",
  "HeadingXLarge",
]
export const eyebrowFont = ["EyebrowCompact", "EyebrowCompact", "LabelMedium"]
