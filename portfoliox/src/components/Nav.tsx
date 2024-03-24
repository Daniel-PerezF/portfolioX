import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "../context/useDarkMode";
import { Link } from "react-router-dom";

export function Nav() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`flex w-full justify-between items-center px-4 py-2 transition duration-300 
       backdrop-blur-sm
     ${darkMode ? "bg-dark/75" : "bg-light/45"}`}
    >
      <Link to="/">
        <img
          src="/orange-icon.png"
          alt=""
          className="w-1/5 hover:scale-105 duration-150 ease-in-out cursor-pointer"
        />
      </Link>

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
