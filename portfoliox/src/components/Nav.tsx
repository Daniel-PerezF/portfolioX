import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "../context/useDarkMode";

export function Nav() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`flex w-full justify-between items-center px-4 py-2 transition duration-300 
       backdrop-blur-md
     ${darkMode ? "bg-dark/75" : "bg-light/45"}`}
    >
      <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img
          src="/orange-icon.png"
          alt="my logo"
          className="w-1/5 hover:scale-105 duration-200 ease-in-out cursor-pointer"
        />
      </div>

      <DarkModeSwitch
        checked={darkMode}
        onChange={toggleDarkMode}
        moonColor="white"
        sunColor="orange"
        size={30}
      />
    </div>
  );
}
