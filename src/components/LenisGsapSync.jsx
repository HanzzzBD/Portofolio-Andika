import { useEffect } from 'react'
import { useLenis } from 'lenis/react'
import { gsap, ScrollTrigger } from '../lib/gsap'

export function LenisGsapSync() {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return undefined

    const update = (time) => lenis.raf(time * 1000)
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off('scroll', ScrollTrigger.update)
      gsap.ticker.remove(update)
      gsap.ticker.lagSmoothing(500, 33)
    }
  }, [lenis])

  return null
}
