import { useEffect, useState } from 'react'

// Tracks which section crosses the middle band of the viewport.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
