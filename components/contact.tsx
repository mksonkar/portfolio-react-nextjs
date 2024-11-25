"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="w-[min(100%, 38rem)] mb-20 text-center sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="-mt-6 text-gray-700">
        Please contact me directly at{" "}
        <a href="mailto:mkso13189@gmail.com" className="underline">
          mkso13189@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form className="mt-10 flex flex-col">
        <input
          type="email"
          placeholder="Enter your email"
          className="borderBlack h-14 rounded-lg px-4"
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4"
          placeholder="Enter your message"
        />
        <button
          type="submit"
          className="group flex h-12 w-32 items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110"
        >
          Send{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
        </button>
      </form>
    </motion.section>
  );
}
