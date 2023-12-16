import React from 'react'

function Navbar() {
  return (
    <div className='w-full flex justify-around items-center h-16 sticky top-0 my-3 bg-white font-sans z-50'>

        <div></div>
        <div className='flex  justify-around lg:text-base md:text-base sm:text-base lg:gap-9 sm:gap-7  text-xs gap-4 font-semibold '>
            <a href="">Emotions</a>
            <a href="">Manifesto</a>
            <a href="">Self Awareness Test</a>
            <a href="">work with us</a>
        </div>
        <div>
            <button className='bg-black w-20 lg:w-40 md:w-32 sm:w-28 text-xs  text-white sm:p-2 p-1  rounded-full text-center'>
                download app
            </button>
        </div>
    </div>
  )
}

export default Navbar