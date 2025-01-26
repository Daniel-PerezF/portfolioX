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
import TsParticles from "../components/Particles";

export default function Home() {
  const { darkMode } = useDarkMode();
  const { showLinks } = useLinksContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showLinks) {
      const initialOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = initialOverflow;
      };
    }
  }, [showLinks]);

  return (
    <>
      <div
        className={`${darkMode ? "bg-dark" : "bg-light"} min-h-screen relative`}
      >
        <div className="fixed ">
          <TsParticles />
        </div>
        <div className="relative z-10">
          <div className="sticky top-0 z-30">
            <Nav />
          </div>
          <div
            className={`flex justify-center w-full ${
              darkMode ? "bg-dark/0" : "bg-light/0"
            }`}
          >
            <div
              className={`flex flex-col items-center ${
                darkMode ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              <div className="max-w-[950px] w-full relative aspect-[3/1]">
                <div className="overflow-y-hidden aspect-[3/1] max-w-[950px]">
                  <Banner
                    darkModeImage="/dark-mode-banner.gif"
                    lightModeImage="/light-mode-banner.gif"
                  />
                </div>

                <div className="absolute bottom-[-4rem] sm:left-0 left-0 md:left-[2rem] z-10">
                  <ProfilePic src="/me-memoji.png" alt="my memoji" />
                </div>
              </div>
              <div className="max-w-[890px] w-full">
                <ProfileAbout />
                <ContentTabs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
