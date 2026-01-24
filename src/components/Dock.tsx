import IconButton from './IconButton'

type DockApp = {
  id: string
  label: string
  icon: string
}

type DockProps = {
  apps: DockApp[]
  onOpenWindow: (appType: string) => void
  openTypes: Set<string>
  focusedType: string | null
}

function Dock({ apps, onOpenWindow, openTypes, focusedType }: DockProps) {
  return (
    <nav className="dock" aria-label="App dock">
      {apps.map((app) => (
        <IconButton
          key={app.id}
          label={app.label}
          icon={app.icon}
          onClick={() => onOpenWindow(app.id)}
          isOpen={openTypes.has(app.id)}
          isFocused={focusedType === app.id}
        />
      ))}
    </nav>
  )
}

export default Dock

