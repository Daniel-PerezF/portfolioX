import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { HiMiniCake } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/useDarkMode";
import { useState } from "react";
import { ProfilePic } from "./ProfilePic";

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
        {/* <div className="flex">
          <div className="rounded-full h-8 w-8 object-cover bg-white ring-2 mt-3 mr-2  overflow-hidden">
            <img src="/x-logo.jpeg" alt="" className="" />
          </div>

          <h3
            className={`font-light text-[0.77rem] self-start pt-4 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Followed by Elon Musk and Joe Rogan
          </h3>
        </div> */}
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
        {/* <div className="flex w-[45%] justify-between pt-2">
          <div className="flex justify-between w-[32%] cursor-pointer hover:underline hover:underline-offset-4">
            <h3 className="">69K </h3>
            <h3
              className={`text-md font-light ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Following
            </h3>
          </div>
          <div className="flex justify-between w-[35%] cursor-pointer hover:underline hover:underline-offset-4">
            <h3 className="">420K </h3>
            <h3
              className={`text-md font-light ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Followers
            </h3>
          </div>
        </div> */}
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
