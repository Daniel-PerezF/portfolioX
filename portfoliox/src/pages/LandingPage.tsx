import { useDarkMode } from "../context/useDarkMode";
import { Banner, ContentTabs, ProfileAbout } from "../components/index";

export default function LandingPage() {
  const { darkMode } = useDarkMode();
  return (
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
        <div className="max-w-[820px] w-full">
          <Banner />
        </div>
        <div className="max-w-[750px] w-full">
          <ProfileAbout />
          <div>
            <ContentTabs />
          </div>
        </div>
      </div>
    </div>
  );
}
