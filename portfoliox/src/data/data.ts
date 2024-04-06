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
 
} from "../icons/icons";

export const experiences: Experiences[] = [
  {
    id: 1,
    pfp: "./memoji.PNG",
    name: "Daniel Perez",
    username: "danielperez",
    date: "March 2024 - Present",
    role: "Teaching Assistant, Learning Fuze",
    location: "Irvine, CA",
    description: [
      "Cultivated collaborative learning, ensuring students grasp coding concepts through personalized support.",
      "Effectively communicated coding principles to enhance student comprehension and learning.",
      "Maintained records of student interactions and progress, enabling tailored support and tracking of learning outcomes.",
    ],

    retweets: 2,
    favorites: 4,
  },
  {
    id: 2,
    pfp: "./memoji.PNG",
    name: "Daniel Perez",
    username: "danielperez",
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
    username: "danielperez",
    date: "February 12, 2024",
    pfp: "/memoji.PNG",
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
    username: "danielperez",
    date: "November 22, 2023",
    pfp: "/memoji.PNG",
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
  {
    id: 3,
    name: "Daniel Perez",
    username: "danielperez",
    date: "January 17, 2024",
    pfp: "/memoji.PNG",
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
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~0197e7841f4119af0c",
    icon: SiUpwork,
    copy: "https://www.upwork.com/freelancers/~0197e7841f4119af0c",
  },
  {
    id: 5,
    name: "Email",
    url: "mailto:danielperezf98@gmail.com",
    icon: MdOutlineMailOutline,
    copy: "danielperezf98@gmail.com",
  },
  {
    id: 6,
    name: "Resume",
    url: "/daniel-perez-resume.pdf",
    icon: BsFillSuitcaseLgFill,
    copy: "",
  },
];
