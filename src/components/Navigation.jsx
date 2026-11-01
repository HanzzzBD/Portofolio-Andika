import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navItems, socials } from '../data/content'
import { brandIcons } from '../lib/brandIcons'

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={!isDark}
    >
      <motion.span
        className="theme-toggle__knob"
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 34 }}
        style={{ marginLeft: isDark ? 'auto' : 0 }}
      >
        {isDark ? <Moon size={12} strokeWidth={2} /> : <Sun size={12} strokeWidth={2} />}
      </motion.span>
    </button>
  )
}

function SocialList({ className }) {
  return (
    <ul className={className}>
      {socials.map(({ id, label, href }) => {
        const Icon = brandIcons[id]
        return (
          <li key={id}>
            <a href={href} target="_blank" rel="noreferrer" aria-label={`${label} (opens in a new tab)`}>
              <Icon width={18} height={18} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export function Rail({ active, theme, onToggleTheme }) {
  return (
    <aside className="rail" aria-label="Site">
      <a href="#home" className="rail__brand">
        <span className="mono">Andika Rasya Putra</span>
      </a>
      <nav aria-label="Primary">
        <ul className="rail__nav">
          {navItems.map((item, i) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={active === item.id ? 'is-active' : undefined} aria-current={active === item.id ? 'true' : undefined}>
                <span className="mono rail__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="rail__label">{item.label}</span>
                {active === item.id ? <motion.span className="rail__underline" layoutId="rail-underline" transition={{ type: 'spring', stiffness: 420, damping: 36 }} /> : null}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <SocialList className="rail__social" />
      <div className="rail__foot">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <span className="mono rail__copy">© 2026</span>
      </div>
    </aside>
  )
}

export function MobileBar({ active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="mobilebar">
        <a href="#home" className="mobilebar__brand" onClick={() => setOpen(false)}>
          <span className="rail__mark" aria-hidden="true">A/R</span>
          <span className="mono">Andika R. Putra</span>
        </a>
        <div className="mobilebar__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="icon-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav aria-label="Mobile">
              <motion.ul
                className="mobile-menu__list"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
              >
                {navItems.map((item, i) => (
                  <motion.li key={item.id} variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}>
                    <a href={`#${item.id}`} onClick={() => setOpen(false)} className={active === item.id ? 'is-active' : undefined}>
                      <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
            <SocialList className="mobile-menu__social" />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
