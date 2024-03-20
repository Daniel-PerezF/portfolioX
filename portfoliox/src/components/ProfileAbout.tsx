import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { HiMiniCake } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/useDarkMode";
import { useState } from "react";

export function ProfileAbout() {
  const { darkMode } = useDarkMode();
  // const [isFollowed, setIsFollowed] = useState(false);
  const [following, setFollowing] = useState(() => {
    const savedFollowing = localStorage.getItem("following");
    return savedFollowing ? JSON.parse(savedFollowing) : {};
  });
  const toggleFolow = () => {
    setFollowing((prevState: boolean) => !prevState);
    localStorage.setItem("following", JSON.stringify(!following));
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end py-4">
        <button
          onClick={() => {
            toggleFolow();
            console.log("follow", following);
          }}
          className={` ${
            following ? "bg-pop" : "bg-purple-400"
          } px-4 py-2 rounded-full text-white mr-4  hover:scale-105 duration-150 ease-in-out cursor-pointer`}
        >
          {following ? "Follow" : "Followed"}
        </button>
      </div>
      <div className="px-4">
        <div className="text-2xl font-bold flex items-center gap-2">
          <h3>Daniel Perez</h3>
          <RiVerifiedBadgeFill className="text-blue-400" />
        </div>
        <div
          className={`${
            darkMode ? "text-gray-400" : "text-gray-500"
          } font-light `}
        >
          @danielperez
        </div>
        <div>Expressing creativity through code!</div>
        <div className="pb-4">
          Full Stack Software Engineer. Creative. Problem-Solver. Code Writer.
        </div>
        {/* Icons */}
        <div
          className={`flex flex-wrap gap-x-4 gap-y-1 font-light ${
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
      </div>
    </div>
  );
}
