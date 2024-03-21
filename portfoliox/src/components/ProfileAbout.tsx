import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { HiMiniCake } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/useDarkMode";
import { useRef, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import ConfettiExplosion from "react-confetti-explosion";

export function ProfileAbout() {
  const { darkMode } = useDarkMode();
  const [confettiActive, setConfettiActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [following, setFollowing] = useState(() => {
    const savedFollowing = localStorage.getItem("following");
    return savedFollowing ? JSON.parse(savedFollowing) : {};
  });
  const [followers, setFollowers] = useState(() => {
    const savedFollowers = localStorage.getItem("followers");
    return savedFollowers ? JSON.parse(savedFollowers) : "443"; // Initial follower count as string
  });

  const toggleFollow = () => {
    setFollowing((prevState: boolean) => !prevState);
    const newFollowers = following ? "444" : "443";
    setFollowers(newFollowers);
    localStorage.setItem("following", JSON.stringify(!following));
    localStorage.setItem("followers", JSON.stringify(newFollowers));
    if (following) {
      setTimeout(() => setConfettiActive(true), 400);
    }
  };
  const getButtonPosition = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const offset = 40;
      return { top: buttonRect.top, left: buttonRect.left + offset };
    }
    return { top: 0, left: 0 };
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Follow button */}
      <div className="flex justify-end py-4 gap-4 relative">
        <div
          className={`text-2xl self-center ring-1 rounded-full p-1 cursor-pointer duration-150 ease-in-out hover:bg-white hover:bg-opacity-15 ${
            darkMode ? "ring-white" : "ring-black"
          } `}
        >
          <MdOutlineMailOutline />
        </div>

        <button
          ref={buttonRef}
          onClick={() => {
            toggleFollow();
            console.log("follow", following);
          }}
          className={` ${
            following ? "bg-pop" : "bg-purple-400"
          } px-4 py-2 rounded-full text-white mr-4  hover:scale-105 duration-150 ease-in-out cursor-pointer`}
        >
          {following ? "Follow" : "Following"}
        </button>
      </div>
      {confettiActive && (
        <ConfettiExplosion
          force={0.05}
          duration={2200}
          particleCount={30}
          width={200}
          colors={["#FB904D", "#c084fc", "#ffff", "#60a5fa"]}
          onComplete={() => setConfettiActive(false)}
          style={{
            position: "absolute",
            top: getButtonPosition().top,
            left: getButtonPosition().left,
          }}
        />
      )}
      <div className="px-4">
        <div className="text-2xl font-bold flex items-center gap-2">
          <h3>Daniel Perez</h3>
          <RiVerifiedBadgeFill className="text-blue-400" />
        </div>
        <div
          className={` pb-4 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          } font-light `}
        >
          @danielperez
        </div>
        <div>Having fun and expressing creativity through code!</div>
        <div className="">
          Full Stack Software Engineer. Creative. Problem-Solver. Code Writer.
        </div>

        {/* Icons */}
        <div
          className={`flex flex-wrap gap-x-4 gap-y-1 pt-2 font-light ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <div className="flex gap-1">
            <BsFillSuitcaseLgFill className="self-center " />
            Open to Work
          </div>
          <div className="flex gap-1">
            <IoLocation className="self-center " />
            Orange County, CA
          </div>
          <div className="flex gap-1">
            <FaLink className="self-center" />
            <Link className="text-purple-400" to="/LinksPage">
              /links
            </Link>
          </div>
          <div className="flex gap-1">
            <HiMiniCake className="self-center " />
            October 21st
          </div>
          <div className="flex gap-1">
            <IoCalendarOutline className="self-center " />
            Joined March 2024
          </div>
        </div>

        <div className="flex w-[200px] justify-between pt-2">
          <div className="flex justify-between w-[35%]">
            <h3 className="mr-1">111</h3>
            <h3
              className={`text-md font-light ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Following
            </h3>
          </div>
          <div className="flex justify-between w-[35%]">
            <h3 className="mr-1 ">{followers}</h3>
            <h3
              className={`text-md font-light ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Followers
            </h3>
          </div>
        </div>
        <div className="flex relative ml-3 mb-4">
          <div className="left-[-14px] absolute rounded-full h-8 w-8 object-cover bg-white mt-3 mr-2 overflow-hidden">
            <img src="/x-logo.jpeg" alt="" className="" />
          </div>
          <div className="rounded-full h-8 w-8 object-cover bg-white mt-3 mr-2  overflow-hidden ">
            <img src="/jre.jpeg" alt="" className="" />
          </div>
          <h3
            className={`font-light text-[0.77rem] self-start pt-4 pb-5 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Followed by Elon Musk and Joe Rogan
          </h3>
        </div>
      </div>
    </div>
  );
}
