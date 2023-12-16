import React, { useEffect, useState } from 'react'
import { gsap, CSSPlugin } from "gsap";
import { useRef } from 'react'
// import ScrollTrigger from 'react-scroll-trigger';

import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(CSSPlugin , ScrollTrigger);




function Page2() {
    const title = useRef(null)
   
    const containerRef = useRef(null);
    

    

    


    
    
    

    

    useEffect(() => {
        var sections = gsap.utils.toArray(".flex-shrink-0")

        
          // Animation using GSAP
        //   gsap.fromTo(title.current, {
        //      // Move the element 100 pixels to the right
        //     x: -100,
        //     },{
        //         x:0,
        //         duration: 1,
        //     ease: "power2.inOut",
        //     scrollTrigger: {
        //         trigger: title.current,
        //         toggleActions: "restart pause restart pause"

        //     }

        //     });

          gsap.to(sections, {
            xPercent : -50*(sections.length - 1),
            ease: "slow",
            duration:1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
                pin: "true",
                scrub: 1,
                snap: 1/(sections.length - 1),
                // toggleActions: "restart pause reverse pause",
                // end: ()=> "+=" + document.querySelector(".relative").offsetWidth
                end: ()=> "+=" + containerRef.current.offsetWidth  
            }
    
          })

          
      }, []);

     
      

  
  return (
    <div  className='flex flex-col container w-4/5 lg:h-69 h-auto m-auto rounded-xl mt-20 font-semibold '>

        <div className='flex w-full justify-around text-lg flex-wrap'>
            <p className=' w-64 font-bold text-3xl mb-3'>EQ beats IQ</p>
            <p className=' w-64 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, minima.</p>
            <p className=' w-64 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Libero omnis laboriosam quia, natus dolores ullam cupiditate magni deleniti nostrum eaque.</p>

        </div>
        <div className='mt-20'>
        
            <p className='text-4xl font-bold m-auto' ref={title} >Does this sound familiar...</p>
            
        </div>
        <div ref={containerRef} className='flex mt-20 gap-2 w-full overflow-x-hidden  flex-nowrap '>

            <div className= ' flex-shrink-0 w-72 min h-48 mb-3 bg-blue-300 rounded-3xl flex flex-col justify-around p-4 font-semibold '>
                <p></p>
                <p><p className=' font-bold'>Lorem ipsum dolor sit.</p>
                <p className=' text-slate-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, officiis!</p>
            </p>
                </div>
                <div className= 'flex-shrink-0 w-72 h-48 mb-3 bg-purple-300 rounded-3xl flex flex-col justify-around p-4 font-semibold '>
                    <p></p>
                    <p><p className=' font-bold'>Lorem ipsum dolor sit.</p>
                    <p className=' text-slate-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, officiis!</p>
                    </p>
                </div>
                <div className= 'flex-shrink-0 w-72 h-48 mb-3 bg-yellow-300 rounded-3xl flex flex-col justify-around p-4 font-semibold '>
                <p></p>
                <p><p className=' font-bold'>Lorem ipsum dolor sit.</p>
                <p className=' text-slate-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, officiis!</p>
            </p>
                </div>
                <div className= 'flex-shrink-0 w-72 h-48 mb-3 bg-purple-300 rounded-3xl flex flex-col justify-around p-4 font-semibold '>
                    <p></p>
                    <p><p className=' font-bold'>Lorem ipsum dolor sit.</p>
                    <p className=' text-slate-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, officiis!</p>
                    </p>
                </div> <div className= 'flex-shrink-0 w-72 h-48 mb-3 bg-purple-300 rounded-3xl flex flex-col justify-around p-4 font-semibold '>
                    <p></p>
                    <p><p className=' font-bold'>Lorem ipsum dolor sit.</p>
                    <p className=' text-slate-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, officiis!</p>
                    </p>
                </div> 
               
               
              
                
                
        </div>

        

            


        </div>
  )
}

export default Page2

