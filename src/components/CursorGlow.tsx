import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [isDesktop, setIsDesktop] = useState(false)
  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)
  const springX = useSpring(mouseX, { damping: 25, stiffness: 200 })
  const springY = useSpring(mouseY, { damping: 25, stiffness: 200 })

  useEffect(() => {
    setIsDesktop(window.matchMedia('(pointer: fine)').matches)

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  if (!isDesktop) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-30 h-[500px] w-[500px] rounded-full"
      style={{
        left: springX,
        top: springY,
        translateX: '-50%',
        translateY: '-50%',
        background:
          'radial-gradient(circle, rgba(232,85,58,0.07) 0%, rgba(232,85,58,0.02) 40%, transparent 70%)',
      }}
    />
  )
}
