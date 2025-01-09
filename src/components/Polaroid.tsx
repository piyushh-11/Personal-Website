const Polaroid = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-2.5 rounded-md border border-gray-300 rotate-2 hover:rotate-1 hover:scale-[1.02] hover:shadow-md transition-all duration-200 ease-in-out">
        <img src="src/assets/piyush.jpeg" alt="" className="w-32 h-32 rounded-sm" />
        <h1 className="mt-2.5 font-caveat font-bold tracking-wide text-xl">Piyush Hole</h1>
    </div>
  )
}

export default Polaroid