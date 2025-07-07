import { RiRobot2Line } from "react-icons/ri";
import { LuComponent } from "react-icons/lu";
import { MdAnimation } from "react-icons/md";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiOpenai,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiDocker,
  SiCloudflare,
  SiGit,
  SiGithub,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiCplusplus,
  SiGo,
  SiTensorflow
} from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Golang", icon: SiGo, color: "#00ADD8" },
      { name: "C/C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }
    ]
  },
  {
  category: "Concept",
  items: [
    { name: "Operating System", icon: RiRobot2Line, color: "#FFFFFF" }, // Placeholder
    { name: "OOPs", icon: MdAnimation, color: "#FFFFFF" },
    { name: "DSA", icon: FaProjectDiagram, color: "#FFFFFF" },
    { name: "Artificial Intelligence", icon: SiOpenai, color: "#FFFFFF" },
    { name: "Machine Learning", icon: SiTensorflow, color: "#FF6F00" }
  ]
},
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "DaisyUI", icon: LuComponent, color: "#FFFFFF" },
      // { name: "Material UI", icon: MdAnimation, color: "#FFFFFF" },
      // { name: "ShadCN UI", icon: LuComponent, color: "#FFFFFF" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Golang", icon: SiGo, color: "#00ADD8" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#339933" }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" }
    ]
  },
  {
    category: "AI",
    items: [
      { name: "OpenAI", icon: SiOpenai, color: "#FFFFFF" },
      { name: "DeepSeek", icon: RiRobot2Line, color: "#FFFFFF" },
      { name: "Groq", icon: RiRobot2Line, color: "#FFFFFF" }
    ]
  }
];

export const about = {
  name: "Jahidul Islam",
  nickName: "Evan",
  title: "Aspiring Software Engineer | Golang Developer | AI Enthusiast",
  location: "Chittagong, Bangladesh",
  email: "jahidul.islam114593@gmail.com",
  website: "",
  social: {
    linkedin: "https://www.linkedin.com/in/jahidevan/",
    github: "https://github.com/jahidulislam114593",
    x: "https://x.com/Jahidul11Islam"
  },
  bio: "I'm Jahidul Islam, a fresh Computer Science graduate from Bangladesh. I'm passionate about coding and problem-solving. Right now, I'm focusing on backend development using Golang, and I’m excited to explore AI and Machine Learning in the near future. Outside of work, I enjoy keeping up with scientific developments. I also spend time playing video games and creating tech-related reels for my community."
};
