import { useEffect } from "react";
import { Banner, Links, Nav } from "../components";
import { useDarkMode } from "../context/useDarkMode";
import { FaArrowLeft } from "react-icons/fa";

export default function LinksPage() {
  const { darkMode } = useDarkMode();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={`h-screen ${darkMode ? "bg-dark" : "bg-light"}`}>
        <div className="sticky top-0 z-30">
          <Nav />
        </div>
        <div
          className={`flex justify-center w-full ${
            darkMode ? "bg-dark" : "bg-light"
          }`}
        >
          <div
            className={`flex flex-col items-center ${
              darkMode ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            <div className="relative flex items-center flex-col w-full">
              <div className="max-w-[820px] w-full">
                <Banner
                  darkModeImage="https://i.pinimg.com/originals/49/29/57/4929571ca9465e280f1fa7e9bd7772aa.gif"
                  lightModeImage="https://i.pinimg.com/originals/49/29/57/4929571ca9465e280f1fa7e9bd7772aa.gif"
                />
              </div>
              <div className="">
                <a href="/" className="py-2 absolute left-[1%]">
                  <FaArrowLeft
                    className={`text-xl hover:scale-110 duration-150 ease-in-out ${
                      darkMode ? "text-light" : "text-dark"
                    }`}
                  />
                </a>
                <div className="max-w-[750px]">
                  <Links />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
