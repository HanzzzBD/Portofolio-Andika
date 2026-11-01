import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { certificates } from '../data/content'
import { SectionHeader } from './primitives'
import { EASE } from '../lib/motion'

const FILTERS = ['All', 'Award', 'Training', 'Participation']

function Lightbox({ items, index, onClose, onStep }) {
  const item = items[index]
  const closeRef = useRef(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') onStep(1)
      else if (e.key === 'ArrowLeft') onStep(-1)
      else if (e.key === 'Tab') {
        // Keep focus inside the dialog.
        const f = dialogRef.current?.querySelectorAll('button')
        if (!f?.length) return
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previouslyFocused?.focus?.()
    }
  }, [onClose, onStep])

  return (
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — ${item.event}`}
      ref={dialogRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <div className="lightbox__bar" onClick={(e) => e.stopPropagation()}>
        <span className="mono">
          {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
        <button ref={closeRef} type="button" className="icon-btn" onClick={onClose} aria-label="Close viewer">
          <X size={20} />
        </button>
      </div>

      <div className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="icon-btn lightbox__nav" onClick={() => onStep(-1)} aria-label="Previous certificate">
          <ChevronLeft size={22} />
        </button>
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={item.id}
            className="lightbox__figure"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <img src={`${item.base}-1600.webp`} alt={item.alt} width={1600} height={item.photo ? 900 : 1131} />
            <figcaption>
              <span className="lightbox__title">{item.title}</span>
              <span className="mono">
                {item.event} · {item.issuer}
                {item.date ? ` · ${item.date}` : ''}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
        <button type="button" className="icon-btn lightbox__nav" onClick={() => onStep(1)} aria-label="Next certificate">
          <ChevronRight size={22} />
        </button>
      </div>
    </motion.div>
  )
}

export function Certificates() {
  const [filter, setFilter] = useState('All')
  const [openIndex, setOpenIndex] = useState(null)
  const items = useMemo(() => (filter === 'All' ? certificates : certificates.filter((c) => c.category === filter)), [filter])

  const close = useCallback(() => setOpenIndex(null), [])
  const step = useCallback((d) => setOpenIndex((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length])

  return (
    <section id="certificates" className="section certificates" aria-labelledby="certificates-title">
      <SectionHeader index="06" title={<span id="certificates-title">Certificates &amp; Achievements</span>} aside={`${certificates.length} records`} />

      <div className="filters" role="group" aria-label="Filter certificates">
        {FILTERS.map((f) => (
          <button key={f} type="button" className={`filter${filter === f ? ' is-active' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {filter === f ? <motion.span layoutId="filter-pill" className="filter__pill" transition={{ type: 'spring', stiffness: 500, damping: 38 }} /> : null}
            <span className="filter__label">{f}</span>
          </button>
        ))}
      </div>

      <motion.ul className="certs" layout>
        <AnimatePresence mode="popLayout">
          {items.map((c, i) => (
            <motion.li
              key={c.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.04 }}
              className={`cert${c.category === 'Award' ? ' cert--award' : ''}`}
            >
              <button type="button" className="cert__btn" onClick={() => setOpenIndex(i)} aria-haspopup="dialog" aria-label={`View ${c.title}, ${c.event}`}>
                <span className="cert__thumb">
                  <img src={`${c.base}-${c.photo ? 800 : 640}.webp`} alt="" width={c.photo ? 800 : 640} height={c.photo ? 450 : 452} loading="lazy" decoding="async" />
                  <span className="cert__zoom" aria-hidden="true"><Maximize2 size={16} /></span>
                </span>
                <span className="cert__info">
                  <span className="mono cert__cat">{c.category}{c.date ? ` · ${c.date}` : ''}</span>
                  <span className="cert__title">{c.title}</span>
                  <span className="cert__event">{c.event}</span>
                  <span className="mono cert__issuer">{c.issuer}</span>
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {openIndex !== null ? <Lightbox items={items} index={openIndex} onClose={close} onStep={step} /> : null}
      </AnimatePresence>
    </section>
  )
}
