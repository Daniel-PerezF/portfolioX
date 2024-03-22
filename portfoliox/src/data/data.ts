import { Project } from ".";
import { About } from "../components/About"; // Assuming these are your component files
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Tech } from "../components/Tech";

export const experiences = [
  {
    image: "./memoji.PNG",
    name: "Daniel Perez",
    username: "danielperez",
    date: "March 2024 - Present",
    role: "Teaching Assistant, Learning Fuze",
    location: "Irvine, CA",
    description: [
      "Assisted students with debugging and troubleshooting coding problems.",
      "Maintained a record of student interactions and how I assisted them.",
      "Regularly communicated with student instructors to ensure they were aware of the substance of discussions, enabling them to address any misunderstandings or areas needing clarification in the materials.",
    ],
    comments: "2.1K",
    retweets: "2.8K",
    likes: "7.4K",
    stats: "77K",
  },
  {
    image: "./memoji.PNG",
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
    retweets: "3.7K",
    likes: "8.3K",
    stats: "63K",
  },
];

export const projects: Project[] = [
  {
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
      "•Deployed on GitHub Pages with a custom domain, ensuring global accessibility for a professional online presence.",
      "•Applied responsive design principles, ensuring an intuitive and visually pleasing user interface across various devices.",
    ],
    comments: "2.2K",
    retweets: "3.9K",
    likes: "5.2K",
    stats: "72K",
  },
  {
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
    retweets: "2.8K",
    likes: "3.4K",
    stats: "53K",
  },
  {
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
    retweets: "2.1K",
    likes: "3.4K",
    stats: "58K",
  },
];

export const tabs = [
  { id: "About", label: "About", component: About },
  { id: "Experience", label: "Experience", component: Experience },
  { id: "Projects", label: "Projects", component: Projects },
  { id: "Tech", label: "Tech", component: Tech },
];
