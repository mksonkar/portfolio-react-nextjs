"use client";

import Image from "next/image";
import React from "react";
import { JetBrains_Mono } from "next/font/google";
import mukeshPortrait from "@/public/mukeshPortrait.jpg";
import { motion } from "motion/react";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Typewriter from "typewriter-effect";

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className={`${jetBrainsMono.variable} mb-28 max-w-[50rem] scroll-mt-96 text-center sm:mb-0`}
    >
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
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full border-[0.35rem] border-[#BB9457] shadow-xl dark:border-opacity-40"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
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

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Mukesh Kumar.</span> I'm a{" "}
        <span className="font-bold">front-end developer.</span> I enjoy building
        cool apps and websites with{" "}
        <span className={`font-jetbrainsMono`}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("❤️").pauseFor(2500).start();
            }}
            options={{
              strings: [
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        {/* <span className="underline">React and Next.js</span>. */}
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-[#3B2316] px-7 py-3 text-[#FFE6A7] outline-none transition hover:scale-110 hover:bg-[#6F1D1B] focus:scale-110 active:scale-105 dark:bg-[#FFE6A7]/60 dark:text-[#1e110b] dark:hover:bg-[#6F1D1B]/50 dark:hover:text-[#ffe6a4]/70"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>
        <a
          className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-[#0F0906]/10 px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-[#FFE6A7]/20"
          href="/Mukesh-Kumar-Resume.pdf"
          download
        >
          Resume{" "}
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <a
          className="borderBlack flex items-center gap-2 rounded-full bg-[#3c3836]/10 p-4 transition hover:scale-[1.15] hover:text-stone-950 focus:scale-[1.15] active:scale-105 dark:bg-[#FFE6A7]/20 dark:text-[#ffe6a7]/70"
          href="https://www.linkedin.com/in/mkso/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="borderBlack flex items-center gap-2 rounded-full bg-[#3c3836]/10 p-[0.95rem]  text-xl transition hover:scale-[1.15] hover:text-stone-950 focus:scale-[1.15] active:scale-105 dark:bg-[#FFE6A7]/20 dark:text-[#ffe6a7]/70"
          href="https://github.com/mksonkar"
          target="_blank"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
