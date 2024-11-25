"use client";

import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import TimelineElement from "./experience-timeline-element";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section ref={ref} id="experience" className="mb-28 scroll-mt-28">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="#e5e7eb">
        {experiencesData.map((experience, index) => {
          return <TimelineElement key={index} item={experience} />;
        })}
      </VerticalTimeline>
    </section>
  );
}
