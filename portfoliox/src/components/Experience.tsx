// import { useState, useEffect } from "react";
import {
  FaLink,
  // FaRetweet,
  // MdFavoriteBorder,
  // MdOutlineFavorite,
  // RiVerifiedBadgeFill,
} from "../icons/icons";
import { useDarkMode } from "../context/useDarkMode";
// import { Item } from "../data";
import { experiences } from "../data";

export function Experience() {
  const { darkMode } = useDarkMode();

  // const [items, setItems] = useState<Item[]>(() => {
  //   const itemsFromSession = sessionStorage.getItem("experiences");
  //   return itemsFromSession
  //     ? JSON.parse(itemsFromSession)
  //     : experiences.map((exp) => ({
  //         id: exp.id,
  //         retweets: exp.retweets,
  //         favorites: exp.favorites,
  //         retweetsToggle: false,
  //         favoritesToggle: false,
  //       }));
  // });

  // useEffect(() => {
  //   sessionStorage.setItem("experiences", JSON.stringify(items));
  // }, [items]);

  // function handleRetweet(index: number) {
  //   setItems((prevItems) =>
  //     prevItems.map((item, i) =>
  //       i === index
  //         ? {
  //             ...item,
  //             retweets: item.retweetsToggle
  //               ? item.retweets - 1
  //               : item.retweets + 1,
  //             retweetsToggle: !item.retweetsToggle,
  //           }
  //         : item
  //     )
  //   );
  // }

  // function handleFavorite(index: number) {
  //   setItems((prevItems) =>
  //     prevItems.map((item, i) =>
  //       i === index
  //         ? {
  //             ...item,
  //             favorites: item.favoritesToggle
  //               ? item.favorites - 1
  //               : item.favorites + 1,
  //             favoritesToggle: !item.favoritesToggle,
  //           }
  //         : item
  //     )
  //   );
  // }

  return (
    <div className="h-full">
      {experiences.map((exp, index) => (
        <div
          key={exp.id + index}
          className={`pb-2 md:p-4 mb-4 mx-2 md:mx-0 rounded-lg ${
            darkMode
              ? "hover:bg-[#37363c] bg-[#303034] duration-150 ease-in-out"
              : "hover:bg-[#EBEBEB] bg-[#eeeeee] duration-150 ease-in-out"
          }`}
        >
          {/* <div>
            <div className="flex justify-start gap-1">
              <div className="">
                <img
                  src={exp.pfp}
                  alt={exp.role}
                  className={`rounded-full h-14 w-14 object-cover bg-white  m-4 `}
                />
              </div>

              <div className="text-lg font-bold flex pt-4 gap-2 flex-wrap">
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
          </div> */}
          <div className="w-full flex justify-center pt-4">
            <div className="flex w-11/12 justify-start gap-4 mb-4">
              {exp.logo && (
                <div className="pl-3">
                  <img
                    src={exp.logo}
                    alt={exp.name}
                    className="w-12 h-12 object-cover rounded-lg aspect-square"
                  />
                </div>
              )}

              <div className="flex">
                <div className="">
                  <div className="font-bold">{exp.role}</div>
                  <div className="font-medium text-[14px]">{exp.company}</div>
                  <div
                    className={`font-light text-sm mt-[1px] ${darkMode ? "text-gray-300" : "text-gray-500"}`}
                  >
                    {exp.date}
                  </div>
                </div>
              </div>

              <div className="flex gap mr-12">
                {exp.url && (
                  <div className="tooltip">
                    <span className="tooltiptext text-xs">View Live</span>
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex self-center"
                      aria-label="Opens link to experience item"
                    >
                      <FaLink
                        className={`text-md duration-150 ease-in-out text-gray-400 ${
                          darkMode
                            ? "text-[#97AEC4] hover:text-[#7C9AB6]"
                            : "text-[#7C9AB6] hover:text-[#6286A7]"
                        } `}
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center pb-6 ">
            <div className="flex w-11/12 flex-wrap">
              {exp.description.map((item, index) => (
                <div key={index + item} className="mr-2">
                  <div className="ml-3 flex">
                    <div className="pt-1">•</div>
                    <div className="ml-2 ">{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="w-full flex justify-center pt-4">
            <div className="flex justify-around text-xl w-11/12 text-gray-400">
              <div
                className={`cursor-pointer flex gap-1 duration-150 ease-in-out group hover:text-green-500 ${
                  items[index].retweetsToggle
                    ? "text-green-500 "
                    : "text-gray-400"
                }`}
                onClick={() => handleRetweet(index)}
              >
                {items[index]?.retweetsToggle ? <FaRetweet /> : <FaRetweet />}
                <p className="text-sm ">{items[index].retweets}</p>
              </div>

              <div
                className={` cursor-pointer flex gap-1 group hover:text-red-500 ${
                  items[index]?.favoritesToggle
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
                onClick={() => handleFavorite(index)}
              >
                {items[index]?.favoritesToggle ? (
                  <MdOutlineFavorite />
                ) : (
                  <MdFavoriteBorder />
                )}
                <p className="text-sm ">{items[index].favorites}</p>
              </div>
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
}
