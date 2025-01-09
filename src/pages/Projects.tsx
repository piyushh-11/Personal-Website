const Projects = () => {
  return (
    <div className="flex flex-col border border-gray-300 bg-white rounded-xl p-20 space-y-4 h-[calc(100%-2rem)] m-4 box-border overflow-auto">
      <div className="">
        <img className="border w-2/5 aspect-video rounded-lg" src="src/assets/projects/who-am-i.png" alt="" />
      </div>
      <div className="">
        <img className="border w-2/5 aspect-video rounded-lg" src="src/assets/projects/nfl-bot.png" alt="" />
      </div>
      <div className="">
        <img className="border w-2/5 aspect-video rounded-lg" src="src/assets/projects/aggie-stops.jpeg" alt="" />
      </div>
    </div>
  )
}

export default Projects