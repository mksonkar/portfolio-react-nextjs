"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { projectsData } from "@/lib/data";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  deployUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group relative mb-3 max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-[#BB9457]/30 last:mb-0 hover:bg-[#BB9457]/50 dark:bg-[#BB9457]/20  dark:hover:bg-[#BB9457]/30 sm:mb-8 sm:h-[20rem] sm:pr-8"
    >
      <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[21rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-[#3B2316]/70 dark:text-[#bb9457]">
          {description}
        </p>
        <div className="flex gap-2 py-4">
          <a
            className="borderBlack flex h-10 w-10 items-center justify-center rounded-full bg-[#3c3836]/10 p-2 text-xl transition hover:scale-[1.15] hover:text-stone-950 focus:scale-[1.15] active:scale-105 dark:bg-[#FFE6A7]/20 dark:text-[#ffe6a7]/70"
            href={githubUrl}
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="borderBlack flex h-10 w-10 items-center justify-center rounded-full bg-[#3c3836]/10 p-2 text-xl transition hover:scale-[1.15] hover:text-stone-950 focus:scale-[1.15] active:scale-105 dark:bg-[#FFE6A7]/20 dark:text-[#ffe6a7]/70"
            href={deployUrl}
            target="_blank"
          >
            <FiExternalLink />
          </a>
        </div>
        <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="rounded-full bg-[#3B2316]/60 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-[#ffe6a7] dark:bg-[#1E110B]/60 dark:text-opacity-70"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 
        group-even:right-[initial] 
        group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2 
        group-hover:scale-105 
        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        sm:block
        "
      />
    </motion.section>
  );
}
