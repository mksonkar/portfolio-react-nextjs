import { useThemeContext } from "@/context/theme-context";
import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type TimeLineElementProps = {
  item: {
    title: string;
    location: string;
    description: string;
    icon: React.ReactElement;
    date: string;
  };
};

export default function TimelineElement({ item }: TimeLineElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { theme } = useThemeContext();

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background: theme === "light" ? "#eace8f" : "#312516",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight:
            theme === "light" ? "0.4rem solid #BB9457" : "0.4rem solid #745a2f",
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          backgroundColor: theme === "light" ? "#ffe6a7" : "#1E110B",
          color: theme === "light" ? "#bb9457" : "#bb9457",
          fontSize: "1.5rem",
          boxShadow:
            theme === "light"
              ? "0 0 0 4px #BB9457, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 4px rgba(0, 0, 0, .05)"
              : "0 0 0 4px #745a2f, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 4px rgba(0, 0, 0, .05)",
        }}
      >
        <h3 className="font-semibold capitalize">{item.title}</h3>
        <p className="!mt-0 font-normal">{item.location}</p>
        <p className="!mt-1 !font-normal text-[#3B2316]/70 dark:text-[#bb9457]/80">
          {item.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}
