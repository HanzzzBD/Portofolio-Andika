import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import { ReactLenis } from 'lenis/react'
import { LenisGsapSync } from './components/LenisGsapSync.jsx'
import 'lenis/dist/lenis.css'
import './styles/base.css'
import './styles/sections.css'
import App from './App.jsx'

const LENIS_OPTIONS = {
  autoRaf: false,
  lerp: 0.065,
  wheelMultiplier: 1.08,
  smoothWheel: true,
  syncTouch: false,
  anchors: true,
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Framer Motion follows the OS reduced-motion setting; GSAP does the same via matchMedia. */}
    <MotionConfig reducedMotion="user">
      <ReactLenis root options={LENIS_OPTIONS}>
        <LenisGsapSync />
        <App />
      </ReactLenis>
    </MotionConfig>
  </StrictMode>,
)
