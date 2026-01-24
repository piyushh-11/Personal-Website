type IconButtonProps = {
  label: string
  icon: string
  onClick: () => void
  isOpen: boolean
  isFocused: boolean
}

function IconButton({ label, icon, onClick, isOpen, isFocused }: IconButtonProps) {
  return (
    <button type="button" className="dock-icon" onClick={onClick} aria-label={label}>
      <span className="dock-icon__glyph" aria-hidden="true">
        {icon}
      </span>
      <span className="dock-icon__label">{label}</span>
      {isOpen && (
        <span
          className={`dock-icon__dot${isFocused ? ' dock-icon__dot--focused' : ''}`}
          aria-hidden="true"
        />
      )}
    </button>
  )
}

export default IconButton

