export const EASE = [0.22, 1, 0.36, 1]

export const MOTION = Object.freeze({
  micro: 0.2,
  interface: 0.38,
  reveal: 0.85,
  cinematic: 1.35,
  stagger: 0.075,
})

export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}
export const staggerChild = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}
