"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id=""
      className="relative w-full hero  flex justify-center items-center  bg-transparent  md:h-[100vh]  "
    >
      <div className="bg-hero-img w-full h-full absolute bg-cover brightness-[75%] -z-10"></div>
      <motion.div className="w-[40%]  py-8 px-8 text-center flex flex-col gap-5 text-[#feba44]">
        <motion.h1
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          initial={{ translateX: "-200%" }}
          animate={{ translateX: 0 }}
          transition={{ duration: 1 }}
          className="font-playFair leading-[4rem] text-[48px] cursor-grab"
          whileDrag={{ cursor: "grabbing" }}
        >
          Ancient India: A Timeless Odyssey
        </motion.h1>
        <motion.p
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          initial={{ translateX: "200%" }}
          animate={{ translateX: 0 }}
          transition={{ duration: 1 }}
          className="text-[20px] font-montserrat px-20 cursor-grab"
          whileDrag={{ cursor: "grabbing" }}
        >
          Journey to Ancient India: Where Majestic Monuments and Vibrant
          Cultures Resonate Through Captivating Art.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
