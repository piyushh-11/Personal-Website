import { profile } from '../../content/profile'

function GalleryApp() {
  return (
    <div>
      <h2>{profile.gallery.title}</h2>
      <ul className="gallery-grid">
        {profile.gallery.items.map((item) => (
          <li key={item.src} className="gallery-item">
            <img
              src={item.src}
              alt={item.alt}
              className="gallery-image"
            />
            <span className="gallery-caption">{item.caption}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GalleryApp

