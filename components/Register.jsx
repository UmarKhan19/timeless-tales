"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Register = () => {
  const ref = useRef();
  const card = {
    hidden: { opacity: 0, x: -200 },
    show: { opacity: 1, x: 0 },
  };

  const text = { hidden: { opacity: 0, x: 200 }, show: { opacity: 1, x: 0 } };

  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView, mainControls]);

  return (
    <section
      id="register"
      className=" min-h-screen relative w-full flex flex-col items-center gap-10 justify-center"
    >
      <div className="bg-[url('/register.jpg')] bg-no-repeat -z-20 brightness-[75%] absolute h-full bg-cover w-full" />
      <motion.div
        ref={ref}
        variants={text}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1 }}
        className="px-5 md:px-0"
      >
        <h1 className="text-[#fed690] text-[36px] pt-[5rem] mb-4 text-center font-playFair">
          A Passage through Time: Embrace India&apos;s Heritage
        </h1>
        <p className="text-[#fed690] text-[20px] font-montserrat text-center">
          Join us for a Memorable Journey through India&apos;s Timeless
          Heritage. Register Today!
        </p>
      </motion.div>
      <motion.form
        ref={ref}
        variants={card}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center text-[#fed690] backdrop-blur-sm rounded-lg shadow-2xl md:w-1/2   py-10 px-5 gap-4"
      >
        <div className="flex flex-col gap-2 md:w-3/4">
          <label className="w-full" htmlFor="name">
            Full Name:
          </label>
          <input
            placeholder="Umar Khan"
            className="w-full placeholder:text-[#fed690] placeholder:opacity-50 focus-visible:ring-2  focus-visible:ring-[#f49b01] px-4 py-2 bg-transparent border-[#f49b01] rounded-lg border-2"
            type="text"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-2 md:w-3/4">
          <label className="w-full" htmlFor="email">
            Email:
          </label>
          <input
            placeholder="example@gmail.com"
            className="w-full placeholder:text-[#fed690] placeholder:opacity-50 focus-visible:ring-2 focus-visible:ring-[#f49b01] px-4 py-2 bg-transparent border-[#f49b01] rounded-lg border-2"
            type="text"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-2 md:w-3/4">
          <label className="w-full" htmlFor="phone">
            Phone Number:
          </label>
          <input
            placeholder="1234567890"
            className="w-full placeholder:text-[#fed690] placeholder:opacity-50 focus-visible:ring-2 focus-visible:ring-[#f49b01] px-4 py-2 bg-transparent border-[#f49b01] rounded-lg border-2"
            type="tel"
            id="phone"
          />
        </div>
        <div className="flex flex-col gap-2 md:w-3/4">
          <label className="w-full" htmlFor="country">
            Country:
          </label>
          <input
            placeholder="Canada"
            className="w-full placeholder:text-[#fed690] placeholder:opacity-50 focus-visible:ring-2 focus-visible:ring-[#f49b01] px-4 py-2 bg-transparent border-[#f49b01] rounded-lg border-2"
            type="text"
            id="country"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="px-4 py-2 bg-[#f49b01] bg-opacity-75 rounded-lg mt-5"
          type="submit"
        >
          Register Now
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Register;
