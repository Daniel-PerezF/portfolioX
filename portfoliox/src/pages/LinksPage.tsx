import { useDarkMode } from "../context/useDarkMode";

export default function LinksPage() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`flex justify-center w-full h-screen ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      links
    </div>
  );
}
