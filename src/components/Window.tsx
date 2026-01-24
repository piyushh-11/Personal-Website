import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

type WindowProps = {
  id: string
  title: string
  x: number
  y: number
  z: number
  onClose: (id: string) => void
  onFocus: (id: string) => void
  onMove: (id: string, x: number, y: number) => void
  isFocused: boolean
  children?: ReactNode
}

const TITLEBAR_VISIBLE = 40

function Window({
  id,
  title,
  x,
  y,
  z,
  onClose,
  onFocus,
  onMove,
  isFocused,
  children,
}: WindowProps) {
  const windowRef = useRef<HTMLElement | null>(null)
  const dragRef = useRef<{ offsetX: number; offsetY: number; pointerId: number } | null>(
    null,
  )

  useEffect(() => {
    if (!isFocused) return
    windowRef.current?.focus()
  }, [isFocused])

  useEffect(() => {
    return () => {
      if (!dragRef.current || !windowRef.current) return
      const { pointerId } = dragRef.current
      try {
        windowRef.current.releasePointerCapture(pointerId)
      } catch {
        // No-op if capture already released.
      }
      dragRef.current = null
    }
  }, [])

  const clampPosition = (nextX: number, nextY: number) => {
    const rect = windowRef.current?.getBoundingClientRect()
    const width = rect?.width ?? 520
    const height = rect?.height ?? 360
    const minX = -(width - TITLEBAR_VISIBLE)
    const maxX = window.innerWidth - TITLEBAR_VISIBLE
    const minY = 0
    const maxY = window.innerHeight - TITLEBAR_VISIBLE

    return {
      x: Math.min(Math.max(nextX, minX), maxX),
      y: Math.min(Math.max(nextY, minY), maxY),
    }
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLElement>) => {
    if (event.button !== 0) return
    const target = event.target as HTMLElement | null
    if (target?.closest('button')) return
    onFocus(id)
    dragRef.current = {
      offsetX: event.clientX - x,
      offsetY: event.clientY - y,
      pointerId: event.pointerId,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!dragRef.current) return
    const nextX = event.clientX - dragRef.current.offsetX
    const nextY = event.clientY - dragRef.current.offsetY
    const clamped = clampPosition(nextX, nextY)
    onMove(id, clamped.x, clamped.y)
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLElement>) => {
    if (!dragRef.current) return
    dragRef.current = null
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <section
      ref={windowRef}
      className="window"
      role="dialog"
      aria-label={title}
      tabIndex={0}
      style={{ left: `${x}px`, top: `${y}px`, zIndex: z }}
      onFocus={() => onFocus(id)}
      onPointerDown={() => onFocus(id)}
    >
      <header
        className="window__titlebar"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <span className="window__title">{title}</span>
        <button
          type="button"
          className="window__close"
          onClick={() => onClose(id)}
          aria-label={`Close ${title}`}
        >
          ×
        </button>
      </header>
      <div className="window__content">{children}</div>
    </section>
  )
}

export default Window

