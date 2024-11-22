"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        A passionate frontend developer with a strong background in{" "}
        <span className="font-medium">Computer Science and engineering</span>, I
        specialize in crafting modern, responsive and user-friendly web sites
        using{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Linux. I am always excited to
        learn and expand my knowledge in the field of web development. I am
        currently looking for a{" "}
        <span className="font-medium">frontend position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, you'll find me
        exploring new technologies, working on personal projects, or fiddeling
        with my neovim config. With my{" "}
        <span className="font-medium">strong problem-solving skills</span> and
        firm grasp of the{" "}
        <span className="italic">fundamentals of computer science</span> like{" "}
        <span className="font-medium">algorithms and data structures</span>,{" "}
        <span className="font-medium">operating systems</span>,{" "}
        <span className="font-medium">networking</span> and{" "}
        <span className="font-medium">database management systems</span>. I
        believe I can make a significant impact in any field I pursue.{" "}
        <span className="italic">Lets build something amazing together!</span>
      </p>
    </motion.section>
  );
}
