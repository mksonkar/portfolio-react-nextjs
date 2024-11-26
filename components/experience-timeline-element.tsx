import { useThemeContext } from "@/context/theme-context";
import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function TimelineElement({ item }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { theme } = useThemeContext();

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background:
            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight:
            theme === "light"
              ? "0.4rem solid #9ca3af"
              : "0.4rem solid rgba(255, 255, 255, 0.5)",
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          backgroundColor: theme === "light" ? "white" : "rgba(0, 0, 0, 0.3)",
          fontSize: "1.5rem",
          border:
            theme === "light"
              ? "3px solid white"
              : "3px solid rgba(0, 0, 0, 0.3)",
        }}
      >
        <h3 className="font-semibold capitalize">{item.title}</h3>
        <p className="!mt-0 font-normal">{item.location}</p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
          {item.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}
