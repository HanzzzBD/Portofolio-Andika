import { useRef } from 'react'
import { ArrowUp } from 'lucide-react'
import { gsap, MQ, useGSAP } from '../lib/gsap'
import { navItems, profile, socials } from '../data/content'

export function Footer() {
  const root = useRef(null)

  // Closing animation: the name assembles letter by letter as the footer scrolls in.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MQ.motion, () => {
        // Plays once on entry: the footer sits at the very end of the page, so a
        // scrubbed range could never reach completion.
        gsap.from('.footer__char', {
          yPercent: 100,
          opacity: 0,
          stagger: 0.035,
          duration: 1.1,
          ease: 'expo.out',
          scrollTrigger: { trigger: '.footer__name', start: 'top 98%', once: true },
        })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <footer className="footer" ref={root}>
      <div className="footer__cols">
        <div>
          <span className="mono label">Navigate</span>
          <ul>
            {navItems.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} className="footer__link">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <span className="mono label">Social</span>
          <ul>
            {socials.map((s) => (
              <li key={s.id}>
                <a href={s.href} target="_blank" rel="noreferrer" className="footer__link">
                  {s.label}<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="mono label">Contact</span>
          <ul>
            <li><a href={`mailto:${profile.email}`} className="footer__link">Email</a></li>
          </ul>
        </div>
        <a href="#home" className="footer__top">
          <ArrowUp size={18} aria-hidden="true" /> Back to top
        </a>
      </div>

      <p className="footer__name" aria-label={profile.name}>
        {profile.name.split('').map((ch, i) => (
          <span className="footer__char" aria-hidden="true" key={i}>
            {ch === ' ' ? ' ' : ch}
          </span>
        ))}
      </p>

      <div className="footer__base mono">
        <span>© 2026 {profile.name}</span>
        <span>Designed &amp; built with React, GSAP &amp; Framer Motion</span>
      </div>
    </footer>
  )
}
