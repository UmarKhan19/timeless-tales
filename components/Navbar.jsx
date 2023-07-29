"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 2 }}
      className="fixed w-screen py-3 z-10 font-montserrat  text-[#feba44] flex justify-between  px-16 text-xl backdrop-blur-sm"
    >
      <span>
        <Link href="#">Timeless Tales</Link>
      </span>

      <ul className="flex gap-16 ">
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Link href="#">Home</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Link href="#heritage">Heritage</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Link href="#about">About</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Link href="#register">Register</Link>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
