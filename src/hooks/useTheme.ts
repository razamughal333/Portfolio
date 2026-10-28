import { useCallback, useState } from 'react'

export type Theme = 'dark' | 'light'

// index.html already set data-theme before the page painted, so we just read it.
function readTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme)

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be blocked (private window); the theme still works for this visit.
    }
    setTheme(next)
  }, [theme])

  return { theme, toggleTheme }
}
