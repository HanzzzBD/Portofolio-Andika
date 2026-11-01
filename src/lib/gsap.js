import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)
gsap.defaults({ ease: 'power3.out', duration: 0.9 })

// Shared media queries for gsap.matchMedia(). Animations registered under
// `motion` are reverted automatically when the user prefers reduced motion.
export const MQ = {
  motion: '(prefers-reduced-motion: no-preference)',
  desktopMotion: '(prefers-reduced-motion: no-preference) and (min-width: 768px)',
}

export { gsap, ScrollTrigger, useGSAP }
