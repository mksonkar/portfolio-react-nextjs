"use client";

import React from "react";
import { motion } from "motion/react";
import { SlArrowDown } from "react-icons/sl";

function SectionDivider() {
  return (
    <motion.div
      className="my-16 mb-32 hidden text-[#BB9457] sm:flex sm:justify-center"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <SlArrowDown size={40} className="" />
    </motion.div>
  );
}

export default SectionDivider;
