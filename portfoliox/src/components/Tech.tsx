import { useState } from "react";
import { useDarkMode } from "../context/useDarkMode";
import {
  FaRetweet,
  MdFavoriteBorder,
  MdOutlineFavorite,
  RiVerifiedBadgeFill,
} from "../icons/icons";

export function Tech() {
  const { darkMode } = useDarkMode();

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = sessionStorage.getItem("techFavorites");
    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });
  const [retweets, setRetweets] = useState(() => {
    const savedRetweets = sessionStorage.getItem("techRetweets");
    return savedRetweets ? JSON.parse(savedRetweets) : {};
  });

  const toggleRetweets = () => {
    setRetweets((prevState: boolean) => !prevState);
    sessionStorage.setItem("techRetweets", JSON.stringify(!retweets));
  };
  const toggleFavorites = () => {
    setFavorites((prevState: boolean) => !prevState);
    sessionStorage.setItem("techFavorites", JSON.stringify(!favorites));
  };
  const retweetCount = retweets ? "3" : "4";
  const favoriteCount = favorites ? "6" : "7";
  return (
    <div className="h-full">
      <div
        className={`pb-2 md:p-4 mb-4 mx-2 md:mx-0 rounded-lg ${
          darkMode
            ? "hover:bg-[#37363c] bg-[#303034] duration-150 ease-in-out"
            : "hover:bg-[#EBEBEB] bg-[#eeeeee] duration-150 ease-in-out"
        }`}
      >
        <div>
          <div className="flex justify start gap-1">
            <div className="">
              <img
                src="/memoji4.png"
                alt="my memoji"
                className={`rounded-full h-14 w-14  object-cover bg-white  m-4 `}
              />
            </div>

            <div className="text-lg font-bold flex pt-4 gap-2 ">
              <div className="flex flex-col min-w-[108px]">
                {" "}
                <h3>Daniel Perez</h3>
                <div className="text-gray-400 text-sm font-light">
                  @dxnieldev
                </div>
              </div>

              <RiVerifiedBadgeFill className="text-blue-400 mt-[0.35rem]" />
              <p className="font-normal text-gray-400 text-sm pt-1">
                August 19, 2023
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex justify-center  w-11/12 flex-col">
            <div
              className={` ${
                darkMode ? "" : "outline-gray-200"
              }  rounded-2xl  mb-4`}
            >
              {" "}
              <p className="pt-4 pb-6">
                Here's some of the tech I use :
                <br />
                <br />
                Frontend - HTML, CSS, Tailwind, JavaScript, TypeScript, React,
                Next
                <br />
                <br />
                Backend - Node, Express, PostgreSQL, MongoDB
                <br />
                <br />
                Deployment - Vercel, Aws, Github
                <br />
                <br />
                Design - Figma, Canva
                <br />
                <br />
                Tools - VSCode, Git, GitHub, Npm, Docker, Slack, Discord, Zoom
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center pt-4">
          <div className="flex justify-around text-xl w-11/12 text-gray-400">
            <div
              className={`flex gap-1 cursor-pointer duration-150 ease-in-out group hover:text-green-500 ${
                retweets ? "" : "text-green-500"
              } cursor-pointer`}
              onClick={() => {
                toggleRetweets();
              }}
            >
              <FaRetweet />
              <p className="text-sm ">{retweetCount}</p>
            </div>
            <div
              className={`flex gap-1 duration-150 ease-in-out group hover:text-red-500 ${
                favorites ? "" : "text-red-500"
              } cursor-pointer`}
              onClick={() => {
                toggleFavorites();
              }}
            >
              {favorites ? <MdFavoriteBorder /> : <MdOutlineFavorite />}
              <p className="text-sm ">{favoriteCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
