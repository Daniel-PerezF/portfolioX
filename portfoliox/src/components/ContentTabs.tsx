import { useState } from "react";

import { useDarkMode } from "../context/useDarkMode";
import { About, Experience, Projects, Tech } from ".";

export function ContentTabs() {
  const [activeTab, setActiveTab] = useState("About");
  const { darkMode } = useDarkMode();

  return (
    <div>
      <div className="flex flex-row justify-evenly mt-2 gap-4">
        {" "}
        <div
          className={`${
            darkMode ? "hover:bg-gray-700" : "hover:bg-lighter"
          } w-full flex justify-center cursor-pointer p-2 ${
            activeTab === "About"
              ? darkMode
                ? "bg-gray-700 "
                : "bg-lighter "
              : ""
          }`}
          onClick={() => setActiveTab("About")}
        >
          <h3>About</h3>
        </div>
        <div
          className={`${
            darkMode ? "hover:bg-gray-700" : "hover:bg-lighter"
          } w-full flex justify-center cursor-pointer p-2 ${
            activeTab === "Experience"
              ? darkMode
                ? "bg-gray-700 "
                : "bg-lighter "
              : ""
          }`}
          onClick={() => setActiveTab("Experience")}
        >
          <h3>Experience</h3>
        </div>
        <div
          className={`${
            darkMode ? "hover:bg-gray-700" : "hover:bg-lighter"
          } w-full flex justify-center cursor-pointer p-2 ${
            activeTab === "Projects"
              ? darkMode
                ? "bg-gray-700 "
                : "bg-lighter "
              : ""
          }`}
          onClick={() => setActiveTab("Projects")}
        >
          <h3
            className={`${
              activeTab === "Projects"
                ? "underline underline-4 underline-offset-4 decoration-red-700"
                : ""
            }`}
          >
            Projects
          </h3>
        </div>
        <div
          className={`${
            darkMode ? "hover:bg-gray-700" : "hover:bg-lighter"
          } w-full flex justify-center cursor-pointer p-2 ${
            activeTab === "Tech"
              ? darkMode
                ? "bg-gray-700 "
                : "bg-lighter "
              : ""
          }`}
          onClick={() => setActiveTab("Tech")}
        >
          <h3>Tech</h3>
        </div>
      </div>
      <div>
        {" "}
        <hr className="text-white my-2 mx-1 md:mx-0" />
      </div>
      <div>
        {activeTab === "About" && <About />}
        {activeTab === "Experience" && <Experience />}
        {activeTab === "Projects" && <Projects />}
        {activeTab === "Tech" && <Tech />}
      </div>
    </div>
  );
}
