"use client";
import heritageData from "@/utils/heritageData";
import Card from "./Card";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Heritage = () => {
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
  //   bg-[#f49b01]
  return (
    <section
      id="heritage"
      className="pb-10 min-h-screen relative w-full  flex flex-col gap-14  items-center"
    >
      <div className="bg-[url('/heritageSection.jpg')] bg-no-repeat -z-20 absolute h-full bg-cover w-full" />
      <motion.div
        ref={ref}
        variants={text}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1 }}
        className="md:px-5 px-3"
      >
        <h1 className="text-[#fed690] text-[36px] pt-[5rem] mb-4 text-center font-playFair">
          India&apos;s Heritage: A Timeless Legacy
        </h1>
        <p className="text-[#fed690] text-[20px] font-montserrat text-center">
          Immerse in the Rich Tapestry of India&apos;s Cultural Heritage,
          Honoring a Glorious Past and Inspiring the Future.
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        variants={card}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1 }}
        className="grid w-full gap-10 lg:grid-cols-2 px-4 md:px-32 "
      >
        {heritageData.map((data, i) => (
          <Card key={i} data={data} id={i} />
        ))}
      </motion.div>
    </section>
  );
};

export default Heritage;
