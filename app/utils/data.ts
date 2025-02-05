import pic1 from "@/public/fintrack.png";
import pic2 from "@/public/sushi.png";
import pic3 from "@/public/todoapp.png";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiExpress, SiMongodb, SiPrisma } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

export const projects = [
  {
    title: "Pennybits",
    description:
      "Execute operations on financial records, ensuring real-time updates, utilizing NextJS for the frontend, NodeJS for backend, MongoDB for data management, Clerk for user authentication, and TailwindCSS for styling.",
    src: pic1,
    link: "https://pennybits.vercel.app/",
  },
  {
    title: "Sushimori",
    description:
      "Create a responsive restaurant frontend app with optimizing performance using React + Vite and TailwindCSS for styling.",
    src: pic2,
    link: "https://sushimori-flame.vercel.app/",
  },
  {
    title: "Todo App",
    description:
      "Perform CRUD operations on tasks, with real-time updates and a responsive UI using Prisma for database interactions and Neon for cloud storage.",
    src: pic3,
    link: "https://todoapp-psi-lac.vercel.app/",
  },
];

export const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Works",
    href: "/works",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

export const social = [
  {
    name: "Github",
    href: "https://www.github.com/JSNDWRD",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jason-edward-salim",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jsndwrd",
  },
];

export const certifications = [
  {
    title: "Responsive Web Design",
    href: "https://www.freecodecamp.org/certification/jsndwrd/responsive-web-design",
    desc: "Building responsive websites using HTML and CSS, covering modern layout techniques along with mobile-first design principles.",
  },
  {
    title: "Javascript Algorithms and Data Structures",
    href: "https://www.freecodecamp.org/certification/jsndwrd/javascript-algorithms-and-data-structures-v8",
    desc: "Javascript programming fundamentals, including data structures, algorithms, and ES6 features with experience in solving coding challenges.",
  },
  {
    title: "Back End Development and APIs",
    href: "https://www.freecodecamp.org/certification/jsndwrd/back-end-development-and-apis",
    desc: "Write back end apps with Node.js, NPM, Express framework, MongoDB, and Mongoose library.",
  },
];

export const stack = [
  { id: "html", icon: FaHtml5 },
  { id: "css", icon: FaCss3 },
  { id: "js", icon: FaJs },
  { id: "typescript", icon: SiTypescript },
  { id: "tailwind", icon: RiTailwindCssFill },
  { id: "react", icon: FaReact },
  { id: "nextjs", icon: TbBrandNextjs },
  { id: "node", icon: FaNodeJs },
  { id: "express", icon: SiExpress },
  { id: "mongodb", icon: SiMongodb },
  { id: "prisma", icon: SiPrisma },
  { id: "postgresql", icon: BiLogoPostgresql },
];
