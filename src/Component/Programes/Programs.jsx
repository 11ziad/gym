import React from "react";
import "./style.css";
import logo from "../../assets/تنزيل (1).png";
import { motion } from "framer-motion";
import { fadeIn } from "../Varients";

export default function Programs() {
  return (
    <>
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        className=" container pb-10 mx-auto "
        id="programe"
      >
        <div className=" flex flex-col text-2xl gap-y-1 text-center md:text-2xl lg:text-5xl font-bold uppercase md:flex-row justify-around items-center  mt-6">
          <i className="stroke-text">Explore our</i>
          <i className="">Programs</i>
          <i className="stroke-text">To shape you</i>
        </div>

        <div className=" flex flex-wrap  justify-center items-center  gap-y-4 lg:flex-row mt-6">
          <div className="md:px-2  w-12/12 md:w-6/12 lg:w-3/12">
            <div className=" p-9 bg-[#9c9c9c] card">
              <i className="fa-solid fa-dumbbell text-[30px] mb-6 "></i>
              <h3 className="mb-4 font-bold text-xl">Strength Training</h3>
              <p className=" mb-4 text-sm">
                In this program, you are trained to improve your strength
                through many exercises.
              </p>
              <button>
                Join Now{" "}
                <span className=" ms-6">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="md:px-2  w-12/12 md:w-6/12  lg:w-3/12">
            <div className=" w-12/12 p-9 bg-[#9c9c9c] card">
              <i className="fa-solid fa-person-running text-[30px] mb-6"></i>
              <h3 className="mb-4 font-bold text-xl">Cardio Training</h3>
              <p className=" mb-4 text-sm">
                In this program, you are trained to do sequential moves in range
                of 20 until 30 minutes.{" "}
              </p>
              <button>
                Join Now{" "}
                <span className=" ms-6">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="md:px-2  w-12/12 md:w-6/12  lg:w-3/12">
            <div className=" w-12/12 p-9 bg-[#9c9c9c] card">
              <i className="fa-solid fa-fire-flame-curved  text-[30px] mb-6"></i>
              <h3 className="mb-4 font-bold text-xl">Fat Burning</h3>
              <p className=" mb-4 text-sm">
                This program is suitable for you who wants to get rid of your
                fat and lose their weight.{" "}
              </p>
              <button>
                Join Now{" "}
                <span className=" ms-6">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="md:px-2  w-12/12 md:w-6/12  lg:w-3/12">
            <div className=" w-12/12 p-9 bg-[#9c9c9c] card">
              <i className="fa-solid fa-heart-circle-bolt text-[30px] mb-6"></i>
              <h3 className="mb-4 font-bold text-xl">Health Fitness</h3>
              <p className=" mb-4  text-sm">
                This programs is designed for those who exercises only for their
                body fitness not body building.{" "}
              </p>
              <button>
                Join Now{" "}
                <span className=" ms-6">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
