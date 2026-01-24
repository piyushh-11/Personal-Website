type IconButtonProps = {
  label: string
  icon: string
  onClick: () => void
  isOpen: boolean
  isFocused: boolean
}

function IconButton({ label, icon, onClick, isOpen, isFocused }: IconButtonProps) {
  const glyphClassName = [
    'dock-icon__glyph',
    isOpen ? 'dock-icon__glyph--open' : '',
    isFocused ? 'dock-icon__glyph--focused' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type="button" className="dock-icon" onClick={onClick} aria-label={label}>
      <span className={glyphClassName} aria-hidden="true">
        {icon}
      </span>
      <span className="dock-icon__label">{label}</span>
    </button>
  )
}

export default IconButton

