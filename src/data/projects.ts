import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiFirebase,
  SiGo,
  SiMysql,
  SiPostgresql,
  SiFramer,
  SiOpenai,
  SiPython,
  SiFastapi,
  SiSupabase,
  SiShadcnui,
} from "react-icons/si";
import { MdAnimation } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";

export const projects = [
  {
    title: "Go-Bookstore-API",
    url: "https://github.com/jahidprog/go-bookstore-api.git",
    image: "/project-images/bookstore-api.png",
    description: "A Book Management System using Go and MySQL, implementing full CRUD operations with GORM and Gorilla Mux. Focused on clean API design, modular project structure, and real-world database interaction using ORM.",
    tech: [SiGo, SiMysql],
  },

  {
    title: "Go-Checkmail",
    url: "https://github.com/jahidprog/go-checkMail.git",
    image: "/project-images/check-mail.png",
    description: "A Go-based CLI tool that validates domain DNS configurations by checking for MX, SPF, and DMARC records. Designed for quick diagnostics of email readiness and security policies.",
    tech: [SiGo],
  },

  {
    title: "FileOrganizer",
    url: "https://github.com/jahidulislam114593/file-organizer.git",
    image: "/project-images/file-organizer.png",
    description: "A simple and efficient CLI application written in Golang to automatically organize files in a directory based on their file types (extensions). Ideal for cleaning up your messy 'Downloads' or 'Desktop' folder with a single command!",
    tech: [SiGo],
  },
  {
    title: "MusicWorld",
    url: "https://worldmusic.vercel.app/",
    image: "/project-images/musicworld.png",
    description: "Developed a modern and intuitive UI leveraging the Aceternity UI library, overcoming technical challenges to deliver a polished user experience.",
    tech: [SiNextdotjs, SiTypescript, MdAnimation, SiTailwindcss],
  },
  {
    title: "DragonAuth",
    url: "https://dragon-auth-9b745.web.app/",
    image: "/project-images/dragon-auth.png",
    description: "Built a user authentication system with React, Firebase, and Tailwind CSS, featuring Firebase Authentication for user management, protected routes, role-based access, and secure token-based authentication.",
    tech: [SiReact, SiJavascript, SiTailwindcss, SiFirebase],
  },
  // {
  //   title: "FirebaseAuth",
  //   url: "https://fir-2-react-auth-d1b25.web.app/",
  //   image: "",
  //   description: "Learning FireBase Authentication (signIn, signOut, Google, GitHub, Facebook) in React Project",
  //   tech: [SiReact, SiJavascript, SiTailwindcss, SiFirebase],
  // },
  {
    title: "Glasses",
    url: "https://glasses-auth-39338.web.app/",
    image: "/project-images/glasses.png",
    description: "Built a responsive e-commerce platform using React and Tailwind CSS, featuring product listings, filtering, and shopping cart functionality, with a modern UI design.",
    tech: [SiReact, SiTailwindcss, SiJavascript, SiFirebase],
  },

  /*
  {
    title: "AdmitPath",
    url: "https://admit-path.com",
    image: "/project-images/admit-path.png",
    description: "A Marketplace Connecting College Applicants and Counselors",
    tech: [SiNextdotjs, SiTailwindcss, SiPython, SiFastapi, SiPostgresql, SiSupabase],
  },
  {
    title: "ProjectMate",
    url: "https://project-mate-develop.vercel.app",
    image: "/project-images/project-mate.png",
    description: "An AI Powered platform for project management and collaboration",
    tech: [SiNextdotjs, SiSupabase, SiPostgresql, RiRobot2Line],
  },
  {
    title: "PromoBars",
    url: "https://promo-bars.vercel.app",
    image: "/project-images/promo-bars.png",
    description: "A customizable promotion bar solution for e-commerce websites",
    tech: [SiNextdotjs, SiTailwindcss, SiShadcnui],
  },
  {
    title: "Nano Link",
    url: "https://nano-link.vercel.app",
    image: "/project-images/nano-link.png",
    description: "URL shortener with analytics and custom links",
    tech: [SiNextdotjs, SiTailwindcss, SiShadcnui, SiPostgresql],
  },
  {
    title: "Munab AI",
    url: "https://munab-ai.vercel.app",
    image: "/project-images/munab-ai.png",
    description: "AI-powered assistant for developers and content creators",
    tech: [SiNextdotjs, SiTailwindcss, SiOpenai],
  },
  {
    title: "Munab Portfolio-v2",
    url: "https://munab-v2.vercel.app",
    image: "/project-images/portfolio-v2.png",
    description: "Second iteration with improved design and animations",
    tech: [SiNextdotjs, SiTailwindcss, SiFramer],
  },
  */
];