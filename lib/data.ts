import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import planeroImg from "@/public/planero.png";
import ticTacToeImg from "@/public/ticTacToe.png";
import todoListImg from "@/public/todoList.png";
import passwordGeneratorImg from "@/public/passwordGenerator.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web developer",
    location: "Raipur",
    description:
      "Managing frontend for government websites using React and JavaScript",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Web developer Intern",
    location: "Remote",
    description:
      "Built a Twitter like blogging website using HTML, CSS, JavaScript and JQuery",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Machine Learning Intern",
    location: "Remote",
    description:
      "Build a word embedding model with FastText and GloVe to classify memes on the basis of offensiveness",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "B.Tech. Computer Science and Engineering",
    location: "Bhilai Institute of Technology, Durg",
    description:
      "Learnt courses like Data Structures, Algorithms, Software Engineering, Operating Systems, Database Management and Computer Networks. Graduated with 8.7 CGPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "High School +2",
    location: "Krishna Public School, Bhilai",
    description:
      "Studied core subjects like Physics, Chemistry and Math. Graduated with 84.4%",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Planero",
    description: "A project management app with boards, lists and cards.",
    tags: ["React", "React Router", "Tailwind", "Firebase"],
    imageUrl: planeroImg,
  },
  {
    title: "React Password generator",
    description:
      "Generate secure passwords with random words, characters and numbers on the fly.",
    tags: ["React", "Tailwind"],
    imageUrl: passwordGeneratorImg,
  },
  {
    title: "Tic-Tac-Toe game",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React, CSS"],
    imageUrl: ticTacToeImg,
  },
  {
    title: "Todo List app",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React, CSS"],
    imageUrl: todoListImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind",
  "Next.js",
  "HTML",
  "CSS",
  "Framer Motion",
  "Node.js",
  "Git",
  "Github",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Vim",
  "Lua",
  "Linux",
] as const;
