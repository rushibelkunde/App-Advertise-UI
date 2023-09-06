import React, { useEffect, useState } from 'react'
import { gsap, CSSPlugin } from "gsap";
import { useRef } from 'react'
import ScrollTrigger from 'react-scroll-trigger';

// import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollTrigger);



function Page2() {
    const title = useRef(null)
    const [visible , setVisible] = useState(false)
    const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const mask = useRef(null);
 


    const onEnterViewport = ()=>{
        setVisible(true)
    }

    const onExitViewport = ()=>{
        setVisible(false)
    }

    

    useEffect(() => {
        if (visible) {
          // Animation using GSAP
          gsap.to(title.current, {
            x: 100, // Move the element 100 pixels to the right
            duration: 1,
            ease: "power2.inOut",
          });
        }
        else{
            gsap.to(title.current, {
                x: -100, // Move the element 100 pixels to the right
                ease: "power2.inOut",
              });
            
        }
        
      }, [visible]);

     
      

  
  return (
    <div  className='flex flex-col container w-4/5 lg:h-69 h-auto m-auto rounded-xl mt-20 font-semibold '>

        <div className='flex w-full justify-around text-lg flex-wrap'>
            <p className=' w-64 font-bold text-3xl mb-3'>EQ beats IQ</p>
            <p className=' w-64 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, minima.</p>
            <p className=' w-64 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Libero omnis laboriosam quia, natus dolores ullam cupiditate magni deleniti nostrum eaque.</p>

        </div>
        <div className='mt-20'>
        <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
            <p className='text-4xl ml-40 font-bold m-auto' ref={title} >Does this sound familiar...</p>
            </ScrollTrigger>
        </div>
        <div ref={wrapperRef} className='flex mt-20 gap-2 overflow-y-hidden no-scrollbar'>

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
                </div> <div className= 'flex-shrink-0 w-72 h-48 mb-3 bg-purple-300 rounded-3xl flex flex-col justify-around p-4 font-semibold '>
                    <p></p>
                    <p><p className=' font-bold'>Lorem ipsum dolor sit.</p>
                    <p className=' text-slate-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, officiis!</p>
                    </p>
                </div> <div className= ' flex-shrink-0 w-72 h-48 mb-3 bg-purple-300 rounded-3xl flex flex-col justify-around p-4 font-semibold '>
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

