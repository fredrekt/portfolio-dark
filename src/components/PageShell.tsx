import React, { type ReactNode } from "react"
import type { Theme } from "../types/theme"
import { THEME } from "../types/theme"

interface PageShellProps {
  theme: Theme
  children: ReactNode
  className?: string
}

export const PageShell = ({ theme, children, className = "" }: PageShellProps) => (
  <div
    className={`min-h-screen font-sans ${
      theme === THEME.light ? "bg-white text-black" : "bg-black text-white"
    } ${className}`}
  >
    {children}
  </div>
)

interface PageWidthProps {
  children: ReactNode
  className?: string
}

export const PageWidth = ({ children, className = "" }: PageWidthProps) => (
  <div className={`px-4 ${className}`}>{children}</div>
)
