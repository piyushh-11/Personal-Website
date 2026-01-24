import { profile } from '../../content/profile'

function CareerPathApp() {
  return (
    <div>
      <h2>{profile.careerPath.title}</h2>
      {profile.careerPath.sections.map((section) => (
        <section key={section.label}>
          <h3>{section.label}</h3>
          <p>{section.text}</p>
        </section>
      ))}
    </div>
  )
}

export default CareerPathApp

