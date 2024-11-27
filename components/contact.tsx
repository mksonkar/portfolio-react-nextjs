"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "motion/react";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

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
      <p className="-mt-6 text-[#3B2316]/70 dark:text-[#bb9457]/80">
        Please contact me directly at{" "}
        <a href="mailto:mkso13189@gmail.com" className="underline">
          mkso13189@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
        className="mt-10 flex flex-col"
      >
        <input
          name="senderEmail"
          type="email"
          placeholder="Enter your email"
          className="borderBlack h-14 rounded-lg bg-[#eace8f] px-4 transition-all placeholder:text-[#3B2316]/70 focus:outline-none focus:ring-2 focus:ring-[#3b2316] dark:bg-[#312516] dark:bg-opacity-80 placeholder:dark:text-[#bb9457]/80 dark:hover:bg-opacity-100 dark:focus:ring-[#BB9457]"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="borderBlack my-3 h-52 rounded-lg bg-[#eace8f] p-4 transition-all placeholder:text-[#3B2316]/70 focus:outline-none focus:ring-2 focus:ring-[#3b2316] dark:bg-[#312516] dark:bg-opacity-80 placeholder:dark:text-[#bb9457]/80 dark:hover:bg-opacity-100 dark:focus:ring-[#BB9457]"
          placeholder="Enter your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
