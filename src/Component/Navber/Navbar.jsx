import React, { useState } from "react";
import logo from "../../assets/تنزيل (5).png";
import { motion } from "framer-motion";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navPhone = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0,
        type: "spring",
        stiffness: 50,
      },
    },
  };
  return (
    <>
      <div className=" flex text-white lg:text-[16px] md:text-sm py-3 font-medium  w-full justify-between lg:px-9 px-3  items-center">
        <div className="">
          <img
            className=" hover:cursor-pointer w-30 lg:w-[180px]"
            src={logo}
            alt=""
          />
        </div>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className={`${
            open === true ? "hidden" : "block"
          } md:hidden fixed z-50 right-8 hover:cursor-pointer`}
        >
          <svg
            className="w-8 h-8"
            aria-hidden="false"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            setOpen(false);
          }}
          className={`${
            open === false ? "hidden" : "block"
          } md:hidden fixed z-50 right-8 hover:cursor-pointer`}
        >
          <i className=" fa-solid fa-xmark text-3xl"></i>
        </button>

        {/* <span onClick={()=> {setOpen(false)}} className={`${open === false ? 'hidden' : 'block'} md:hidden fixed right-12 z-50 hover:cursor-pointer`}>close</span>   */}
        <ul className=" hidden md:flex md:gap-x-5 lg:gap-x-8  ">
          <li className=" hover:cursor-pointer  hover:text-orange-400">
            <a href="#home">Home</a>
          </li>
          <li className=" hover:cursor-pointer  hover:text-orange-400">
            <a href="#programe">Programs</a>
          </li>
          <li className=" hover:cursor-pointer  hover:text-orange-400">
            <a href="#whyus">Why us</a>
          </li>
          <li className=" hover:cursor-pointer  hover:text-orange-400">
            <a href="#Plans">Plans</a>
          </li>
          <li className=" hover:cursor-pointer  hover:text-orange-400">
            <a href="#Testimotion">Testimotion</a>
          </li>
        </ul>
      </div>

      {open === true && (
        <motion.nav
          variants={navPhone}
          initial="hidden"
          animate="visible"
          className=" fixed md:hidden z-50 bg-gray-800 right-2 pt-5 w-8/12  h-[45%] rounded-lg"
        >
          <ul className=" flex flex-col uppercase  gap-y-4 text-center">
            <a
              href="#home"
              onClick={() => {
                setOpen(false);
              }}
              className=" py-1 hover:hover:bg-gray-600 px-4"
            >
              Home
            </a>
            <a
              href="#programe"
              onClick={() => {
                setOpen(false);
              }}
              className=" py-1 hover:hover:bg-gray-600 px-4"
            >
              programe
            </a>
            <a
              href="#whyus"
              onClick={() => {
                setOpen(false);
              }}
              className=" py-1 hover:hover:bg-gray-600 px-4"
            >
              whyus
            </a>
            <a
              href="#Plans"
              onClick={() => {
                setOpen(false);
              }}
              className=" py-1 hover:hover:bg-gray-600 px-4"
            >
              Plans
            </a>
            <a
              href="#Testimotion"
              onClick={() => {
                setOpen(false);
              }}
              className=" py-1 hover:hover:bg-gray-600 px-4"
            >
              Testimotion
            </a>
          </ul>
        </motion.nav>
      )}
    </>
  );
}
