import React from "react";
import heart from "../../assets/تنزيل (6).png";
import data from "../../assets/تنزيل.png";
import man from "../../assets/hero_image.e19ac0c6b1009c7280f5.png";
import cercle from "../../assets/hero_image_back.9f54bfba33048f4ca688.png";
import { motion } from "framer-motion";
import { fadeIn } from "../Varients";

export default function RightSection() {
  const imgani = {
    hidden: {
      y: 15,
    },
    visible: {
      y: 0,
      transition: {
        duration: 2,
        delay: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  const heartani = {
    hidden: {
      x: 10,
    },
    visible: {
      x: 0,
      transition: {
        duration: 3,
        delay: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  const imgdata = {
    hidden: {
      x: 20,
    },
    visible: {
      x: 10,
      transition: {
        duration: 4,
        delay: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <>
      <div className="md:w-[30%] relative flex flex-col pt-20  items-center w-full py-10 md:py-0 md:block md:bg-orange-400">
        <motion.div className="">
          <span className="bg-white text-black py-2 px-4  text-sm md:text-md absolute md:right-20 right-9 top-16 font-bold md:top-10 hover:cursor-pointer ">
            {" "}
            Join Now
          </span>
          <motion.div
            variants={heartani}
            initial="hidden"
            animate="visible"
            className="w-[100px] flex flex-col justify-center z-50  rounded  gap-y-2.5 bg-gray-700  absolute -translate-x-13 -translate-y-18 md:-translate-y-0 md:-translate-x-0  lg:right-30 lg:top-35 md:right-6 md:top-30  py-3 px-2"
          >
            <img className="w-[25px]" src={heart} alt="" />
            <span className=" text-sm text-gray-500 font-bold">Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>

          {/* imge */}
          <div className=" flex flex-col translate-y-10 md:-translate-y-6 md:-translate-x-28">
            <motion.div variants={imgani} initial="hidden" animate="visible">
              <img
                src={man}
                className=" w-[250px] md:w-[250px] lg:w-[300px] z-50  md:top-45 absolute "
                alt=""
              />
              {/* cercle */}
              <motion.img
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                src={cercle}
                className=" w-[220px] md:w-[230px] lg:w-[280px] md:-translate-x-16  md:translate-y-20 -translate-x-10  -translate-y-20   "
                alt=""
              />
            </motion.div>
            <motion.div
              variants={imgdata}
              initial="hidden"
              animate="visible"
              className="flex justify-center items-center gap-x-3 rounded bg-[#656565] w-fit md:translate-y-32 md:-translate-x-28 -translate-x-15 -translate-y-12 py-2 px-2"
            >
              <img src={data} className="w-[37px] md:w-[50px]" alt="" />
              <div className="flex flex-col">
                <span className=" text-gray-400">Calories burned</span>
                <span>220 kcal</span>
              </div>
            </motion.div>
          </div>
          {/*  */}
        </motion.div>
      </div>
    </>
  );
}
