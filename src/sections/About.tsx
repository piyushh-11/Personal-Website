import { motion, useScroll, useTransform } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { about } from '../data/portfolio'

function useTypewriter(text: string, startDelay: number, speed = 22) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    setDisplayed('')
    setDone(false)
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, startDelay, speed])

  return { displayed, done }
}

const ease = [0.22, 1, 0.36, 1] as const

const charVariants: Variants = {
  hidden: { y: '120%' },
  visible: (i: number) => ({
    y: '0%',
    transition: { duration: 0.6, ease, delay: 0.5 + i * 0.025 },
  }),
}

const fadeUp = (delay: number): Variants => ({
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease, delay },
  },
})

const fullBio = about.bio.join('\n\n')

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const blobY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const marqueeX = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])

  // name animation finishes at ~0.5 + 11 chars * 0.025 = ~0.775s → start bio at ~1300ms
  const { displayed: bioText, done: bioDone } = useTypewriter(fullBio, 1300)

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 overflow-hidden"
    >
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-20 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/15 via-orange-200/20 to-transparent blur-[120px]"
        style={{ y: blobY }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, 3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-stone-300/30 via-accent/5 to-transparent blur-[100px]"
        animate={{ scale: [1, 1.12, 1], rotate: [0, -5, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Parallax watermark text */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-0 w-[200vw] pointer-events-none select-none"
        style={{ x: marqueeX }}
      >
        <p className="whitespace-nowrap font-display text-[15vw] text-stone-900/[0.025] leading-none">
          DEVELOPER &nbsp;&bull;&nbsp; PHOTOGRAPHER &nbsp;&bull;&nbsp; ENGINEER
          &nbsp;&bull;&nbsp; DEVELOPER &nbsp;&bull;&nbsp; PHOTOGRAPHER
          &nbsp;&bull;&nbsp; ENGINEER
        </p>
      </motion.div>

      <div className="relative max-w-5xl z-10">
        <motion.p
          className="font-mono text-sm text-stone-400 mb-6 tracking-wide"
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="visible"
        >
          {about.greeting}
        </motion.p>

        <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] text-stone-900 mb-6">
          {about.name.split('').map((char, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.15em]">
              <motion.span
                className="inline-block"
                variants={charVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="text-xl sm:text-2xl text-accent font-medium max-w-xl mb-10"
          variants={fadeUp(0.9)}
          initial="hidden"
          animate="visible"
        >
          {about.tagline}
        </motion.p>

        <div className="relative max-w-lg text-stone-500 leading-relaxed font-mono text-sm">
          {/* Reserve full height so layout never shifts */}
          <span className="whitespace-pre-wrap opacity-0 select-none pointer-events-none" aria-hidden="true">{fullBio}</span>
          <span className="absolute inset-0 whitespace-pre-wrap">
            {bioText}
            <span className={`inline-block w-[2px] h-[1.1em] bg-accent align-middle ml-0.5 ${bioDone ? 'animate-caret-blink' : ''}`} />
          </span>
        </div>

        <motion.div
          className="mt-12 flex flex-wrap gap-4"
          variants={fadeUp(1.3)}
          initial="hidden"
          animate="visible"
        >
          <a
            href="#projects"
            className="group relative rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
          >
            <span className="relative z-10">See my work</span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-stone-900 px-7 py-3 text-sm font-semibold text-stone-900 transition-all hover:bg-stone-900 hover:text-white"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

    </section>
  )
}
