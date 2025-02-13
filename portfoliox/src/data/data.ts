import { Education, Experiences, Links, Project, Tab } from ".";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Tech } from "../components/Tech";
import {
  FaLinkedin,
  FaGithub,
  MdOutlineMailOutline,
  BsFillSuitcaseLgFill,
} from "../icons/icons";

export const experiences: Experiences[] = [
  {
    id: 1,
    pfp: "./memoji4.png",
    name: "Daniel Perez",
    username: "dxnieldev",
    date: "May 2024 - Present",
    role: "Associate Software Engineer",
    company: "The Daily Wire - Full Time",
    location: "Remote",
    logo: "/dw-logo.jpg",
    description: [
      "Developed a real-time election coverage site using React, TypeScript, and Tailwind CSS, collaborating with senior developers, analytics, product managers, and developers.",
      "Contributed to building the user interface for a CMS using React, Tailwind, and Axios, and assisted with backend development in Golang by creating API endpoints.",
      "Maintained and updated core website features, including event-specific homepages, to improve adaptability and engagement.",
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
    role: "Coding Bootcamp TA",
    company: "LearningFuze - Part Time",
    logo: "/lfz-logo.png",
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
    role: "Web Developer",
    company: "Self - Freelance",
    logo: "/laptop.jpg",
    location: "Remote",
    description: [
      "Designed and developed websites using modern design principles and user experience techniques, incorporating technologies like React/Next.js, MongoDB, Tailwind CSS, etc.",
      "Incorporated existing online ordering system for delivery and pickup, increasing customer convenience and sales.",
      "Collaborated with clients and teams to brainstorm ideas and deliver creative solutions.",
      // "Managed multiple projects simultaneously, ensuring timely delivery and client satisfaction.",
    ],

    retweets: 3,
    favorites: 7,
  },
];

export const projects: Project[] = [
  {
    id: 2,
    name: "Daniel Perez",
    username: "dxnieldev",
    date: "February 12, 2024",
    pfp: "/memoji4.png",
    images: [
      "/portfolio/portfolio-v2-1.png",
      "/portfolio/portfolio-v2-2.png",
      "/portfolio/portfolio-v2-3.png",
      "/portfolio/portfolio-v2-4.png",
    ],
    title: "Personal Portfolio, Front End",
    link: "/",
    code: "https://github.com/dxnielperez/portfolioX",
    description: [
      "Developed and deployed a personal website using React, TypeScript, and Tailwind.",
      "Deployed on Vercel with a custom domain, ensuring global accessibility for a professional online presence.",
      "Applied responsive design principles, ensuring an intuitive and visually pleasing user interface across various devices.",
    ],
    retweets: 4,
    favorites: 8,
  },
  {
    id: 3,
    name: "Daniel Perez",
    username: "dxnieldev",
    date: "January 12, 2024",
    pfp: "/memoji4.png",
    images: [
      "/ghibli-wiki/ghibli-wiki-1.png",
      "/ghibli-wiki/ghibli-wiki-2.png",
      "/ghibli-wiki/ghibli-wiki-3.png",
      "/ghibli-wiki/ghibli-wiki-4.png",
    ],
    title: "Studio Ghibli Wiki, Front End",
    link: "https://dxnielperez.github.io/ghibli-wiki/",
    code: "hhttps://dxnielperez.github.io/ghibli-wiki/",
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
      "/spin-trade/spin-trade-1.png",
      "/spin-trade/spin-trade-2.png",
      "/spin-trade/spin-trade-3.png",
      "/spin-trade/spin-trade-4.png",
    ],
    title: "Spin Trade Marketplace, Full Stack",
    code: "https://github.com/dxnielperez/record-marketplace",
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

export const links: Links[] = [
  {
    id: 1,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/daniel-f-perez/",
    icon: FaLinkedin,
    copy: "https://www.linkedin.com/in/daniel-f-perez/",
  },
  {
    id: 2,
    name: "Github",
    url: "https://github.com/dxnielperez",
    icon: FaGithub,
    copy: "https://github.com/dxnielperez",
  },
  {
    id: 3,
    name: "Email",
    url: "mailto:danielperezf98@gmail.com",
    icon: MdOutlineMailOutline,
    copy: "danielperezf98@gmail.com",
  },
  {
    id: 4,
    name: "Resume",
    url: "/daniel-perez-resume-2025.pdf",
    icon: BsFillSuitcaseLgFill,
    copy: "",
  },
];

export const education: Education[] = [
  {
    id: 1,
    name: "LearningFuze",
    logo: "/lfz-logo.png",
    program: "Full Immersion Web Development Program (Full Stack)",
    date: "August 2023 - January 2024",
    description: [
      "Programmed 10-12 hours/day for 18 weeks (800+ hours) in an Agile environment",
      "Participated in hackathons to build apps and improve pair programming skills.",
      "Assisted classmates with troubleshooting and debugging personal projects.",
    ],
  },
];

// export const tech = [
//   {
//     name: "Daniel Perez",
//     username: "@dxnieldev",
//     date: "August 19, 2023",
//     message: "Frontend Technologies:",
//     tech: [
//       {
//         name: "HTML",
//         icon: <FaHtml5 className="text-[#E44D26] text-6xl md:text-7xl" />,
//       },
//       {
//         name: "CSS",
//         icon: <FaCss3Alt className="text-[#1572B6] text-6xl md:text-7xl" />,
//       },
//       {
//         name: "Tailwind CSS",
//         icon: (
//           <SiTailwindcss className="text-[#38BDF8] text-6xl md:text-7xl" />
//         ),
//       },
//       {
//         name: "JavaScript",
//         icon: (
//           <IoLogoJavascript className="text-[#F7DF1E] text-6xl md:text-7xl" />
//         ),
//       },
//       {
//         name: "TypeScript",
//         icon: (
//           <SiTypescript className="text-[#3178C6] text-6xl md:text-7xl" />
//         ),
//       },
//       {
//         name: "React",
//         icon: <FaReact className="text-[#61DAFB] text-6xl md:text-7xl" />,
//       },
//       {
//         name: "Next.js",
//         icon: (
//           <TbBrandNextjs className="text-[#000000] text-6xl md:text-7xl" />
//         ),
//       },
//     ],
//   },
//   {
//     name: "Daniel Perez",
//     username: "@dxnieldev",
//     date: "August 5, 2023",
//     message: "Backend Technologies:",
//     tech: [
//       {
//         name: "Node.js",
//         icon: <FaNodeJs className="text-[#8CC84B] text-6xl md:text-7xl" />,
//       },
//       {
//         name: "Express",
//         icon: <SiExpress className="text-[#000000] text-6xl md:text-7xl" />,
//       },
//       {
//         name: "PostgreSQL",
//         icon: (
//           <BiLogoPostgresql className="text-[#336791] text-6xl md:text-7xl" />
//         ),
//       },
//       {
//         name: "MongoDB",
//         icon: <SiMongodb className="text-[#47A248] text-6xl md:text-7xl" />,
//       },
//     ],
//   },
//   {
//     name: "Daniel Perez",
//     username: "@dxnieldev",
//     date: "August 3, 2023",
//     message: "Deployment and DevOps:",
//     tech: [
//       {
//         name: "AWS",
//         icon: <FaAws className="text-[#FF9900] text-6xl md:text-7xl" />,
//       },
//       {
//         name: "Vercel",
//         icon: (
//           <IoLogoVercel className="text-[#000000] text-6xl md:text-7xl" />
//         ),
//       },
//       {
//         name: "Docker",
//         icon: <FaDocker className="text-[#2496ED] text-6xl md:text-7xl" />,
//       },
//       {
//         name: "GitHub",
//         icon: <FaGithub className="text-[#181717] text-6xl md:text-7xl" />,
//       },
//     ],
//   },
//   {
//     name: "Daniel Perez",
//     username: "@dxnieldev",
//     date: "August 3, 2023",
//     message: "Tools and Collaboration:",
//     tech: [
//       {
//         name: "VS Code",
//         icon: (
//           <BiLogoVisualStudio className="text-[#007ACC] text-6xl md:text-7xl" />
//         ),
//       },
//       {
//         name: "Git",
//         icon: (
//           <IoMdGitMerge className="text-[#F1502F] text-6xl md:text-7xl" />
//         ),
//       },
//       {
//         name: "NPM",
//         icon: <FaNpm className="text-[#CB3837] text-6xl md:text-7xl" />,
//       },
//       {
//         name: "Slack",
//         icon: <FaSlack className="text-[#4A154B] text-6xl md:text-7xl" />,
//       },
//       {
//         name: "Jira",
//         icon: <SiJira className="text-[#0052CC] text-6xl md:text-7xl" />,
//       },
//     ],
//   },
// ];
