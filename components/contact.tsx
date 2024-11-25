"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "motion/react";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="w-[min(100%, 38rem)] mb-20 text-center sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="-mt-6 text-gray-700">
        Please contact me directly at{" "}
        <a href="mailto:mkso13189@gmail.com" className="underline">
          mkso13189@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        action={async (formData) => {
          await sendEmail(formData);
        }}
        className="mt-10 flex flex-col"
      >
        <input
          name="senderEmail"
          type="email"
          placeholder="Enter your email"
          className="borderBlack h-14 rounded-lg px-4"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="borderBlack my-3 h-52 rounded-lg p-4"
          placeholder="Enter your message"
          required
          maxLength={500}
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
