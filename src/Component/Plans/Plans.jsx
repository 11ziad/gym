import React from 'react'
import './style.css'
import icon from '../../assets/تنزيل (6).png'
import love from '../../assets/love.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../Varients'
export default function Plans() {
  return <>
  
  <div className=" container flex flex-col justify-center overflow-hidden mx-auto py-10 mt-5" id='Plans'>

  <div className=" flex flex-col text-2xl gap-y-1 text-center md:text-2xl lg:text-5xl font-bold uppercase md:flex-row justify-around items-center">
      <i className='stroke-text'>Ready to Start</i>
      <i className=''>Your Journey</i>
      <i className='stroke-text'>
      now withus</i>
    </div>
    <div className="flex flex-wrap gap-y-10  items-center justify-center mt-20">
      <motion.div
      
      variants={fadeIn('right',0.2)}
      initial='hidden'
      whileInView={"show"}
      className="lg:px-6 w-12/12 lg:w-4/12  ">
        <div className=" flex flex-col bg-[#656565] p-[1.5rem] rounded-tl-4xl rounded-br-4xl">
        <i className="fa-solid fa-heart-circle-exclamation text-4xl text-orange-400"></i>
          <h4 className='my-5 font-bold text-lg'>BASIC PLAN </h4>
          <span className=' text-5xl font-bold my-7'>$ 25</span>
          <div className=" flex gap-x-4 items-center mb-4">
            <img src={love} className=' w-[20px] lg:w-[20px]' alt="" />
            <span>2 hours of excercises</span>
          </div>
          <div className=" flex gap-x-4 items-center mb-4">
            <img src={love} className=' w-[20px] lg:w-[20px]' alt="" />
            <span>Free consultaion to coaches</span>
          </div>
          <div className=" flex gap-x-4 items-center mb-4">
            <img src={love} className=' w-[20px] lg:w-[20px]' alt="" />
            <span>Accessto minibar</span>
          </div>
   
          <span className=' text-sm my-3'>See more benefits <span><i className="ms-2 fa-solid fa-arrow-right"></i></span></span>
          <button className=' hover:cursor-pointer bg-white text-black py-2 font-bold button-style'>Join now</button>
        </div>
      </motion.div>


      <div
      className="lg:px-6 w-12/12 lg:w-4/12">
        <div className=" flex flex-col card-style lg:scale-110 p-[1.5rem] rounded-tl-4xl rounded-br-4xl">
        <i className="fa-solid fa-award text-4xl"></i>
          <h4 className='my-5 font-bold text-lg'>PREMIUM PLAN</h4>
          <span className=' text-5xl font-bold my-7'>$ 30</span>
          <div className=" flex gap-x-4 items-center mb-4">
            <img src={love} className=' w-[20px] lg:w-[20px]' alt="" />
            <span>5 hours of excercises</span>
          </div>
          <div className=" flex gap-x-4 items-center mb-4">
            <img src={love} className=' w-[20px] lg:w-[20px]' alt="" />
            <span>Free consultaion to coaches</span>
          </div>
          <div className=" flex gap-x-4 items-center mb-4">
            <img src={love} className=' w-[20px] lg:w-[20px]' alt="" />
            <span>Access to The Community</span>
          </div>
   
          <span className=' text-sm my-3'>See more benefits <span><i className="ms-2 fa-solid fa-arrow-right"></i></span></span>
          <button className='hover:cursor-pointer bg-white text-orange-400 py-2 font-bold button-style'>Join now</button>
        </div>
      </div>

      <motion.div
       variants={fadeIn('left',0.2)}
       initial='hidden'
       whileInView={"show"}
      className="lg:px-6 w-12/12 lg:w-4/12">
        <div className=" flex flex-col bg-[#656565] p-[1.5rem] rounded-tl-4xl rounded-br-4xl">
        <i className="fa-solid fa-dumbbell text-4xl text-orange-400"></i>
          <h4 className='my-5 font-bold text-lg'>PRO PLAN</h4>
          <span className=' text-5xl font-bold my-7'>$ 45</span>
          <div className=" flex gap-x-4 items-center mb-4">
            <img src={love} className=' w-[20px] lg:w-[20px]' alt="" />
            <span>8 hours of excercises</span>
          </div>
          <div className=" flex gap-x-4 items-center mb-4">
            <img src={love} className=' w-[20px] lg:w-[20px]' alt="" />
            <span>Consultation of Private Coach</span>
          </div>
          <div className=" flex gap-x-4 items-center mb-4">
            <img src={love} className=' w-[20px] lg:w-[20px]' alt="" />
            <span>Free Fitness Merchandise</span>
          </div>
   
          <span className=' text-sm my-3'>See more benefits <span><i className="ms-2 fa-solid fa-arrow-right"></i></span></span>
          <button className='hover:cursor-pointer bg-white text-black py-2 font-bold button-style'>Join now</button>
        </div>
      </motion.div>   
     
      
    </div>

  </div>
  </>
}
