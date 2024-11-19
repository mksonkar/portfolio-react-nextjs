"use client";

import Image from "next/image";
import React from "react";
import mukeshPortrait from "@/public/mukeshPortrait.jpg";
import { motion } from "motion/react";

function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={mukeshPortrait}
              alt="Mukesh's Portrait photo"
              width="192"
              quality="95"
              priority={true}
              className="h-34 w-34 rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-1 right-2 text-5xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
    </section>
  );
}

export default Intro;
