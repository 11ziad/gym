import React from 'react'
import LeftSection from '../LeftSection/LeftSection'
import RightSection from '../RightSection/RightSection'
import Programs from '../Programes/Programs'
import ChoseUs from '../ChoseUS/ChoseUs'
import Plans from '../Plans/Plans'
import AboutUs from '../AboutUs/AboutUs'
import Footer from '../Footer/Footer'


export default function Header() {

  return <>
  <div className="flex md:flex-row overflow-hidden flex-col md:justify-between pb-10">
    <LeftSection></LeftSection>
    <RightSection></RightSection>
  </div>
  <div className="container px-5 md:px-5 lg:px-10 mx-auto overflow-hidden">

  <Programs></Programs>
  <ChoseUs></ChoseUs>
  <Plans></Plans>
  <AboutUs></AboutUs>
  <Footer></Footer>
  </div>
  
  </>
  
}
