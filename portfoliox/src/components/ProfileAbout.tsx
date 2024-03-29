import { Link } from "react-router-dom";
import { useDarkMode } from "../context/useDarkMode";
import { useEffect, useRef, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import {
  BsFillSuitcaseLgFill,
  FaLink,
  HiMiniCake,
  IoCalendarOutline,
  IoLocation,
  MdOutlineMailOutline,
  RiVerifiedBadgeFill,
} from "../icons/icons";
import { DirectMessage } from "./DirectMessage";
import { useOnScreen } from "./useOnScreen";
import { Links2 } from "./Links2";

export function ProfileAbout() {
  const { darkMode } = useDarkMode();
  const [confettiActive, setConfettiActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showDirectMessage, setShowDirectMessage] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const directMessageRef = useRef<HTMLDivElement>(null);
  const isDirectMessageVisible = useOnScreen(directMessageRef);

  const [following, setFollowing] = useState(() => {
    const savedFollowing = sessionStorage.getItem("following");
    return savedFollowing ? JSON.parse(savedFollowing) : {};
  });
  const [followers, setFollowers] = useState(() => {
    const savedFollowers = sessionStorage.getItem("followers");
    return savedFollowers ? JSON.parse(savedFollowers) : "443";
  });

  const toggleFollow = () => {
    setFollowing((prevState: boolean) => !prevState);
    const newFollowers = following ? "444" : "443";
    setFollowers(newFollowers);
    sessionStorage.setItem("following", JSON.stringify(!following));
    sessionStorage.setItem("followers", JSON.stringify(newFollowers));
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
  // useEffect(() => {
  //   if (showDirectMessage) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [showDirectMessage]);

  useEffect(() => {
    if (isDirectMessageVisible) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isDirectMessageVisible]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-end pt-4 pb-3 gap-4 relative">
          <div
            className={`text-2xl self-center ring-1 rounded-full p-1 cursor-pointer duration-150 ease-in-out ${
              darkMode
                ? "ring-light hover:bg-light hover:bg-opacity-15 "
                : "ring-dark hover:bg-dark hover:bg-opacity-5"
            } `}
          >
            <MdOutlineMailOutline
              onClick={() => setShowDirectMessage(!showDirectMessage)}
            />
          </div>

          <button
            ref={buttonRef}
            onClick={() => {
              toggleFollow();
            }}
            className={` ${
              following ? "bg-pop" : "bg-purple-400"
            } px-4 py-[6px]  rounded-full text-white mr-4  hover:scale-105 duration-150 ease-in-out cursor-pointer`}
          >
            {following ? "Follow" : "Following"}
          </button>
        </div>
        {confettiActive && (
          <ConfettiExplosion
            force={0.05}
            duration={2200}
            particleCount={40}
            width={200}
            colors={[
              "#FB904D",
              "#c084fc",
              "#ffff",
              "#60a5fa",
              "#EA484E",
              "#FFE347",
              "#23F0C7",
            ]}
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
          </div>{" "}
          <div>
            {" "}
            Full Stack Web Developer with a passion for creativity, design and
            front-end development. <br /> For any questions or inquires reach
            out by dm, always up for a chat!
          </div>
          <div
            className={`flex flex-wrap gap-x-4 gap-y-1 pt-2 font-light text-sm ${
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
            <div
              className="flex gap-1 cursor-pointer"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaLink className="self-center" />
              <p className="text-purple-400 hover:underline duration-150 ease-in-out">
                /links
              </p>
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
          {/* <div className="flex relative ml-3 mb-4">
            <div className="left-[-14px] absolute rounded-full h-8 w-8 object-cover bg-white mt-3 mr-2 overflow-hidden">
              <img
                src="/x-logo.jpeg"
                alt="elon musk twitter pfp"
                className=""
              />
            </div>
            <div className="rounded-full h-8 w-8 object-cover bg-white mt-3 mr-2  overflow-hidden ">
              <img src="/jre.jpeg" alt="joe rogan twitter pfp" className="" />
            </div>
            <h3
              className={`font-light text-[0.77rem] self-start pt-4 pb-5 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Followed by Elon Musk and Joe Rogan
            </h3>
          </div> */}
        </div>
      </div>
      <div className={`DirectMessage ${showDirectMessage ? "" : "closed"}`}>
        <div ref={directMessageRef} className="w-full">
          <DirectMessage
            onClose={() => setShowDirectMessage(!showDirectMessage)}
          />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 Links ${
          showLinks ? "" : "closed"
        }`}
      >
        <div className="w-full h-full">
          <Links2 onClose={() => setShowLinks(!showLinks)} />
        </div>
      </div>
    </>
  );
}
