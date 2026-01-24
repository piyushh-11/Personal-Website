import { useEffect, useRef, useState } from 'react'
import useWeather from '../hooks/useWeather'

type FocusedWindow = {
  id: string
  title: string
} | null

type MenuBarProps = {
  focusedWindow: FocusedWindow
  closeWindow: (id: string) => void
  reducedMotion: boolean
  setReducedMotion: (value: boolean) => void
}

const MENUS = ['system', 'app', 'view'] as const
type MenuKey = (typeof MENUS)[number]

function MenuBar({
  focusedWindow,
  closeWindow,
  reducedMotion,
  setReducedMotion,
}: MenuBarProps) {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null)
  const menuRef = useRef<HTMLElement | null>(null)
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
  )
  const weather = useWeather()

  const appTitle = focusedWindow?.title ?? ''

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
      )
    const interval = window.setInterval(tick, 1000 * 30)
    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!openMenu) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpenMenu(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [openMenu])

  useEffect(() => {
    if (!openMenu) return
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (!menuRef.current || menuRef.current.contains(target)) return
      setOpenMenu(null)
    }
    window.addEventListener('pointerdown', handlePointerDown)
    return () => window.removeEventListener('pointerdown', handlePointerDown)
  }, [openMenu])

  const handleMenuToggle = (key: MenuKey) => {
    setOpenMenu((current) => (current === key ? null : key))
  }

  const handleCloseWindow = () => {
    if (!focusedWindow) return
    closeWindow(focusedWindow.id)
    setOpenMenu(null)
  }

  return (
    <nav className="menu-bar" aria-label="System menu bar" ref={menuRef}>
      <div className="menu-bar__inner">
        <div className="menu-bar__left">
          <div className="menu-group">
            <button
              type="button"
              className="menu-button"
              aria-haspopup="menu"
              aria-expanded={openMenu === 'system'}
              onClick={() => handleMenuToggle('system')}
            >
              PiyushOS
            </button>
            {openMenu === 'system' && (
              <div className="menu-panel" role="menu">
                <button type="button" role="menuitem" className="menu-item">
                  About PiyushOS
                </button>
                <div className="menu-separator" role="separator" />
                <button
                  type="button"
                  role="menuitem"
                  className="menu-item"
                  onClick={handleCloseWindow}
                  disabled={!focusedWindow}
                >
                  Close Window
                </button>
              </div>
            )}
          </div>

          {focusedWindow && (
            <div className="menu-group">
              <button
                type="button"
                className="menu-button"
                aria-haspopup="menu"
                aria-expanded={openMenu === 'app'}
                onClick={() => handleMenuToggle('app')}
              >
                {appTitle}
              </button>
              {openMenu === 'app' && (
                <div className="menu-panel" role="menu">
                  <button
                    type="button"
                    role="menuitem"
                    className="menu-item"
                    onClick={handleCloseWindow}
                  >
                    Close {appTitle}
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="menu-group">
            <button
              type="button"
              className="menu-button"
              aria-haspopup="menu"
              aria-expanded={openMenu === 'view'}
              onClick={() => handleMenuToggle('view')}
            >
              View
            </button>
            {openMenu === 'view' && (
              <div className="menu-panel" role="menu">
                <button
                  type="button"
                  role="menuitem"
                  className="menu-item"
                  onClick={() => {
                    setReducedMotion(!reducedMotion)
                    setOpenMenu(null)
                  }}
                >
                  Reduced Motion: {reducedMotion ? 'On' : 'Off'}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="menu-bar__right">
          <span className="menu-weather" aria-label="College Station weather">
            {weather.label}
          </span>
          <span className="menu-status">{time}</span>
          <button type="button" className="menu-status-button" aria-label="Theme toggle">
            ◐
          </button>
        </div>
      </div>
    </nav>
  )
}

export default MenuBar

