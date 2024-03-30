import { useDarkMode } from "../context/useDarkMode";
import {
  Banner,
  ContentTabs,
  Nav,
  ProfileAbout,
  ProfilePic,
} from "../components/index";
import { useEffect } from "react";
import { useLinksContext } from "../context/LinksContext";

export default function LandingPage() {
  const { darkMode } = useDarkMode();
  const { showLinks } = useLinksContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (showLinks) {
      // Save the initial overflow value
      const initialOverflow = document.body.style.overflow;
      // Disable scrolling
      document.body.style.overflow = "hidden";
      // Restore the initial overflow value when showLinks is false
      return () => {
        document.body.style.overflow = initialOverflow;
      };
    }
  }, [showLinks]);
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
                darkModeImage="https://i.pinimg.com/originals/44/c7/c1/44c7c1f3fbd68b2151c37af5f08198f1.gif"
                lightModeImage="/banner-3.gif"
              />
            </div>

            <div className="absolute bottom-[-4rem] sm:left-0 left-0 md:left-[2rem] z-10">
              <ProfilePic src="/memoji.PNG" alt="my memoji" />
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
