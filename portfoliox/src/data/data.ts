import { Experiences, Links, Project, Tab } from ".";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Tech } from "../components/Tech";

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
    comments: "2.1K",
    retweets: 2,
    favorites: 4,
    stats: "77K",
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
      "Worked with the restaurant owners to gather feedback, incorporate changes, and ensure the website met their expectations.",
      "Participated in regular meetings and discussions to keep the project on track and address any challenges that arose.",
    ],
    comments: "1.2K",
    retweets: 3,
    favorites: 7,
    stats: "63K",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Daniel Perez",
    username: "danielperez",
    date: "February 2024 - Present",
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
      "Implemented dynamic and interactive elements on the website using TS Particles enhancing the user experience.",
      "Designed and integrated authorization mechanisms to control user access based on roles and permissions.",
      "Deployed on GitHub Pages with a custom domain, ensuring global accessibility for a professional online presence.",
      "Applied responsive design principles, ensuring an intuitive and visually pleasing user interface across various devices.",
    ],
    comments: "2.2K",
    retweets: 4,
    favorites: 8,
    stats: "72K",
  },
  {
    id: 2,
    name: "Daniel Perez",
    username: "danielperez",
    date: "February 2024 - Present",
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
    comments: "1.2K",
    retweets: 4,
    favorites: 6,
    stats: "53K",
  },
  {
    id: 3,
    name: "Daniel Perez",
    username: "danielperez",
    date: "February 2024 - Present",
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
    comments: "1K",
    retweets: 2,
    favorites: 8,
    stats: "58K",
  },
];

export const tabs: Tab[] = [
  { id: "About", label: "About", component: About },
  { id: "Experience", label: "Experience", component: Experience },
  { id: "Projects", label: "Projects", component: Projects },
  { id: "Tech", label: "Tech", component: Tech },
];

export const links: Links[] = [
  { id: 1, title: "Website", url: "https://danielperez.io" },
  { id: 2, title: "Email", url: "mailto:danielperezf98@gmail.com" },
  {
    id: 3,
    title: "Resume",
    url: "/daniel-perez-resume.pdf",
  },
  {
    id: 4,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/daniel-f-perez/",
  },
  { id: 5, title: "GitHub", url: "https://github.com/Daniel-PerezF" },
  {
    id: 6,
    title: "Upwork",
    url: "https://www.upwork.com/freelancers/~0197e7841f4119af0c",
  },
];
