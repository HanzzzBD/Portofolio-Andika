import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { gsap, MQ, useGSAP } from '../lib/gsap'
import { heroFacts, profile, socials } from '../data/content'
import { brandIcons } from '../lib/brandIcons'
import { MOTION } from '../lib/motion'

const NAME_LINES = ['Andika', 'Rasya', 'Putra']

export function Hero() {
  const root = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MQ.motion, () => {
        const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: MOTION.cinematic } })
        const strokes = gsap.utils.toArray('.hero__stroke:not(.hero__stroke--dash)')
        strokes.forEach((path) => {
          const length = path.getTotalLength()
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
        })

        tl.from('.hero__line-text', { yPercent: 108, stagger: MOTION.stagger * 2, duration: MOTION.cinematic })
          .to(strokes, { strokeDashoffset: 0, stagger: MOTION.stagger * 1.5, duration: MOTION.cinematic, ease: 'power2.inOut' }, 0.2)
          .to('.hero__stroke--dash', { strokeDashoffset: -24, duration: 1.5, ease: 'power2.inOut' }, 0.2)
          .from('.hero__ornament-dot', { scale: 0, transformOrigin: 'center', stagger: 0.12, duration: 0.55 }, 0.82)
          .from('.hero__mask', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.5, ease: 'expo.inOut' }, 0.35)
          .from('.hero__img', { scale: 1.3, duration: 1.8 }, 0.35)
          .from('.hero__fade', { autoAlpha: 0, y: 18, stagger: 0.07, duration: 0.9 }, 0.72)
          .from('.hero__rule', { scaleX: 0, transformOrigin: 'left center', duration: 1.4 }, 0.7)

        // Scroll-out: name drifts up slower than the page, portrait parallaxes.
        gsap.to('.hero__name', {
          yPercent: -18,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        })
        gsap.to('.hero__parallax', {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        })

        // A small pointer response adds depth without moving the portrait or layout.
        const hero = root.current
        const ornament = hero?.querySelector('.hero__ornament')
        if (hero && ornament && window.matchMedia('(pointer: fine)').matches) {
          const moveX = gsap.quickTo(ornament, 'x', { duration: 0.7, ease: 'power3.out' })
          const moveY = gsap.quickTo(ornament, 'y', { duration: 0.7, ease: 'power3.out' })
          const onPointerMove = (event) => {
            const rect = hero.getBoundingClientRect()
            moveX(((event.clientX - rect.left) / rect.width - 0.5) * 12)
            moveY(((event.clientY - rect.top) / rect.height - 0.5) * 10)
          }
          const onPointerLeave = () => { moveX(0); moveY(0) }
          hero.addEventListener('pointermove', onPointerMove, { passive: true })
          hero.addEventListener('pointerleave', onPointerLeave, { passive: true })
          return () => {
            hero.removeEventListener('pointermove', onPointerMove)
            hero.removeEventListener('pointerleave', onPointerLeave)
          }
        }
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section id="home" className="hero" ref={root} aria-labelledby="hero-title">
      <div className="hero__meta hero__fade mono">
        <span>Portfolio — 2026</span>
        <span className="hero__status">
          <span className="dot" aria-hidden="true" /> Software Engineering · SMKN 4 Bandung
        </span>
        <span>{profile.location}</span>
      </div>

      <div className="hero__grid">
        <div className="hero__copy">
          <p className="mono hero__kicker hero__fade">
            ( {profile.role} · RPL Student )
          </p>
          <h1 id="hero-title" className="hero__name" aria-label={profile.name}>
            {NAME_LINES.map((line, li) => (
              <span className={`hero__line${li === NAME_LINES.length - 1 ? ' hero__line--accent' : ''}`} key={line} aria-hidden="true">
                <span className="hero__line-text">{line}</span>
              </span>
            ))}
          </h1>

          <span className="hero__rule rule" aria-hidden="true" />

          <p className="hero__intro hero__fade">
            Building for the web from <em className="serif">Bandung</em>. I’m a software engineering student at{' '}
            {profile.school} — two-time <strong>Juara 3 in Web Development</strong>, and a team developer on my school’s
            digital portal.
          </p>

          <div className="hero__ctas hero__fade">
            <motion.a href="#projects" className="btn btn--solid" whileHover="hover" whileTap="tap" variants={{ hover: { y: -2 }, tap: { scale: 0.97 } }}>
              Explore Projects <motion.span className="btn__icon" variants={{ hover: { x: 3, y: 3 }, tap: { scale: 0.9 } }}><ArrowDownRight size={18} aria-hidden="true" /></motion.span>
            </motion.a>
            <motion.a href="#contact" className="btn btn--ghost" whileHover="hover" whileTap="tap" variants={{ hover: { y: -2 }, tap: { scale: 0.97 } }}>
              Contact Me <motion.span className="btn__icon" variants={{ hover: { x: 3, y: -3 }, tap: { scale: 0.9 } }}><ArrowUpRight size={18} aria-hidden="true" /></motion.span>
            </motion.a>
          </div>

          <ul className="hero__social hero__fade" aria-label="Social profiles">
            {socials.map(({ id, label, handle, href }) => {
              const Icon = brandIcons[id]
              return (
                <li key={id}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <Icon width={16} height={16} />
                    <span>{label}</span>
                    <span className="sr-only"> — {handle} (opens in a new tab)</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <figure className="hero__portrait">
          <div className="hero__mask">
            <div className="hero__parallax">
              <img
                className="hero__img"
                src={profile.portrait.src}
                srcSet={profile.portrait.srcSet}
                sizes="(min-width: 1024px) 30vw, 70vw"
                width={profile.portrait.width}
                height={profile.portrait.height}
                alt="Portrait of Andika Rasya Putra in a white shirt and black tie"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
          <figcaption className="mono hero__fade">
            <span>Fig. 01</span>
            <span>Andika Rasya Putra</span>
          </figcaption>
        </figure>
      </div>

      <svg className="hero__ornament" viewBox="0 0 360 520" fill="none" aria-hidden="true">
        <path className="hero__stroke" d="M24 468C97 418 50 324 138 275C222 228 224 139 332 44" />
        <path className="hero__stroke hero__stroke--dash" d="M16 426C103 369 79 307 159 253C229 206 255 142 337 91" />
        <path className="hero__stroke hero__stroke--fine" d="M81 496C132 428 131 365 196 322C256 282 297 219 315 155" />
        <circle className="hero__ornament-dot" cx="138" cy="275" r="4" />
        <circle className="hero__ornament-dot" cx="255" cy="142" r="3" />
        <circle className="hero__ornament-dot" cx="81" cy="496" r="3" />
      </svg>

      <dl className="hero__facts hero__fade">
        {heroFacts.map((f) => (
          <div key={f.label}>
            <dt className="hero__fact-value">{f.value}</dt>
            <dd className="mono">{f.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
