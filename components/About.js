"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("show");
  }, [isInView, mainControls]);

  const heading = {
    hidden: { opacity: 0, x: 200 },
    show: { opacity: 1, x: 0 },
  };
  const text = {
    hidden: { opacity: 0, x: -200 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="about"
      className="w-full relative h-screen flex flex-col bg-transparent"
    >
      <motion.div
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        whileDrag={{ cursor: "grabbing" }}
        whileHover={{ cursor: "grab" }}
        className="absolute w-fit translate-y-[50%] top-[25%] right-[10%] flex justify-center items-center"
      >
        <Image
          width={200}
          height={200}
          alt="arrow"
          src={"/arrow.svg"}
          className="w-100"
          draggable={false}
        />
        <span className="text-[#fed690] font-montserrat text-lg">
          Drag the content box!!
        </span>
      </motion.div>

      <div className="bg-[url('/about.jpg')] w-full h-full absolute bg-cover brightness-[70%] -z-10"></div>
      <motion.div
        ref={ref}
        variants={heading}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1 }}
      >
        <h2 className="text-[#fed690] text-[36px] pt-[5rem] mb-4 text-center font-playFair">
          Discover India: A Tapestry of Culture and Diversity
        </h2>
        <p className="text-[#fed690] text-[20px] font-montserrat text-center">
          Unveiling the Enchanting Story of India&apos;s Rich Heritage and
          Timeless Traditions
        </p>
      </motion.div>
      <motion.p
        ref={ref}
        variants={text}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1 }}
        drag
        dragConstraints={{ top: -100, bottom: 100, left: -100, right: 600 }}
        className="text-[#feba44] w-1/2 ml-16 rounded-2xl   mt-28 p-10 backdrop-blur-sm leading-8 cursor-grab"
        whileDrag={{ cursor: "grabbing" }}
      >
        India, a land of captivating diversity and cultural opulence, weaves a
        mesmerizing tapestry of traditions and history. From the majestic
        Himalayas to the serene backwaters of Kerala, India is a canvas painted
        with vibrant hues. Delve into its ancient civilizations and
        architectural marvels like the Taj Mahal. Immerse yourself in the
        kaleidoscope of festivals, like Diwali and Holi, embracing joy and
        unity. Savor the aroma of aromatic spices and indulge in delectable
        cuisines that vary from region to region. Witness the seamless blend of
        modernity and heritage as India marches forward. Discover the warmth of
        its people, bound by a rich legacy that transcends time. Welcome to
        India – a kaleidoscope of wonder, a fusion of cultures, and a journey of
        a lifetime.
      </motion.p>
    </section>
  );
};

export default About;
