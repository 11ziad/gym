import React from 'react'
import Slider from "react-slick";
import man from '../../assets/image2.82da8b2725df896d8a8e.png'
import man2 from '../../assets/image3.69484cb0ee7687a8c28b.png'
import  man3 from '../../assets/image4.2c0d30b9ce1579eb1109.png'
import  man4 from '../../assets/image1.1091417d32e491f0bbb6.png'

export default function SlidShow() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
  
  return <>
    
  <div className="slider-container w-full m-auto mt-10 ">
<Slider {...settings}>
  <div>
    <img src={man} className=" lg:w-[260px] lg:h-[300px] w-[180px] h-[180px] object-cover m-auto" />
  </div>
  <div>
    <img src={man2} className=" lg:w-[260px] lg:h-[300px] w-[180px] h-[180px] object-cover m-auto" />
  </div>
  <div>
    <img src={man3} className=" lg:w-[260px] lg:h-[300px] w-[180px] h-[180px] object-cover m-auto" />
  </div>
  <div>
    <img src={man4} className=" lg:w-[260px] lg:h-[300px] w-[180px] h-[180px] object-cover m-auto" />
  </div>


</Slider>
</div>
  </>
}
