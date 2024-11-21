import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className="max-w-[42rem] overflow-hidden border border-black/5 bg-gray-100 sm:pr-8">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2 ">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white"
          >
            {tag}
          </li>
        ))}
      </ul>
      <Image src={imageUrl} alt={title} quality={95} />
    </section>
  );
}
