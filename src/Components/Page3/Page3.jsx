import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import { gsap } from 'gsap'

function Page3() {
    const title = useRef(null)
    const [visible , setVisible] = useState(false)
    const onEnterViewport = ()=>{
        setVisible(true)
    }

    const onExitViewport = ()=>{
        setVisible(false)
    }

    

    useEffect(() => {



        if (visible) {
          // Animation using GSAP
          gsap.from(title.current, {
            x: -500,
            scale: 0,
             // Move the element 100 pixels to the right
            duration: 1,
            ease: "power2.inOut",
          });

          gsap.to(title.current, {
            scale: 1,
            x: 0, // Move the element 100 pixels to the right
            duration: 1,
            ease: "power2.inOut",
          });

        }
        else{
            gsap.from(title.current, {
                scale: 0,
                x: -200, // Move the element 100 pixels to the right
                ease: "power2.inOut",
              });
            
        }
      }, [visible]);
    return (
        <div className=' flex container w-4/5 h-69 bg-orange-100 m-auto rounded-xl items-center font-semibold '>

            <div className='flex flex-col w-full'>

            <div className='flex  w-full m-10'>
                <div className='flex flex-col '>
                    <p className='my-4 mx-2'>Ahead App</p>
                    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport} >
                    <p ref={title} className=' lg:text-6xl md:text-3xl sm:text-2xl text-xl font-bold font-sans tracking-wide'>Meet the ahead app</p>
                    </ScrollTrigger>
                    <div>
                    </div>
                </div>
            </div>

            <div className='flex justify-around w-full m-10'>

                <div className=''>

                </div>
                <div className='w-fit'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eligendi ipsam harum deleniti ex nihil.</p>
                </div>
                
            </div>

            </div>

            




        </div>
    )
}

export default Page3