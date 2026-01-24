import { useEffect, useRef, useState } from 'react'
import Desktop from './components/Desktop'
import MenuBar from './components/MenuBar'
import AboutApp from './components/apps/AboutApp'
import WhyHCIApp from './components/apps/WhyHCIApp'
import CourseStackApp from './components/apps/CourseStackApp'
import CareerPathApp from './components/apps/CareerPathApp'
import GalleryApp from './components/apps/GalleryApp'
import SystemApp from './components/apps/SystemApp'

type WindowData = {
  id: string
  type: string
  title: string
  x: number
  y: number
  z: number
}

const WINDOW_SIZE = { width: 520, height: 360 }
const WINDOW_OFFSET = 24
const WINDOW_PADDING = 40
const TITLE_BY_TYPE: Record<string, string> = {
  system: 'About PiyushOS',
  about: 'About',
  'why-hci': 'Why HCI',
  'course-stack': 'Course Stack',
  'career-path': 'Career Path',
  gallery: 'Gallery',
  readme: 'README',
}

const createId = () =>
  globalThis.crypto?.randomUUID?.() ?? `window-${Date.now()}-${Math.random()}`

function App() {
  const [windows, setWindows] = useState<WindowData[]>([])
  const [focusedWindowId, setFocusedWindowId] = useState<string | null>(null)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const zCounterRef = useRef(0)
  const userReducedMotionOverride = useRef(false)
  const userThemeOverride = useRef(false)

  const focusWindow = (id: string) => {
    setWindows((prev) => {
      const nextZ = zCounterRef.current + 1
      zCounterRef.current = nextZ
      return prev.map((window) =>
        window.id === id ? { ...window, z: nextZ } : window,
      )
    })
    setFocusedWindowId(id)
  }

  const closeWindow = (id: string) => {
    setWindows((prev) => {
      const next = prev.filter((window) => window.id !== id)
      setFocusedWindowId((current) => {
        if (current !== id) return current
        if (next.length === 0) return null
        return next.reduce((top, window) => (window.z > top.z ? window : top)).id
      })
      return next
    })
  }

  const moveWindow = (id: string, x: number, y: number) => {
    setWindows((prev) =>
      prev.map((window) => (window.id === id ? { ...window, x, y } : window)),
    )
  }

  const openWindow = (type: string) => {
    setWindows((prev) => {
      const existing = prev.find((window) => window.type === type)
      if (existing) {
        const nextZ = zCounterRef.current + 1
        zCounterRef.current = nextZ
        setFocusedWindowId(existing.id)
        return prev.map((window) =>
          window.id === existing.id ? { ...window, z: nextZ } : window,
        )
      }

      const offset = prev.length * WINDOW_OFFSET
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const centeredX = Math.max(
        WINDOW_PADDING,
        (viewportWidth - WINDOW_SIZE.width) / 2,
      )
      const centeredY = Math.max(
        WINDOW_PADDING,
        (viewportHeight - WINDOW_SIZE.height) / 2,
      )
      const clampedX = Math.min(
        viewportWidth - WINDOW_SIZE.width - WINDOW_PADDING,
        centeredX + offset,
      )
      const clampedY = Math.min(
        viewportHeight - WINDOW_SIZE.height - WINDOW_PADDING,
        centeredY + offset,
      )

      const nextZ = zCounterRef.current + 1
      zCounterRef.current = nextZ

      const nextId = createId()
      setFocusedWindowId(nextId)

      return [
        ...prev,
        {
          id: nextId,
          type,
          title: TITLE_BY_TYPE[type] ?? type,
          x: clampedX,
          y: clampedY,
          z: nextZ,
        },
      ]
    })
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      if (!focusedWindowId) return
      closeWindow(focusedWindowId)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [focusedWindowId])

  useEffect(() => {
    if (windows.length === 0) {
      if (focusedWindowId !== null) setFocusedWindowId(null)
      return
    }
    const exists = focusedWindowId
      ? windows.some((window) => window.id === focusedWindowId)
      : false
    if (!exists) {
      const top = windows.reduce((currentTop, window) =>
        window.z > currentTop.z ? window : currentTop,
      )
      setFocusedWindowId(top.id)
    }
  }, [windows, focusedWindowId])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = (event: MediaQueryListEvent) => {
      if (userReducedMotionOverride.current) return
      setReducedMotion(event.matches)
    }
    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event: MediaQueryListEvent) => {
      if (userThemeOverride.current) return
      setTheme(event.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  const renderWindowContent = (type: string) => {
    switch (type) {
      case 'system':
        return <SystemApp />
      case 'about':
        return <AboutApp />
      case 'why-hci':
        return <WhyHCIApp />
      case 'course-stack':
        return <CourseStackApp />
      case 'career-path':
        return <CareerPathApp />
      case 'gallery':
        return <GalleryApp />
      default:
        return <p>Content coming soon.</p>
    }
  }

  const focusedWindow = focusedWindowId
    ? windows.find((window) => window.id === focusedWindowId) ?? null
    : null

  return (
    <div className={`${reducedMotion ? 'reduced-motion ' : ''}theme-${theme}`}>
      <MenuBar
        focusedWindow={focusedWindow}
        closeWindow={closeWindow}
        openWindow={openWindow}
        reducedMotion={reducedMotion}
        theme={theme}
        setTheme={(value) => {
          userThemeOverride.current = true
          setTheme(value)
        }}
        setReducedMotion={(value) => {
          userReducedMotionOverride.current = true
          setReducedMotion(value)
        }}
      />
      <Desktop
        onOpenWindow={openWindow}
        windows={windows}
        onCloseWindow={closeWindow}
        onFocusWindow={focusWindow}
        onMoveWindow={moveWindow}
        focusedWindowId={focusedWindowId}
        renderWindowContent={renderWindowContent}
      />
    </div>
  )
}

export default App
