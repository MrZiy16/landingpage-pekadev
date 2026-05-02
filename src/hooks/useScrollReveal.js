import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useScrollReveal(margin = '-80px') {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin })
  return { ref, isInView }
}

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}
