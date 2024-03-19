import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "../context/useDarkMode";
import { Link } from "react-router-dom";

export function Nav() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={`flex w-full justify-between items-center ${
        darkMode ? "bg-dark" : "bg-light"
      } px-4 pt-2`}
    >
      <Link to="/">
        <img src="/orange-icon.png" alt="" className="w-1/4" />
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
