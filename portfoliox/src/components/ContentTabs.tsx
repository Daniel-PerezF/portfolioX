import { useState, useEffect } from "react";
import { useDarkMode } from "../context/useDarkMode";
import { tabs, Tab } from "../data";
import { useSwipeable } from "react-swipeable"; // import the swipeable hook

export function ContentTabs() {
  const [activeTab, setActiveTab] = useState(() => {
    return sessionStorage.getItem("activeTab") || "About";
  });
  const { darkMode } = useDarkMode();

  useEffect(() => {
    sessionStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const handleSwipe = (direction: string) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    if (direction === "left" && currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    } else if (direction === "right" && currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    trackMouse: true, // keep this to allow mouse swipe events for testing on desktops
  });

  return (
    <div {...handlers}>
      <div className="grid grid-cols-4 mt-5 gap-4 mx-2">
        {tabs.map((tab: Tab) => (
          <div
            key={tab.id}
            className={`rounded-lg ${
              darkMode ? "hover:bg-[#37363c]" : "hover:bg-lighter"
            } w-full flex justify-center cursor-pointer p-2 duration-200 ease-in-out transition-all ${
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
