import { useDarkMode } from "../context/useDarkMode";
import {
  Banner,
  ContentTabs,
  Nav,
  ProfileAbout,
  ProfilePic,
} from "../components/index";

export default function LandingPage() {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${darkMode ? "bg-dark" : "bg-light"}`}>
      <div className="sticky top-0 z-50">
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
          <div className="relative">
            <div className="absolute top-2/3 lg:top-[13rem] left-0 lg:left-[2.18rem] z-30 ">
              <ProfilePic />
            </div>
            <div className="max-w-[820px] w-full z-60">
              <Banner />
            </div>
          </div>
          <div className="max-w-[750px] w-full">
            <ProfileAbout />
            <div>
              <ContentTabs />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="/orange-icon.png" className="fixed z-[-1]" />
      </div>
    </div>
  );
}
