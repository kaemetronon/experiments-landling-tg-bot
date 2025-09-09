"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

type Theme = "light" | "dark"

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light"
  const stored = window.localStorage.getItem("theme") as Theme | null
  if (stored === "light" || stored === "dark") return stored
  // Time-based fallback: GMT+3 — dark after 22:00, light from 06:00
  try {
    const now = new Date()
    // Convert current UTC time to GMT+3 hours
    const utcHour = now.getUTCHours()
    const gmt3Hour = (utcHour + 3) % 24
    if (gmt3Hour >= 22 || gmt3Hour < 6) return "dark"
    return "light"
  } catch {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    return prefersDark ? "dark" : "light"
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const initial = getInitialTheme()
    setTheme(initial)
    const root = document.documentElement
    if (initial === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [])

  useEffect(() => {
    if (typeof document === "undefined") return
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    try {
      window.localStorage.setItem("theme", theme)
    } catch {}
  }, [theme])

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"))

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggle}
      className="group relative inline-flex items-center gap-2 rounded-full border-2 border-border bg-card/70 px-3 py-2 shadow-md backdrop-blur transition-all hover:shadow-lg hover:border-accent"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <span
        className="grid h-6 w-6 place-items-center rounded-full bg-accent text-accent-foreground transition-transform group-active:scale-95"
      >
        {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
      <span className="text-xs font-semibold text-foreground/80">
        {theme === "dark" ? "Ночь" : "День"}
      </span>
    </button>
  )
}


