import { useState, useEffect } from "react";
import { useDarkMode } from "../context/useDarkMode";
import { tabs, Tab } from "../data";

export function ContentTabs() {
  const [activeTab, setActiveTab] = useState(() => {
    const urlTab = window.location.pathname.substring(1);
    return (
      urlTab.charAt(0).toUpperCase() + urlTab.slice(1) ||
      sessionStorage.getItem("activeTab") ||
      "About"
    );
  });

  const { darkMode } = useDarkMode();

  useEffect(() => {
    window.history.pushState(null, "", `/${activeTab.toLowerCase()}`);
  }, [activeTab]);

  useEffect(() => {
    const handlePopState = () => {
      const urlTab = window.location.pathname.substring(1);
      setActiveTab(urlTab.charAt(0).toUpperCase() + urlTab.slice(1) || "About");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 mt-5 gap-4 mx-2">
        {tabs.map((tab: Tab) => (
          <div
            key={tab.id}
            className={`rounded-lg ${
              darkMode ? "hover:bg-[#37363c]" : "hover:bg-lighter"
            } w-full flex justify-center cursor-pointer p-2 duration-300 ease-in-out transition-all ${
              activeTab === tab.id
                ? darkMode
                  ? "bg-[#37363c]"
                  : "bg-[#e5e5e5]"
                : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <h3>{tab.label}</h3>
          </div>
        ))}
      </div>

      <div>
        <hr className="text-white my-2 mx-1 md:mx-0" />
      </div>
      <div>
        {tabs.map((tab: Tab) => (
          <div key={tab.id} className={activeTab === tab.id ? "" : "hidden"}>
            <tab.component />
          </div>
        ))}
      </div>
    </div>
  );
}
