import { Experiences, LinksProps, Project, Tab } from ".";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Tech } from "../components/Tech";
import {
  MdComputer,
  FaLinkedin,
  FaGithub,
  SiUpwork,
  MdOutlineMailOutline,
  BsFillSuitcaseLgFill,
  FaXTwitter,
} from "../icons/icons";

export const experiences: Experiences[] = [
  {
    id: 1,
    pfp: "./memoji4.png",
    name: "Daniel Perez",
    username: "dxnieldev",
    date: "March 2024 - Present",
    role: "Teaching Assistant, LearningFuze",
    location: "Irvine, CA",
    description: [
      "Assisted students with debugging and troubleshooting coding problems.",
      "Maintained a detailed record of student interactions and how I assisted them.",
      "Provided one-on-one guidance to students with varying levels of coding experience, helping them progress through the bootcamp curriculum.",
    ],

    retweets: 2,
    favorites: 4,
  },
  {
    id: 2,
    pfp: "./memoji4.png",
    name: "Daniel Perez",
    username: "dxnieldev",
    date: "February 2024 - Present",
    role: "Freelance Web Developer, Bullies BBQ",
    location: "Remote",
    url: "https://www.bulliesbbq.restaurant/",
    description: [
      "Redesigned and rebuilt restaurant website using modern design principles and user experience techniques.",
      "Incorporated existing online ordering system for delivery and pickup, increasing customer convenience and sales.",
      "Collaborated with a team of developers to brainstorm ideas and implement creative solutions.",
    ],

    retweets: 3,
    favorites: 7,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Daniel Perez",
    username: "dxnieldev",
    date: "February 12, 2024",
    pfp: "/memoji4.png",
    images: [
      "/portfolio-1.png",
      "/portfolio-2.png",
      "/portfolio-3.png",
      "/portfolio-4.png",
    ],
    title: "Personal Portfolio - Front End",
    link: "https://www.danielperez.io/",
    code: "https://github.com/Daniel-PerezF/portfolio",
    description: [
      "Developed and deployed a personal website using React, TypeScript, and Tailwind.",
      "Deployed on GitHub Pages with a custom domain, ensuring global accessibility for a professional online presence.",
      "Applied responsive design principles, ensuring an intuitive and visually pleasing user interface across various devices.",
    ],
    retweets: 4,
    favorites: 8,
  },
  {
    id: 2,
    name: "Daniel Perez",
    username: "dxnieldev",
    date: "January 17, 2024",
    pfp: "/memoji4.png",
    images: [
      "/chatgptstyler-1.png",
      "/chatgptstyler-3.png",
      "/chatgptstyler-2.png",
      "/chatgptstyler-4.png",
    ],
    title: "ChatGPT Styler Extension",
    link: "https://chromewebstore.google.com/detail/chatgpt-styler/mmfefeellkogplnodhfnggcpkomlaapj",
    code: "https://github.com/joseph-w-valdez/chatGPTStyler",
    description: [
      "This extension was built to enhance ChatGPT's functionality by allowing users to use a GUI to edit ChatGPT's UI in real time",
      "Enhances usability with colored messages, customizable widths, bubble colors, text colors, corner rounding, padding, and a 'scroll-to-top' button",
    ],

    retweets: 5,
    favorites: 9,
  },

  {
    id: 3,
    name: "Daniel Perez",
    username: "dxnieldev",
    date: "January 12, 2024",
    pfp: "/memoji4.png",
    images: [
      "/ghibli-wiki-1.png",
      "/ghibli-wiki-2.png",
      "/ghibli-wiki-3.png",
      "/ghibli-wiki-4.png",
    ],
    title: "Studio Ghibli Wiki - Front End",
    link: "https://daniel-perezf.github.io/ghibli-wiki/",
    code: "https://github.com/Daniel-PerezF/ghibli-wiki",
    description: [
      "Utilized React, TypeScript, Tailwind and GH-Pages to build a responsive and intuitive front-end design.",
      "Engineered a display of Studio Ghibli films from a public API and implemented Fetch to display results.",
      "Designed sitemap using Figma's wireframing tools and utilized LocalStorage to store and retrieve data from previous sessions.",
    ],

    retweets: 2,
    favorites: 8,
  },
  {
    id: 4,
    name: "Daniel Perez",
    username: "dxnieldev",
    date: "November 22, 2023",
    pfp: "/memoji4.png",
    images: [
      "/spin-trade-1.png",
      "/spin-trade-2.png",
      "/spin-trade-3.png",
      "/spin-trade-4.png",
    ],
    title: "Spin Trade Marketplace - Full Stack",
    link: "http://recordmarketplace-dev.us-west-1.elasticbeanstalk.com/",
    code: "https://github.com/Daniel-PerezF/RecordMarketplace",
    description: [
      "Utilized React, TypeScript, Tailwind, Node.js, Express, PostgreSQL and AWS to build a full stack web application.",
      "Engineered and implemented the application from concept to deployment on AWS Elastic Beanstalk.",
      "Designed and integrated authorization mechanisms to control user access based on roles and permissions.",
    ],

    retweets: 4,
    favorites: 6,
  },
];

export const tabs: Tab[] = [
  { id: "About", label: "About", component: About },
  { id: "Experience", label: "Experience", component: Experience },
  { id: "Projects", label: "Projects", component: Projects },
  { id: "Tech", label: "Tech", component: Tech },
];

export const linkData: LinksProps[] = [
  {
    id: 1,
    name: "Website",
    url: "https://www.danielperez.io",
    icon: MdComputer,
    copy: "https://www.danielperez.io",
  },
  {
    id: 2,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/daniel-f-perez/",
    icon: FaLinkedin,
    copy: "https://www.linkedin.com/in/daniel-f-perez/",
  },
  {
    id: 3,
    name: "Github",
    url: "https://github.com/Daniel-PerezF",
    icon: FaGithub,
    copy: "https://github.com/Daniel-PerezF",
  },
  {
    id: 4,
    name: "Twitter / X",
    url: "https://twitter.com/dxnieldev",
    icon: FaXTwitter,
    copy: "https://twitter.com/dxnieldev",
  },
  {
    id: 5,
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~0197e7841f4119af0c",
    icon: SiUpwork,
    copy: "https://www.upwork.com/freelancers/~0197e7841f4119af0c",
  },
  {
    id: 6,
    name: "Email",
    url: "mailto:danielperezf98@gmail.com",
    icon: MdOutlineMailOutline,
    copy: "danielperezf98@gmail.com",
  },
  {
    id: 7,
    name: "Resume",
    url: "/resume.pdf",
    icon: BsFillSuitcaseLgFill,
    copy: "",
  },
];
