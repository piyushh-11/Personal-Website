import { profile } from '../../content/profile'

function AboutApp() {
  return (
    <div>
      <h2>{profile.about.headline}</h2>
      <img
        src={profile.headshotSrc}
        alt={profile.headshotAlt}
        className="headshot"
      />
      <p>
        {profile.name} • {profile.classification}
      </p>
      <p>
        {profile.school} • {profile.location}
      </p>
      {profile.about.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  )
}

export default AboutApp

