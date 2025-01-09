const Home = () => {
  return (
    <div className="flex flex-col border border-gray-300 bg-white rounded-xl p-16 space-y-4 h-[calc(100%-2rem)] m-4 box-border">
      <h1 className='font-roboto font-bold text-xl'>About Me</h1>
      <p className='font-nunito'>Hello 👋 I'm <span className="font-caveat text-lg font-bold tracking-wide">Piyush Hole</span> , a sophomore at Texas A&M University studying Computer Science</p>
      <p className='font-nunito'>I’m passionate about making cool things and building meaningful projects that make an impact</p>
      <p className='font-nunito'>
        Feel free to reach out! - <a href="mailto:hole.piyu@gmail.com" className="text-blue-600 underline">hole.piyu@gmail.com</a>
      </p>

      <h1 className='font-roboto font-bold text-xl'>Experience</h1>
      <ul className='list-disc pl-5 space-y-2'>
        <li className='font-nunito'>
          <strong>Undergraduate Researcher @ TAMU (Fall 24 - Present)</strong><br />
          researching machine learning applications for bovine respiratory disease
        </li>
        <li className='font-nunito'>
          <strong>Software Engineer @ TAMU DBF (Fall 24 - Present)</strong><br />
          developing optimized data collection and autonomous flight systems
        </li>
        <li className='font-nunito'>
          <strong>Software Engineer Intern @ NEA X (Summer 24)</strong><br />
          built dashboards and software to improve productivity and reduce costs
        </li>
        <li className='font-nunito'>
          <strong>Technology Intern @ Neuman & Esser (Summer 23)</strong><br />
          digitized schematics and developed a server-based document management system
        </li>
      </ul>

      <h1 className='font-roboto font-bold text-xl'>Newest Blogs</h1>
      <div className="flex flex-col justify-evenly w-80 border border-gray-300 bg-white rounded-lg p-4 hover:scale-[1.01] hover:shadow-md transition-all duration-200 ease-in-out">
        <h1 className='text-base font-bold text-gray-900'>My First Blog: Welcome to my Personal Website!</h1>
        <p className='font-nunito font-light text-xs text-gray-400'>January 8, 2025</p>
      </div>

    </div>
  )
}

export default Home