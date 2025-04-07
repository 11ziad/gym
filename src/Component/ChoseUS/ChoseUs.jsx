import React from 'react'
import './style.css'
import img1 from '../../assets/image1.1091417d32e491f0bbb6.png'
import img2 from '../../assets/image2.82da8b2725df896d8a8e.png'
import img3 from '../../assets/image3.69484cb0ee7687a8c28b.png'
import img4 from '../../assets/image4.2c0d30b9ce1579eb1109.png'
import icon from '../../assets/تنزيل (7).png'
import adids from '../../assets/تنزيل (2).png'
import nike from '../../assets/تنزيل (3).png'
import np from '../../assets/تنزيل (4).png'
import { motion } from 'framer-motion'
import { fadeIn } from '../Varients'
export default function ChoseUs() {
  return <>
  <section className=' overflow-hidden'>

  
  <div className=" flex flex-wrap gap-y-3 justify-between items-center mx-auto lg:translate-x-10 overflow-hidden mt-10" id='whyus'>
    <motion.div 
         variants={fadeIn('right',.1)}
               initial='hidden'
               whileInView={"show"}
    className="w-12/12 lg:w-6/12">

    <div className="  parent ">
        <div className="div1"><img src={img1} className='w-full  object-cover h-[260px] md:h-[450px] lg:h-[400px]' alt="" /></div>
        <div className="div2"><img src={img2} className=' w-full object-cover h-[130px] md:h-[220px] lg:h-[200px]' alt="" /></div>
        <div className="div3"><img src={img3} className='w-full  object-cover h-[120px] md:h-[220px] lg:h-[190px] ' alt="" /></div>
        <div className="div4"><img src={img4} className='w-full  object-cover h-[120px] md:h-[220px] lg:h-[190px] ' alt="" /></div>
    </div>
    </motion.div>

    <motion.div 
         variants={fadeIn('left',.1 )}
               initial='hidden'
               whileInView={"show"}
    className="w-full lg:w-6/12 lg:ps-5 ">
    <h4 className=' text-orange-400 uppercase font-bold mb-3'>some reasons</h4>
    <span className='stroke-text md:text-5xl text-3xl uppercase font-bold me-3'>Why</span> <span className=' md:text-5xl text-3xl uppercase font-bold'>choose us?</span>
    <div className=" flex gap-x-3 uppercase mt-4 items-center">
        <img src={icon} className=' w-[25px] lg:w-[30px]' alt="" />
        <span className=' font-bold text-sm md:text-lg'>over 140+ expert coachs</span>
    </div>
    <div className=" flex gap-x-3 uppercase mt-6 items-center">
        <img src={icon} className=' w-[25px] lg:w-[30px]' alt="" />
        <span className=' font-bold text-sm md:text-lg'>train smarter and faster than before</span>
    </div>
    <div className=" flex gap-x-3 uppercase mt-6 items-center">
        <img src={icon} className=' w-[25px] lg:w-[30px]' alt="" />
        <span className=' font-bold text-sm md:text-lg'>1 free program for new member</span>
    </div>
    <div className=" flex gap-x-3 uppercase mt-6 mb-3 items-center">
        <img src={icon} className=' w-[25px] lg:w-[30px]' alt="" />
        <span className=' font-bold text-sm md:text-lg'>reliable partners</span>
    </div>
    <span className=' font-mono text-gray-400 md:text-xl text-md'>OUR PARTNERS</span>
    <div className=" flex items-center gap-x-4 mt-4">
    <img className=' w-[30px] md:w-[37px]' src={adids} alt="" />
    <img className=' w-[30px] md:w-[37px]' src={nike} alt="" />
    <img className=' w-[30px] md:w-[37px]' src={np} alt="" />
    </div>

    </motion.div>

  </div>
  </section>
  
  </>
}

