import { motion } from 'framer-motion'
import { EASE } from '../lib/motion'

// Framer Motion owns opacity/translate of these wrappers. GSAP never targets them.
export function Reveal({ as = 'div', delay = 0, y = 24, className, children, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionHeader({ index, title, aside }) {
  return (
    <header className="section-header">
      <div className="section-header__row">
        <span className="mono section-header__index">({index})</span>
        <h2 className="section-header__title">{title}</h2>
        {aside ? <span className="mono section-header__aside">{aside}</span> : null}
      </div>
      {/* GSAP draws this rule on scroll (scaleX). */}
      <span className="rule" data-rule aria-hidden="true" />
    </header>
  )
}

// Responsive WebP built from `${base}-${w}.webp` variants.
export function Picture({ base, widths, sizes, alt, width, height, className, priority = false }) {
  const srcSet = widths.map((w) => `${base}-${w}.webp ${w}w`).join(', ')
  return (
    <img
      className={className}
      src={`${base}-${widths[widths.length - 1]}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  )
}
