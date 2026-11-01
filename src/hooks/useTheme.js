import { useCallback, useEffect, useState } from 'react'

const read = () => document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'

export function useTheme() {
  const [theme, setTheme] = useState(read)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])
  return [theme, toggle]
}
