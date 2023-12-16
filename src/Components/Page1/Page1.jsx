import React, { useEffect, useState } from 'react'
import { gsap, CSSPlugin } from "gsap";
import { useRef } from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger';





gsap.registerPlugin(CSSPlugin, ScrollTrigger);

function Page1() {
  const title = useRef(null)
  const char = useRef(null)
  
  
  

  useEffect(() => {

    gsap.from(title.current, {
      x: -500,
      scale: 0,
       // Move the element 100 pixels to the right
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: title.current,
        toggleActions: "restart none restart none",
        // pin: true
        // scrub: true
    }
    });

    gsap.to(title.current, {
      scale: 1,
      x: 0, // Move the element 100 pixels to the right
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: title.current,
        toggleActions: "restart none restart none",
        // scrub: true
        // pin: true
    }
    });
        
    // Animation using GSAP
    
}, []);

  
  return (
    <div className='flex sm:flex-row flex-col-reverse container w-4/5 h-69 bg-violet-100 m-auto rounded-xl '>

      <div className='flex justify-center items-center w-1/2 m-10'>
        <div className='flex flex-col '>
          <p className='my-4 mx-2'>Ahead App</p>
         
            <p ref={title} className=' lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-bold font-sans tracking-wide'>Master your life by mastering emotions</p>
         
          <div>

          </div>
        </div>
      </div>

      <div className='w-1/2 flex justify-center items-center'>
        <div ref={char}><img src="char.png" alt="" width={"80px"} /></div>
        <img src="mobile.png" alt="" width={"200px"} />
      </div>


    </div>
  )
}

export default Page1