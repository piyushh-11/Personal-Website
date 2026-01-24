import { profile } from '../../content/profile'

function WhyHCIApp() {
  return (
    <div>
      <h2>{profile.whyHci.title}</h2>
      {profile.whyHci.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <ul>
        {profile.whyHci.settings.map((setting) => (
          <li key={setting.label}>
            <strong>{setting.label}:</strong> {setting.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WhyHCIApp

