import { profile } from '../../content/profile'

function CourseStackApp() {
  return (
    <div>
      <h2>{profile.courseStack.title}</h2>
      <ul>
        {profile.courseStack.items.map((item) => (
          <li key={item.name}>
            <strong>{item.name}:</strong> {item.howItConnects}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseStackApp

