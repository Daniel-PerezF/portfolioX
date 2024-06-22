import { useState, useEffect } from "react";
import { useDarkMode } from "../context/useDarkMode";
import { tabs, Tab } from "../data";
import { motion } from "framer-motion";
import { MdExpandLess, MdExpandMore } from "../icons/icons";

export function ContentTabs() {
  const [activeTab, setActiveTab] = useState(() => {
    return sessionStorage.getItem("activeTab") || "About";
  });
  const [expanded, setExpanded] = useState(false);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    sessionStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const visibleTabs = expanded ? tabs : tabs.slice(0, 4);

  return (
    <div>
      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : "70px" }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-4 mt-5 gap-4 mx-2">
          {visibleTabs.map((tab: Tab) => (
            <div
              key={tab.id}
              className={`rounded-lg ${
                darkMode ? "hover:bg-[#37363c]" : "hover:bg-lighter"
              } w-full flex justify-center cursor-pointer p-2 ${
                activeTab === tab.id
                  ? darkMode
                    ? "bg-[#37363c]"
                    : "bg-[#e5e5e5]"
                  : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <h3 className={`${activeTab === tab.id ? "" : ""}`}>
                {tab.label}
              </h3>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="flex justify-center ">
        <button
          onClick={handleExpand}
          className="px-4 py-2 cursor-pointer hover:scale-125 ease-in-out duration-300"
        >
          {expanded ? (
            <MdExpandLess className="size-6" />
          ) : (
            <MdExpandMore className="size-6" />
          )}
        </button>
      </div>
      <div>
        <hr className="text-white my-1 mx-1 md:mx-0" />
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
