import { profile } from '../../content/profile'

function WhyHCIApp() {
  return (
    <div>
      <h2>{profile.whyHci.title}</h2>
      {profile.whyHci.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  )
}

export default WhyHCIApp

