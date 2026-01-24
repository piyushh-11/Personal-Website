import { profile } from '../../content/profile'

function ReadmeApp() {
  return (
    <div>
      <h2>README</h2>
      <p>
        {profile.name} — {profile.classification}
      </p>
      {profile.about.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p>
        Reach me at {profile.links.email} or browse {profile.links.github}.
      </p>
    </div>
  )
}

export default ReadmeApp

