import React, { useState, useEffect } from "react";
import {
  FaLink,
  FaRetweet,
  MdFavoriteBorder,
  MdOutlineFavorite,
  RiVerifiedBadgeFill,
} from "../icons/icons";
import { useDarkMode } from "../context/useDarkMode";
import { Item, services } from "../data";

export function Services() {
  const { darkMode } = useDarkMode();

  const [items, setItems] = useState<Item[]>(() => {
    const itemsFromSession = sessionStorage.getItem("experiences");
    return itemsFromSession
      ? JSON.parse(itemsFromSession)
      : services.map((serv) => ({
          id: serv.id,
          retweets: serv.retweets,
          favorites: serv.favorites,
          retweetsToggle: false,
          favoritesToggle: false,
        }));
  });

  useEffect(() => {
    sessionStorage.setItem("experiences", JSON.stringify(items));
  }, [items]);

  function handleRetweet(index: number) {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? {
              ...item,
              retweets: item.retweetsToggle
                ? item.retweets - 1
                : item.retweets + 1,
              retweetsToggle: !item.retweetsToggle,
            }
          : item
      )
    );
  }

  function handleFavorite(index: number) {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? {
              ...item,
              favorites: item.favoritesToggle
                ? item.favorites - 1
                : item.favorites + 1,
              favoritesToggle: !item.favoritesToggle,
            }
          : item
      )
    );
  }

  return (
    <div className="h-full">
      {services.map((serv, index) => (
        <div
          key={serv.id + index}
          className={`pb-2 md:p-4 mb-4 mx-2 md:mx-0 rounded-lg ${
            darkMode
              ? "hover:bg-[#37363c] bg-[#303034] duration-150 ease-in-out"
              : "hover:bg-[#EBEBEB] bg-[#eeeeee] duration-150 ease-in-out"
          }`}
        >
          <div>
            <div className="flex justify-start gap-1">
              <div className="">
                <img
                  src={serv.pfp}
                  alt=""
                  className={`rounded-full h-14 w-14 object-cover bg-white  m-4 `}
                />
              </div>

              <div className="text-lg font-bold flex pt-4 gap-2 ">
                <div className="flex flex-col min-w-[108px]">
                  <h3>{serv.name}</h3>
                  <div className="text-gray-400 text-sm font-light">
                    @{serv.username}
                  </div>
                </div>

                <RiVerifiedBadgeFill className="text-blue-400 mt-[0.35rem]" />
                <p className="font-normal text-gray-400 text-sm pt-1">
                  {serv.date}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center pt-4">
            <div className="flex w-11/12 justify-between">
              <div className="mr-2">{serv.role}</div>
              <div className="flex gap mr-12">
                {serv.url && (
                  <div className="tooltip">
                    <span className="tooltiptext text-xs">View Live</span>
                    <a
                      href={serv.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex self-center"
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
          <div className="w-full flex justify-center">
            <div className="flex w-11/12 flex-wrap">
              {serv.description.map((item, index) => (
                <div key={index + item} className="mr-2">
                  <div className="ml-3 flex">
                    <div className="pt-1">•</div>
                    <div className="ml-2 ">{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center pt-4">
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
          </div>
        </div>
      ))}
    </div>
  );
}
