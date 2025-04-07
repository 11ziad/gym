import React from "react";
import './style.css'
import man from '../../assets/image1.1091417d32e491f0bbb6.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../Varients'
export default function AboutUs() {


  return <>
    <div className="mt-6 py-7 mx-auto flex flex-col justify-center lg:translate-x-7">
        <div className="w-full lg:w-6/12">
        <h4 className='uppercase text-orange-400 font-bold mb-6'>Testimonials</h4>
        <div className=" flex flex-col gap-y-6 font-bold">
        <span className='stroke-text text-5xl uppercase'>What they</span>
        <span className='text-5xl uppercase'>say about us</span>
        </div>
        </div>


        {/* slider */}
    
        <div className="flex  items-center justify-between  mt-5 flex-wrap lg:-mt-20" id="Testimotion">
          <motion.div
                variants={fadeIn('right',.3)}
                initial='hidden'
                whileInView={"show"}
          
          className="w-full lg:w-6/12  pha"> obcaecati sequi recusandae amet quod magnam dolorum. Delectus corrupti molestias facere.
          </motion.div>

          <div className="w-full relative z-50 lg:w-6/12   mt-10 lg:mt-0 lg:-translate-y-10">
          <motion.div
                variants={fadeIn('right',.3)}
                initial='hidden'
                whileInView={"show"}
          
          className=" w-[230px]  h-[300px] border-4  border-orange-400 bottom-5 lg:left-20 left-10 absolute "></motion.div>
          <img src={man} className=" w-[230px]  h-[300px] z-50 relative  object-cover translate-x-20 lg:translate-x-30" alt="" />

          </div>

        </div>


        <div className=" flex font-bold mt-5 lg:-mt-15 pb-15 border-b-4 border-orange-500 rounded-md w-fit">
        <span className=" text-orange-500 me-2">JOHN KEVIN </span>
        <span><span className="me-2">-</span> COACH</span>
        </div>

        <div className="flex md:justify-between pb-10 gap-y-5 justify-center flex-wrap items-center mt-2 border-b-2">
          <div className=" text-2xl md:text-3xl lg:text-5xl flex flex-wrap uppercase font-bold w-full md:w-6/12">
            <span className="stroke-text">Ready to</span>
            <span className="md:my-3 ms-3 md:ms-0">Level up your body</span>
             <span className="stroke-text">with us?</span>
          </div>
          <div className="w-full md:w-6/12 lg:translate-x-10 relative">
            <input type="email" className=" bg-gray-200 w-12/12 md:w-12/12 lg:w-10/12 py-5 px-3 focus:outline-none text-black  " placeholder="Enter your Email Address here..." required />
            <button className=" bg-orange-400 py-5 px-2 md:py-3 md:px-3 absolute top-0 md:top-2 right-0 md:right-1 lg:right-26 hover:cursor-pointer">Join now</button>
          </div>
        </div>

    </div>

  </>
}
