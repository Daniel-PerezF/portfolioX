import { useDarkMode } from "../context/useDarkMode";
import { FaGithub, FaLinkedin, MdComputer } from "../icons/icons";

export function Footer() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`w-full py-12 ${
        darkMode ? "bg-dark" : "bg-light"
      } flex justify-center items-end h-[200px]`}
    >
      <div
        className={`${
          darkMode ? "text-light" : "text-gray-500"
        } flex justify-center gap-4 text-2xl`}
      >
        <a
          href="https://www.linkedin.com/in/daniel-f-perez/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 duration-150 ease-in-out cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Daniel-PerezF"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 duration-150 ease-in-out cursor-pointer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.danielperez.io"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 duration-150 ease-in-out cursor-pointer"
        >
          {" "}
          <MdComputer />
        </a>
      </div>
    </div>
  );
}
