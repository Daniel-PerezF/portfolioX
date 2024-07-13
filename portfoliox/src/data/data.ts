import { Experiences, LinksProps, Project, Service, Tab } from ".";

import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Tech } from "../components/Tech";
import {
  MdComputer,
  FaLinkedin,
  FaGithub,
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
    date: "May 2024 - Present",
    role: "Junior Front End Developer, Bentkey Ventures",
    location: "Remote",
    description: [
      "Assisted in the development of responsive web applications using HTML, CSS, JavaScript/TypeScript and React under the guidance of senior developers.",
      "Contributed to the implementation of UI designs and features, gaining hands-on experience in front-end development best practices.",
      "Researched and recommended technologies and tools to meet project requirements based on design specifications and features.",
    ],
    retweets: 4,
    favorites: 8,
  },
  {
    id: 2,
    pfp: "./memoji4.png",
    name: "Daniel Perez",
    username: "dxnieldev",
    date: "March 2024 - May 2024",
    role: "Teaching Assistant, LearningFuze",
    location: "Irvine, CA",
    description: [
      "Supported students in comprehending application solutions, emphasizing key technologies such as HTML, CSS, JavaScript, TypeScript, React, and PostgreSQL.",
      "Assisted students in troubleshooting coding errors, utilizing research, documentation, and code reviews to find solutions.",
      "Collaborated with instructors to enhance curriculum and improve student performance.",
    ],

    retweets: 2,
    favorites: 4,
  },
  {
    id: 3,
    pfp: "./memoji4.png",
    name: "Daniel Perez",
    username: "dxnieldev",
    date: "February 2024 - Present",
    role: "Freelance Web Developer",
    location: "Remote",
    description: [
      "Designed and developed websites using modern design principles and user experience techniques, incorporating technologies like React/Next.js, MongoDB, Tailwind CSS, etc.",
      "Incorporated existing online ordering system for delivery and pickup, increasing customer convenience and sales.",
      "Collaborated with clients and teams to brainstorm ideas and deliver creative solutions.",
      "Managed multiple projects simultaneously, ensuring timely delivery and client satisfaction.",
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
    date: "July 11, 2024",
    pfp: "/memoji4.png",
    images: [
      "/onedev-1.png",
      "/onedev-2.png",
      "/onedev-3.png",
      "/onedev-4.png",
    ],
    title: "ONEDEV Freelance Business - Front End",
    link: "https://www.onewebdev.io/",

    description: [
      "Developed and deployed my freelance website using React, TypeScript, and Tailwind.",
      "Deployed on Vercel with a custom domain, ensuring global accessibility for a professional online presence.",
      "Applied responsive design principles, ensuring an intuitive and visually pleasing user interface across various devices.",
    ],
    retweets: 4,
    favorites: 8,
  },
  {
    id: 2,
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
    id: 3,
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
    title: "ChatGPT Styler - Extension",
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
    id: 4,
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
    id: 5,
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

export const services: Service[] = [
  {
    id: 1,
    pfp: "./memoji4.png",
    name: "Daniel Perez",
    username: "dxnieldev",
    date: "February 2024 - Present",
    title: "Basic Website Package",
    description: [
      "A simple yet professional website with up to 3 pages.",
      "Responsive design to ensure compatibility with all devices.",
      "Basic SEO optimization to help improve search engine ranking.",
      "Integration of social media links.",
      "Contact form for easy communication.",
    ],
    images: ["/wip.jpg", "/wip.jpg", "/wip.jpg", "/wip.jpg"],
    retweets: 5,
    favorites: 10,
  },
  {
    id: 2,
    pfp: "./memoji4.png",
    name: "Daniel Perez",

    username: "dxnieldev",
    date: "February 2024 - Present",
    title: "Standard Website Package",
    description: [
      "Everything in the Basic Website Package.",
      "Up to 6 pages.",
      "Advanced SEO optimization.",
      "Content management system (CMS) integration for easy content updates.",
      "Basic e-commerce functionality.",
    ],
    images: ["/wip.jpg", "/wip.jpg", "/wip.jpg", "/wip.jpg"],
    retweets: 7,
    favorites: 15,
  },
  {
    id: 3,
    pfp: "./memoji4.png",
    name: "Daniel Perez",
    username: "dxnieldev",
    date: "February 2024 - Present",
    title: "Premium Website Package",
    description: [
      "Everything in the Standard Website Package.",
      "Unlimited pages.",
      "Advanced e-commerce functionality with payment gateway integration.",
      "Custom web applications tailored to business needs.",
      "Ongoing maintenance and support.",
    ],
    images: ["/wip.jpg", "/wip.jpg", "/wip.jpg", "/wip.jpg"],
    retweets: 10,
    favorites: 20,
  },
  {
    id: 4,
    pfp: "./memoji4.png",
    name: "Daniel Perez",
    username: "dxnieldev",
    date: "February 2024 - Present",
    title: "Custom Website Development",
    description: [
      "Tailored web development solutions based on specific business requirements.",
      "Custom UI/UX design to enhance user experience.",
      "Integration with third-party services and APIs.",
      "Performance optimization for faster load times.",
      "Dedicated support and maintenance.",
    ],
    images: ["/wip.jpg", "/wip.jpg", "/wip.jpg", "/wip.jpg"],
    retweets: 12,
    favorites: 25,
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
    name: "Email",
    url: "mailto:danielperezf98@gmail.com",
    icon: MdOutlineMailOutline,
    copy: "danielperezf98@gmail.com",
  },
  {
    id: 6,
    name: "Resume",
    url: "/resume-24.pdf",
    icon: BsFillSuitcaseLgFill,
    copy: "",
  },
];
