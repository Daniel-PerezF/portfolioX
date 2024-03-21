import { Nav } from "../components";
import { useDarkMode } from "../context/useDarkMode";

export default function LinksPage() {
  const { darkMode } = useDarkMode();
  return (
    <>
      <div className={`${darkMode ? "bg-dark" : "bg-light"} h-screen`}>
        <div className="sticky top-0 z-50">
          <Nav />
        </div>
        <div
          className={`flex justify-center w-full ${
            darkMode ? "bg-dark" : "bg-light"
          }`}
        ></div>
      </div>
    </>
  );
}
