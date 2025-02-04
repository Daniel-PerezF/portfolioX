import { useDarkMode } from "../context/useDarkMode";
import { FaGithub, FaLinkedin, SiMinutemailer } from "../icons/icons";

export function Footer() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`w-full pt-20 flex-col gap-4 select-none ${
        darkMode ? "bg-dark" : "bg-light"
      } flex items-center h-[200px]`}
    >
      <div
        className={`${
          darkMode ? "text-light" : "text-gray-500"
        } flex justify-center gap-4 text-2xl`}
      >
        <a
          aria-label="Links to Daniel Perez linkedin"
          href="https://www.linkedin.com/in/daniel-f-perez/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 duration-300 ease-in-out cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          aria-label="Links to Daniel Perez's GitHub"
          href="https://github.com/dxnielperez"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 duration-300 ease-in-out cursor-pointer"
        >
          <FaGithub />
        </a>
        <a
          aria-label="Opens email to Daniel Perez's email at danielperezf98@gmail.com"
          href="mailto:danielperezf98@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 duration-300 ease-in-out cursor-pointer"
        >
          <SiMinutemailer />
        </a>
      </div>
      <span
        className={` ${
          darkMode ? "text-gray-300" : "text-gray-500"
        } font-light text-xs bg-[#ADAAB1]/10 p-2 rounded-md backdrop-blur-md `}
      >
        dxniel © 2025
      </span>
    </div>
  );
}
