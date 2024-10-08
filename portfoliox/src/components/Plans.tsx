import { useState, useEffect } from "react";
import {
  FaRetweet,
  MdFavoriteBorder,
  MdOutlineFavorite,
  RiVerifiedBadgeFill,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  IoClose,
  FaLink,
  FaCode,
} from "../icons/icons";
import { useDarkMode } from "../context/useDarkMode";
import { Item, services } from "../data";

export default function Plans() {
  const { darkMode } = useDarkMode();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(-1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
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
  const openModal = (serviceIndex: number, imageIndex: number) => {
    setSelectedServiceIndex(serviceIndex);
    setSelectedImageIndex(imageIndex);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex(
      (selectedImageIndex + 1) % services[selectedServiceIndex].images.length
    );
  };
  const prevImage = () => {
    setSelectedImageIndex(
      (selectedImageIndex - 1 + services[selectedServiceIndex].images.length) %
        services[selectedServiceIndex].images.length
    );
  };

  return (
    <div className="h-full">
      {services.map((service, index) => (
        <div
          key={index}
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
                  src={service.pfp}
                  alt={`${service.name} profile pic`}
                  className={`rounded-full h-14 w-14  object-cover bg-white  m-4`}
                />
              </div>

              <div className="text-lg font-bold flex pt-4 gap-2 ">
                <div className="flex flex-col min-w-[108px]">
                  {" "}
                  <h3>{service.name}</h3>
                  <div className="text-gray-400 text-sm font-light">
                    @{service.username}
                  </div>
                </div>

                <RiVerifiedBadgeFill className="text-blue-400 mt-[0.35rem]" />
                <p className="font-normal text-gray-400 text-sm pt-1">
                  {service.date}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center pt-4">
            <div className="flex justify-center  w-11/12 flex-col">
              <div className="pb-2">
                <div className="flex gap-2 justify-between pr-4">
                  <p className=""> {service.title}</p>
                  <div className="flex justify-end gap-4 ">
                    {service.link && (
                      <div className="tooltip">
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Opens link to live site for item"
                        >
                          <span className="tooltiptext text-xs">View Live</span>
                          <FaLink
                            className={`self-center  mt-1   duration-150 ease-in-out ${
                              darkMode
                                ? "text-[#97AEC4] hover:text-[#7C9AB6]"
                                : "text-[#7C9AB6] hover:text-[#6286A7]"
                            }`}
                          />
                        </a>
                      </div>
                    )}
                    {service.code && (
                      <div className="tooltip">
                        <a
                          href={service.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Opens Link to code for service"
                        >
                          <span className="tooltiptext text-xs">View Code</span>
                          <FaCode
                            className={`self-center mt-[0.15rem] text-lg duration-150 ease-in-out ${
                              darkMode
                                ? "text-[#97AEC4] hover:text-[#7C9AB6]"
                                : "text-[#7C9AB6] hover:text-[#6286A7]"
                            }`}
                          />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pb-4">
                  {service.description.map((item, index) => (
                    <div key={index} className="mr-2">
                      <div className="ml-3 flex">
                        <div className="pt-1">•</div>
                        <div className="ml-2 ">{item}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={` ${
                  darkMode ? "" : ""
                }  rounded-lg mb-4  gap-[3px] overflow-hidden `}
              >
                <div className="grid grid-cols-2 w-full gap-1 ">
                  {service.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="relative">
                      <img
                        src={image}
                        className="object-cover cursor-pointer aspect-[2/1] overflow-hidden"
                        alt={`${service.title} project images`}
                        onClick={() => openModal(index, imageIndex)}
                      />
                      {window.innerWidth > 640 && (
                        <div
                          className="absolute inset-0 bg-black opacity-0 hover:opacity-35 transition-opacity duration-300 cursor-pointer ease-in-out"
                          onClick={() => openModal(index, imageIndex)}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>

                {modalOpen && (
                  <div
                    onClick={closeModal}
                    className=" fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-35"
                  >
                    <div className="relative">
                      <IoClose
                        className="text-white z-50 top-3 left-3 fixed text-4xl hover:scale-105 duration-150 ease-in-out cursor-pointer"
                        onClick={closeModal}
                      />
                      <div className="w-full flex justify-center">
                        <img
                          src={
                            services[selectedServiceIndex].images[
                              selectedImageIndex
                            ]
                          }
                          className=" max-w-[420px] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[720px]"
                          alt={`${service.title} images in modal`}
                          onClick={() => {
                            closeModal();
                          }}
                        />
                        <button
                          aria-label="Left toggle arrow for images modal"
                          className={`fixed top-1/2 left-4 py-1 px-3 z-50 text-white text-4xl ${
                            darkMode ? "bg-[#858585]" : "bg-white"
                          } bg-opacity-10 hover:bg-opacity-25 rounded-full duration-150 ease-in-out`}
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          style={{ transform: "translateY(-50%)", zIndex: 50 }}
                        >
                          <FaLongArrowAltLeft className="hover:scale-105 duration-150 ease-in-out" />
                        </button>
                        <button
                          aria-label="Right toggle arrow for images modal"
                          className={`fixed top-1/2 right-4 py-1 px-3 z-50 text-white text-4xl ${
                            darkMode ? "bg-[#858585]" : "bg-white"
                          } bg-opacity-10 hover:bg-opacity-25 rounded-full duration-150 ease-in-out`}
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          style={{ transform: "translateY(-50%)", zIndex: 50 }}
                        >
                          <FaLongArrowAltRight className="hover:scale-105 duration-150 ease-in-out" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center pt-4">
            <div className="flex justify-around text-xl w-11/12 text-gray-400">
              <div
                className={`cursor-pointer flex gap-1 duration-150 ease-in-out group hover:text-green-500 ${
                  items[index].retweetsToggle
                    ? "text-green-500"
                    : "text-gray-400"
                }`}
                onClick={() => handleRetweet(index)}
              >
                {items[index].retweetsToggle ? <FaRetweet /> : <FaRetweet />}
                <p className="text-sm ">{items[index].retweets}</p>
              </div>

              <div
                className={` cursor-pointer flex gap-1 duration-150 ease-in-out group hover:text-red-500 ${
                  items[index].favoritesToggle
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
                onClick={() => handleFavorite(index)}
              >
                {items[index].favoritesToggle ? (
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
