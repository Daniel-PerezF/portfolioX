import { useDarkMode } from "../context/useDarkMode";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGithub,
  // FaFigma,
  FaDocker,
  FaNpm,
  FaSlack,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import {
  SiExpress,
  SiJira,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql, BiLogoVisualStudio } from "react-icons/bi";
import { IoMdGitMerge } from "react-icons/io";

export function Tech() {
  const { darkMode } = useDarkMode();

  const cards = [
    {
      name: "Daniel Perez",
      username: "@dxnieldev",
      date: "August 19, 2023",
      message: "Frontend Technologies:",
      tech: [
        {
          name: "HTML",
          icon: <FaHtml5 className="text-[#E44D26] text-6xl md:text-7xl" />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt className="text-[#1572B6] text-6xl md:text-7xl" />,
        },
        {
          name: "Tailwind CSS",
          icon: (
            <SiTailwindcss className="text-[#38BDF8] text-6xl md:text-7xl" />
          ),
        },
        {
          name: "JavaScript",
          icon: (
            <IoLogoJavascript className="text-[#F7DF1E] text-6xl md:text-7xl" />
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <SiTypescript className="text-[#3178C6] text-6xl md:text-7xl" />
          ),
        },
        {
          name: "React",
          icon: <FaReact className="text-[#61DAFB] text-6xl md:text-7xl" />,
        },
        {
          name: "Next.js",
          icon: (
            <TbBrandNextjs className="text-[#000000] text-6xl md:text-7xl" />
          ),
        },
      ],
    },
    {
      name: "Daniel Perez",
      username: "@dxnieldev",
      date: "August 5, 2023",
      message: "Backend Technologies:",
      tech: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-[#8CC84B] text-6xl md:text-7xl" />,
        },
        {
          name: "Express",
          icon: <SiExpress className="text-[#000000] text-6xl md:text-7xl" />,
        },
        {
          name: "PostgreSQL",
          icon: (
            <BiLogoPostgresql className="text-[#336791] text-6xl md:text-7xl" />
          ),
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-[#47A248] text-6xl md:text-7xl" />,
        },
      ],
    },
    {
      name: "Daniel Perez",
      username: "@dxnieldev",
      date: "August 3, 2023",
      message: "Deployment and DevOps:",
      tech: [
        {
          name: "AWS",
          icon: <FaAws className="text-[#FF9900] text-6xl md:text-7xl" />,
        },
        {
          name: "Vercel",
          icon: (
            <IoLogoVercel className="text-[#000000] text-6xl md:text-7xl" />
          ),
        },
        {
          name: "Docker",
          icon: <FaDocker className="text-[#2496ED] text-6xl md:text-7xl" />,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-[#181717] text-6xl md:text-7xl" />,
        },
      ],
    },
    {
      name: "Daniel Perez",
      username: "@dxnieldev",
      date: "August 3, 2023",
      message: "Tools and Collaboration:",
      tech: [
        {
          name: "VS Code",
          icon: (
            <BiLogoVisualStudio className="text-[#007ACC] text-6xl md:text-7xl" />
          ),
        },
        {
          name: "Git",
          icon: (
            <IoMdGitMerge className="text-[#F1502F] text-6xl md:text-7xl" />
          ),
        },
        {
          name: "NPM",
          icon: <FaNpm className="text-[#CB3837] text-6xl md:text-7xl" />,
        },
        {
          name: "Slack",
          icon: <FaSlack className="text-[#4A154B] text-6xl md:text-7xl" />,
        },
        {
          name: "Jira",
          icon: <SiJira className="text-[#0052CC] text-6xl md:text-7xl" />,
        },
      ],
    },
  ];

  return (
    <div className="h-full w-screen max-w-[890px]">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`pb-2 md:p-4 mb-4 mx-2 md:mx-0 rounded-lg ${
            darkMode
              ? "hover:bg-[#37363c] bg-[#303034] duration-300 ease-in-out"
              : "hover:bg-[#e5e5e5] bg-[#eeeeee] duration-300 ease-in-out"
          }`}
        >
          <div className="w-full flex justify-center">
            <div className="flex justify-center w-11/12 flex-col">
              <div className={`rounded-2xl `}>
                <div className="pt-4 w-full">
                  <div className="font-bold">{card.message}</div>
                  <br />
                  <div className="flex flex-wrap items-center gap-4">
                    {card.tech.map((techItem, idx) => (
                      <div key={idx} className="flex flex-col">
                        <div className="mx-auto w-full flex flex-col">
                          <div className="mx-auto"> {techItem.icon}</div>
                          <p className="text-center mt-2">{techItem.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
