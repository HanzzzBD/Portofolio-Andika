import { useRef } from 'react'
import { gsap, MQ, ScrollTrigger, useGSAP } from './lib/gsap'
import { navItems } from './data/content'
import { useActiveSection } from './hooks/useActiveSection'
import { useTheme } from './hooks/useTheme'
import { MobileBar, Rail } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Certificates } from './components/Certificates'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const SECTION_IDS = navItems.map((n) => n.id)

// Section-level scroll choreography (GSAP only). Targets are data-attributes that
// Framer Motion never animates, so the two libraries never touch the same property.
function useScrollChoreography(scope) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Keep the reading-position cue available even when decorative motion is reduced.
      const scrollProgress = document.querySelector('[data-scroll-progress]')
      if (scrollProgress) {
        gsap.fromTo(
          scrollProgress,
          { '--scroll-progress': 0 },
          {
            '--scroll-progress': 1,
            ease: 'none',
            scrollTrigger: {
              trigger: document.documentElement,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            },
          },
        )
      }

      mm.add(MQ.motion, () => {
        // Hairline rules under section headers draw in.
        gsap.utils.toArray('[data-rule]').forEach((el) => {
          gsap.from(el, {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 1.4,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          })
        })

        // Images unmask upward.
        gsap.utils.toArray('[data-clip]').forEach((el) => {
          gsap.from(el, {
            clipPath: 'inset(18% 0% 18% 0%)',
            duration: 1.4,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          })
        })

        // Timeline progress line follows scroll.
        const timelineProgress = document.querySelector('[data-progress]')
        if (timelineProgress) {
          gsap.fromTo(
            timelineProgress,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: 'none',
              transformOrigin: 'top center',
              scrollTrigger: { trigger: '.timeline', start: 'top 70%', end: 'bottom 60%', scrub: 0.4 },
            },
          )
        }
      })

      // Parallax only where there is room for it.
      mm.add(MQ.desktopMotion, () => {
        gsap.utils.toArray('[data-parallax]').forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: 'none',
              scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
            },
          )
        })
      })

      // Late-loading fonts/images shift layout; recompute trigger positions once settled.
      const refresh = () => ScrollTrigger.refresh()
      document.fonts?.ready.then(refresh)
      window.addEventListener('load', refresh)
      return () => {
        window.removeEventListener('load', refresh)
        mm.revert()
      }
    },
    { scope },
  )
}

export default function App() {
  const main = useRef(null)
  const active = useActiveSection(SECTION_IDS)
  const [theme, toggleTheme] = useTheme()
  useScrollChoreography(main)

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Rail active={active} theme={theme} onToggleTheme={toggleTheme} />
      <MobileBar active={active} theme={theme} onToggleTheme={toggleTheme} />
      <main id="main" ref={main} className="main">
        <span className="scroll-progress" aria-hidden="true">
          <span className="scroll-progress__fill" data-scroll-progress />
        </span>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
