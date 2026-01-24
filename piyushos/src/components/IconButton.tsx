type IconButtonProps = {
  label: string
  icon: string
  onClick: () => void
}

function IconButton({ label, icon, onClick }: IconButtonProps) {
  return (
    <button type="button" className="dock-icon" onClick={onClick} aria-label={label}>
      <span className="dock-icon__glyph" aria-hidden="true">
        {icon}
      </span>
      <span className="dock-icon__label">{label}</span>
    </button>
  )
}

export default IconButton

