import Dock from './Dock'
import Window from './Window'

const apps = [
  { id: 'about', label: 'About', icon: '👋' },
  { id: 'why-hci', label: 'WhyHCI', icon: '🧠' },
  { id: 'course-stack', label: 'Courses', icon: '📚' },
  { id: 'career-path', label: 'Career', icon: '🧭' },
  { id: 'gallery', label: 'Gallery', icon: '🖼️' },
]

type DesktopWindow = {
  id: string
  type: string
  title: string
  x: number
  y: number
  z: number
}

type DesktopProps = {
  onOpenWindow: (appType: string) => void
  windows: DesktopWindow[]
  onCloseWindow: (id: string) => void
  onFocusWindow: (id: string) => void
  onMoveWindow: (id: string, x: number, y: number) => void
  focusedWindowId: string | null
  renderWindowContent: (type: string) => React.ReactNode
}

function Desktop({
  onOpenWindow,
  windows,
  onCloseWindow,
  onFocusWindow,
  onMoveWindow,
  focusedWindowId,
  renderWindowContent,
}: DesktopProps) {
  const openTypes = new Set(windows.map((window) => window.type))
  const focusedType =
    focusedWindowId &&
    windows.find((window) => window.id === focusedWindowId)?.type

  return (
    <main className="desktop">
      <div className="wallpaper" aria-hidden="true" />
      {windows.map((window) => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          x={window.x}
          y={window.y}
          z={window.z}
          onClose={onCloseWindow}
          onFocus={onFocusWindow}
          onMove={onMoveWindow}
          isFocused={window.id === focusedWindowId}
        >
          {renderWindowContent(window.type)}
        </Window>
      ))}
      <Dock apps={apps} onOpenWindow={onOpenWindow} openTypes={openTypes} focusedType={focusedType ?? null} />
    </main>
  )
}

export default Desktop

