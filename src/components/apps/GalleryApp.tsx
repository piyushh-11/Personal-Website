import { profile } from '../../content/profile'

function GalleryApp() {
  return (
    <div>
      <ul className="gallery-grid">
        {profile.gallery.items.map((item) => (
          <li key={item.src} className="gallery-item">
            <div className="gallery-image-container">
              <img
                src={item.src}
                alt={item.alt}
                className="gallery-image"
              />
            </div>
            {item.caption && <span className="gallery-caption">{item.caption}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GalleryApp

