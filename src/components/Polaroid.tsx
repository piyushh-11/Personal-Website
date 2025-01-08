import React from 'react'

const Polaroid = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-3 rounded-md border border-gray-300 rotate-2">
        <img src="src/assets/piyush.jpeg" alt="" className="w-32 h-32 rounded-sm" />
        <h1 className="mt-3 font-caveat font-bold tracking-wider text-xl">Piyush Hole</h1>
    </div>
  )
}

export default Polaroid