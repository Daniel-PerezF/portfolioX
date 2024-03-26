import { useDarkMode } from "../context/useDarkMode";
import {
  Banner,
  ContentTabs,
  Nav,
  ProfileAbout,
  ProfilePic,
} from "../components/index";
import { useEffect } from "react";

export default function LandingPage() {
  const { darkMode } = useDarkMode();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`${darkMode ? "bg-dark" : "bg-light"}`}>
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
          <div className="max-w-[820px] w-full relative aspect-[3/1] ">
            <div className="overflow-y-hidden aspect-[3/1] max-w-[820px]">
              <Banner
                darkModeImage="/pixel-art-banner.gif"
                lightModeImage="https://i.pinimg.com/originals/a3/8c/48/a38c48d1568838b344245390dec26625.gif"
              />
            </div>

            <div className="absolute bottom-[-4rem] sm:left-0 left-0 md:left-[2rem] z-10">
              <ProfilePic />
            </div>
          </div>
          <div className="max-w-[750px] w-full">
            <ProfileAbout />
            <ContentTabs />
          </div>
        </div>
      </div>
    </div>
  );
}
