"use client";

import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import TimelineElement from "./experience-timeline-element";
import { useThemeContext } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useThemeContext();

  return (
    <section ref={ref} id="experience" className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#eace8f" : "#312516"}>
        {experiencesData.map((experience, index) => {
          return <TimelineElement key={index} item={experience} />;
        })}
      </VerticalTimeline>
    </section>
  );
}
