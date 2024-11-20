"use client";

import Image from "next/image";
import React from "react";
import mukeshPortrait from "@/public/mukeshPortrait.jpg";
import { motion } from "motion/react";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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

      <motion.p
        className="mb-10 mt-8 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Mukesh Kumar.</span> I'm a{" "}
        <span className="font-bold">front-end developer.</span> I enjoy building
        cool apps and websites using{" "}
        <span className="underline">React and Next.js</span>.
      </motion.p>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white"
        >
          Contact Me <BsArrowRight />
        </Link>
        <a className="flex items-center gap-2 rounded-full bg-white px-7 py-3">
          Download Resume <HiDownload />
        </a>
        <a className="flex items-center gap-2 rounded-full bg-white p-4 text-gray-700">
          <BsLinkedin />
        </a>
        <a className="flex items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
