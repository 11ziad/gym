import React from 'react'
import Navbar from '../Navber/Navbar'
import './style.css'
import {motion} from 'framer-motion'
import { fadeIn } from '../Varients'
import NumberCounter from 'number-counter';


export default function LeftSection() {

  const imgeAni = {
    hidden : {
      x : 0,
      opacity : 1,
    },
    visible :{
      x : 174, 
      opacity : 1,
      transition :{
        duration : 7,
        delay : 2,  
      repeat : Infinity,
      repeatType: "reverse"
      }
      

    }
  }


  return <>
  <div className="w-full lg:w-[70%] pb-10 p-6 " id='home'>
<Navbar></Navbar>
  <div className=" flex-column w-full flex-wrap md:block">
  <div className="back-ani flex justify-center md:block m-auto  w-fit relative rounded-4xl mb-6 md:ms-0 mt-16 md:mt-20">
    <motion.div
      variants={imgeAni}
      initial = "hidden"
      animate = "visible"
    
    className=" absolute h-[80%] bg-orange-400 w-[5rem] top-1 left-1 rounded-3xl"></motion.div>
    <h3 className='relative text-sm lg:text-md uppercase  py-4 px-3'> 
    the  best  fitness  clup  the  towen
    </h3>
  </div>

  <motion.div 
      variants={fadeIn('right',.3)}
      initial='hidden'
      whileInView={"show"}

  className="back rounded-xl mt-5 w-fit px-4 py-3 text-center md:text-start  uppercase md:text-6xl lg:text-7xl  text-4xl font-medium m-auto md:ms-0 ">
    <div className='mb-4'>
        <span className='stroke-text me-4'>shape</span> 
        <span className=''>your</span> 
        </div>
    <div className=''>
        <span className='me-3'>ideal</span> 
        <span className=''>body</span> 
        </div>
  </motion.div>
  <p className=' mt-10  m-auto  text-center md:ms-0 md:text-left md:w-9/12 text-sm md:text-md text-p'> in here we will help you to shape and build your ideal body and live up your life to fuilest </p>

  <div className=" flex items-center text-center justify-center md:justify-start gap-x-3 mt-2 ">
    <div className=" flex justify-center items-center px-2 py-3 flex-col">
      <span className='md:text-3xl lg:text-4xl text-[22px]'> <NumberCounter end={140} start={100} delay={4} className="increment" preFix="+"/>  </span>
      <span className='text-gray-400 md:text-md lg:text-xl font-medium text-[12px] uppercase'>expert coatches</span>
    </div>
    <div className=" flex justify-center items-center px-2 py-3 flex-col">
      <span className='md:text-3xl lg:text-4xl text-[22px]'> <NumberCounter end={978} start={800} delay={4} className="increment" preFix="+"/></span>
      <span className='text-gray-400 md:text-md lg:text-xl font-medium text-[12px] uppercase'>members joined</span>
    </div>
    <div className=" flex justify-center items-center px-2 py-3 flex-col">
      <span className='md:text-3xl lg:text-4xl text-[22px]'> <NumberCounter end={50} start={20} delay={4} className="increment" preFix="+"/></span>
      <span className='text-gray-400 md:text-md lg:text-xl font-medium text-[12px] uppercase'>fitness programs</span>
    </div>
      </div>

        <div className="flex  md:text-md gap-x-2 mt-5 justify-center md:justify-start items-center">
          <button className='hover:cursor-pointer font-medium  button-styley px-3 py-1 ms-2 hover:bg-transparent border-2 border-amber-500 '>Get Started</button>
            <button className=' hover:cursor-pointer font-medium border-amber-500 border-2 px-3 py-1 ms-2 button-style  '>Learn More</button>
        </div>
  </div>
  </div>

  </>
}
