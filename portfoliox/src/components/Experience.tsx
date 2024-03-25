import { useState } from "react";
import { IconProps, experiences } from "../data";
import { useDarkMode } from "../context/useDarkMode";
import {
  BiMessageRounded,
  FaLink,
  FaRetweet,
  IoStatsChart,
  MdFavoriteBorder,
  MdOutlineFavorite,
  RiVerifiedBadgeFill,
} from "../icons/icons";

export function Experience() {
  const { darkMode } = useDarkMode();
  const [favorites, setFavorites] = useState<IconProps>(() => {
    const savedFavorites = sessionStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });

  const [retweets, setRetweets] = useState<IconProps>(() => {
    const savedRetweets = sessionStorage.getItem("retweets");
    return savedRetweets ? JSON.parse(savedRetweets) : {};
  });
  const toggleFavorite = (index: number) => {
    setFavorites((prevFavorites) => {
      const newFavorites = { ...prevFavorites, [index]: !prevFavorites[index] };
      sessionStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };
  const toggleRetweets = (index: number) => {
    setRetweets((prevRetweets) => {
      const newRetweets = { ...prevRetweets, [index]: !prevRetweets[index] };
      sessionStorage.setItem("retweets", JSON.stringify(newRetweets));
      return newRetweets;
    });
  };
  return (
    <div className="h-full ">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`pb-2 md:p-4 mb-4 mx-2 md:mx-0  rounded-lg ${
            darkMode
              ? "hover:bg-[#37363c] bg-[#303034] duration-150 ease-in-out"
              : "hover:bg-[#EBEBEB] bg-[#eeeeee] duration-150 ease-in-out"
          }`}
        >
          <div>
            <div className="flex justify-start gap-1">
              <div className="">
                <img
                  src={exp.pfp}
                  alt=""
                  className={`rounded-full h-14 w-14 object-cover bg-white ring-1 m-4 ${
                    darkMode ? "ring-black" : "ring-white"
                  }`}
                />
              </div>

              <div className="text-lg font-bold flex pt-4 gap-2 ">
                <div className="flex flex-col min-w-[108px]">
                  <h3>{exp.name}</h3>
                  <div className="text-gray-400 text-sm font-light">
                    @{exp.username}
                  </div>
                </div>

                <RiVerifiedBadgeFill className="text-blue-400 mt-[0.35rem]" />
                <p className="font-normal text-gray-400 text-sm pt-1">
                  {exp.date}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center pt-4">
            <div className="flex w-11/12 justify-between">
              <div className="mr-2">{exp.role}</div>
              <div className="flex gap mr-12">
                {exp.url && (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex self-center"
                  >
                    <FaLink className="text-md hover:text-blue-300 duration-150 ease-in-out" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="flex w-11/12 flex-wrap">
              {exp.description.map((item, index) => (
                <div key={index} className="mr-2">
                  <div className="ml-3 flex">
                    <div className="pt-1">*</div>
                    <div className="ml-2 ">{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center pt-4">
            <div className="flex justify-between text-xl w-11/12 text-gray-400">
              <div className="flex gap-1">
                <BiMessageRounded />
                <p className="text-sm ">{exp.comments}</p>
              </div>

              <div
                className={`cursor-pointer flex gap-1 ${
                  retweets[index] ? "text-green-500" : "text-gray-400"
                }`}
                onClick={() => toggleRetweets(index)}
              >
                {retweets[index] ? <FaRetweet /> : <FaRetweet />}
                <p className="text-sm ">{exp.retweets}</p>
              </div>

              <div
                className={` cursor-pointer flex gap-1 ${
                  favorites[index] ? "text-red-500" : "text-gray-400"
                }`}
                onClick={() => toggleFavorite(index)}
              >
                {favorites[index] ? (
                  <MdOutlineFavorite />
                ) : (
                  <MdFavoriteBorder />
                )}
                <p className="text-sm ">{exp.likes}</p>
              </div>

              <div className="flex gap-1">
                <IoStatsChart />
                <p className="text-sm ">{exp.stats}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
