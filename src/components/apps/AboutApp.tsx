import { profile } from '../../content/profile'

function AboutApp() {
  return (
    <div>
      <div className="about-header">
        <img
          src={profile.headshotSrc}
          alt={profile.headshotAlt}
          className="headshot"
        />
        <div className="about-header__text">
          <h2>{profile.about.headline}</h2>
          <p className="about-header__name">
            {profile.name} • {profile.classification}
          </p>
          <p>
            {profile.school} • {profile.location}
          </p>
        </div>
      </div>
      {profile.about.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  )
}

export default AboutApp

