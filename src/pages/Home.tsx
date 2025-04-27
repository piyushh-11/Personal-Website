const Home = () => {
  return (
    <div className="flex flex-col gap-12 sm:w-full md:w-1/2 lg:w-1/3 p-4">
      {/* Header */}
      <div className="mt-24 flex flex-col gap-12">
        {/* Text */}
        <div>
          <h1 className="text-4xl">
            Hey, I'm <span className="font-bold">Piyush</span>
          </h1>
          <h1 className="text-4xl">
            a Student at <span className="font-bold">Texas A&M</span>
          </h1>
          <h1 className="text-4xl">
            studying <span className="font-bold">Computer Science</span>
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex flex-row justify-between">
          <button className="bg-gray-500 text-white py-2 px-4 rounded">
            Resume
          </button>
          <button className="bg-gray-500 text-white py-2 px-4 rounded">
            LinkedIn
          </button>
          <button className="bg-gray-500 text-white py-2 px-4 rounded">
            GitHub
          </button>
          <button className="bg-gray-500 text-white py-2 px-4 rounded">
            YouTube
          </button>
        </div>
      </div>

      {/* About Me */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">About Me</h3>

        <p> Welcome! I'm Piyush Hole, a Computer Science Honors student at Texas A&M University, where I'm constantly exploring the fascinating intersection of code, mathematics, and statistics. This portfolio is a curated collection of projects and experiences that reflect my passion for building elegant and effective solutions. </p>
      </div>

      {/* Experience */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Experience</h3>

        {/* Palo Alto Networks */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4">
            <div className="bg-gray-500 w-12 h-12 rounded"></div>

            <div>
              <h3 className="font-bold">Palo Alto Networks</h3>
              <h3>Software Engineering Intern</h3>
            </div>
          </div>

          <div>
            <h3 className="">May 2025 - Aug 2025</h3>
          </div>
        </div>

        {/* Texas A&M DBF Team */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4">
            <div className="bg-gray-500 w-12 h-12 rounded"></div>

            <div>
              <h3 className="font-bold">Texas A&M DBF Team</h3>
              <h3>Software Engineer</h3>
            </div>
          </div>

          <div>
            <h3 className="">Sep 2024 - May 2025</h3>
          </div>
        </div>

        {/* Texas A&M */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4">
            <div className="bg-gray-500 w-12 h-12 rounded"></div>

            <div>
              <h3 className="font-bold">Texas A&M University</h3>
              <h3>Software Engineering Intern</h3>
            </div>
          </div>

          <div>
            <h3 className="">Aug 2024 - May 2025</h3>
          </div>
        </div>

        {/* NEA X GmbH */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4">
            <div className="bg-gray-500 w-12 h-12 rounded"></div>

            <div>
              <h3 className="font-bold">NEA X GmbH</h3>
              <h3>Undergraduate Researcher</h3>
            </div>
          </div>

          <div>
            <h3 className="">May 2024 - Jul 2024</h3>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Projects</h3>

        {/* Restaurant POS System */}
        <div className="flex flex-row justify-between">
          <div className="w-80">
            <h3 className="font-bold">Restaurant POS System</h3>
            <h3>Java, Swing, Spring Boot, PostgreSQL, Python, Pandas, AWS</h3>
          </div>

          <button className="bg-gray-500 text-white h-10 py-2 px-4 rounded">
            GitHub
          </button>
        </div>

        {/* Restaurant POS System */}
        <div className="flex flex-row justify-between">
          <div className="w-80">
            <h3 className="font-bold">Mutual Fund Dashboard</h3>
            <h3>React, JavaScript, TailWindCSS, Node.js, Express.js, MongoDB</h3>
          </div>

          <button className="bg-gray-500 text-white h-10 py-2 px-4 rounded">
            GitHub
          </button>
        </div>

        {/* Aggie Stops - Schedule Planner */}
        <div className="flex flex-row justify-between">
          <div className="w-80">
            <h3 className="font-bold">Aggie Stops - Schedule Planner</h3>
            <h3>React, TypeScript, TailWindCSS, Python, Selenium, Flask</h3>
          </div>

          <button className="bg-gray-500 text-white h-10 py-2 px-4 rounded">
            GitHub
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center mb-24">
        <p className="">Made with 💙</p>
      </div>
    </div>
  );
};

export default Home;
