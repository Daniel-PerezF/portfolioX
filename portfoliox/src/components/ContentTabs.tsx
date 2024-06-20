import { useState, useEffect } from "react";
import { useDarkMode } from "../context/useDarkMode";
import { tabs, Tab } from "../data";

export function ContentTabs() {
  const [activeTab, setActiveTab] = useState(() => {
    return sessionStorage.getItem("activeTab") || "About";
  });
  const { darkMode } = useDarkMode();

  useEffect(() => {
    sessionStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div>
      <div className="flex flex-row justify-evenly mt-5 gap-4 mx-2">
        {tabs.map((tab: Tab) => (
          <div
            key={tab.id}
            className={`rounded-lg  ${
              darkMode ? "hover:bg-[#37363c]" : "hover:bg-lighter"
            } w-full flex justify-center cursor-pointer p-2 ${
              activeTab === tab.id
                ? darkMode
                  ? "bg-[#37363c]"
                  : "bg-[#e5e5e5] "
                : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <h3 className={`${activeTab === tab.id ? "" : ""}`}>{tab.label}</h3>
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
