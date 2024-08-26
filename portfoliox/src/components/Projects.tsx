import { useEffect, useState } from "react";
import { Item, projects } from "../data";
import { useDarkMode } from "../context/useDarkMode";
import {
  FaCode,
  FaLink,
  FaRetweet,
  IoClose,
  IoMdArrowBack,
  IoMdArrowForward,
  MdFavoriteBorder,
  MdOutlineFavorite,
  RiVerifiedBadgeFill,
} from "../icons/icons";

export function Projects() {
  const { darkMode } = useDarkMode();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [items, setItems] = useState<Item[]>(() => {
    const itemsFromSession = sessionStorage.getItem("projects");
    return itemsFromSession
      ? JSON.parse(itemsFromSession)
      : projects.map((project) => ({
          id: project.id,
          retweets: project.retweets,
          favorites: project.favorites,
          retweetsToggle: false,
          favoritesToggle: false,
        }));
  });

  useEffect(() => {
    sessionStorage.setItem("projects", JSON.stringify(items));
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

  const openModal = (projectIndex: number, imageIndex: number) => {
    setSelectedProjectIndex(projectIndex);
    setSelectedImageIndex(imageIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex(
      (selectedImageIndex + 1) % projects[selectedProjectIndex].images.length
    );
  };

  const prevImage = () => {
    setSelectedImageIndex(
      (selectedImageIndex - 1 + projects[selectedProjectIndex].images.length) %
        projects[selectedProjectIndex].images.length
    );
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);
  return (
    <div className="h-full">
      {projects.map((project, projectIndex) => (
        <div
          key={projectIndex}
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
                  src={project.pfp}
                  alt={`${project.name} profile pic`}
                  className={`rounded-full h-14 w-14  object-cover bg-white  m-4`}
                />
              </div>

              <div className="text-lg font-bold flex pt-4 gap-2 ">
                <div className="flex flex-col min-w-[108px]">
                  {" "}
                  <h3>{project.name}</h3>
                  <div className="text-gray-400 text-sm font-light">
                    @{project.username}
                  </div>
                </div>

                <RiVerifiedBadgeFill className="text-blue-400 mt-[0.35rem]" />
                <p className="font-normal text-gray-400 text-sm pt-1">
                  {project.date}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center pt-4">
            <div className="flex justify-center  w-11/12 flex-col">
              <div className="pb-2">
                <div className="flex gap-2 justify-between pr-4">
                  <p className=""> {project.title}</p>
                  <div className="flex justify-end gap-4 ">
                    <div className="tooltip">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
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
                    {project.code && (
                      <div className="tooltip">
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
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
                  {project.description.map((item, index) => (
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
                  {project.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="relative">
                      <img
                        src={image}
                        className="object-cover cursor-pointer aspect-[2/1] overflow-hidden"
                        alt={`${project.title} project images`}
                        onClick={() => openModal(projectIndex, imageIndex)}
                      />
                      {window.innerWidth > 640 && (
                        <div
                          className="absolute inset-0 bg-black opacity-0 hover:opacity-35 transition-opacity duration-300 cursor-pointer ease-in-out"
                          onClick={() => openModal(projectIndex, imageIndex)}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>

                {modalOpen && (
                  <div
                    onClick={closeModal}
                    className={`fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center ${
                      darkMode ? "bg-opacity-25" : "bg-opacity-35"
                    } bg-black backdrop-blur-[0.5px]`}
                  >
                    <div className="relative">
                      <IoClose
                        className="text-white z-50 top-3 left-3 fixed text-4xl hover:scale-105 duration-150 ease-in-out cursor-pointer"
                        onClick={closeModal}
                      />
                      <div className="w-full flex justify-center">
                        {" "}
                        <img
                          src={
                            projects[selectedProjectIndex].images[
                              selectedImageIndex
                            ]
                          }
                          className=" max-w-[420px] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[720px]"
                          alt={`${project.title} images in modal`}
                          onClick={() => {
                            closeModal();
                          }}
                        />
                        <button
                          className={`fixed top-1/2 left-4 py-1 px-3 z-50 text-white text-4xl h-10 w-10 flex items-center justify-center transition-all ease-in-out duration-300 ${
                            darkMode ? "hover:bg-[#858585]" : "hover:bg-white"
                          } bg-opacity-10 hover:bg-opacity-25 rounded-full duration-300`}
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          style={{ transform: "translateY(-50%)", zIndex: 50 }}
                        >
                          <IoMdArrowBack className="flex-shrink-0" size={30} />
                        </button>
                        <button
                          className={`fixed top-1/2 right-4 py-1 px-3 z-50 text-white text-4xl h-10 w-10 flex items-center justify-center transition-all ease-in-out duration-300 ${
                            darkMode ? "hover:bg-[#858585]" : "hover:bg-white"
                          } bg-opacity-10 hover:bg-opacity-25 rounded-full`}
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          style={{ transform: "translateY(-50%)", zIndex: 50 }}
                        >
                          <IoMdArrowForward
                            className="flex-shrink-0"
                            size={30}
                          />
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
                  items[projectIndex].retweetsToggle
                    ? "text-green-500"
                    : "text-gray-400"
                }`}
                onClick={() => handleRetweet(projectIndex)}
              >
                {items[projectIndex].retweetsToggle ? (
                  <FaRetweet />
                ) : (
                  <FaRetweet />
                )}
                <p className="text-sm ">{items[projectIndex].retweets}</p>
              </div>

              <div
                className={` cursor-pointer flex gap-1 duration-150 ease-in-out group hover:text-red-500 ${
                  items[projectIndex].favoritesToggle
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
                onClick={() => handleFavorite(projectIndex)}
              >
                {items[projectIndex].favoritesToggle ? (
                  <MdOutlineFavorite />
                ) : (
                  <MdFavoriteBorder />
                )}
                <p className="text-sm ">{items[projectIndex].favorites}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
