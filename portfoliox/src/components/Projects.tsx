import { useState } from "react";
import { IconProps, projects } from "../data";
import { useDarkMode } from "../context/useDarkMode";
import {
  BiMessageRounded,
  FaCode,
  FaLink,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaRetweet,
  IoClose,
  IoStatsChart,
  MdFavoriteBorder,
  MdOutlineFavorite,
  RiVerifiedBadgeFill,
} from "../icons/icons";

export function Projects() {
  const { darkMode } = useDarkMode();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [favorites, setFavorites] = useState<IconProps>(() => {
    const savedFavorites = sessionStorage.getItem("projectsFavorites");
    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });
  const [retweets, setRetweets] = useState<IconProps>(() => {
    const savedRetweets = sessionStorage.getItem("projectsRetweets");
    return savedRetweets ? JSON.parse(savedRetweets) : {};
  });

  const toggleFavorites = (index: number) => {
    setFavorites((prevFavorites) => {
      const newFavorites = { ...prevFavorites, [index]: !prevFavorites[index] };
      sessionStorage.setItem("projectsFavorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };
  const toggleRetweets = (index: number) => {
    setRetweets((prevRetweets) => {
      const newRetweets = { ...prevRetweets, [index]: !prevRetweets[index] };
      sessionStorage.setItem("projectsRetweets", JSON.stringify(newRetweets));
      return newRetweets;
    });
  };
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
                  className={`rounded-full h-14 w-14  object-cover bg-white  ring-1 m-4 ${
                    darkMode ? "ring-black" : "ring-white"
                  }`}
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
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink className="self-center  mt-1 hover:text-blue-300 duration-150 ease-in-out" />
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaCode className="self-center mt-[0.15rem] text-lg hover:text-blue-300 duration-150 ease-in-out" />
                    </a>
                  </div>
                </div>

                <div className="pb-4">
                  {project.description.map((item, index) => (
                    <div key={index} className="mr-2">
                      <div className="ml-3 flex">
                        <div className="pt-1">*</div>
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
                    className=" fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-35"
                  >
                    <div className="relative">
                      <IoClose
                        className="text-white z-50 top-2 left-2 fixed text-4xl hover:scale-105 duration-150 ease-in-out cursor-pointer"
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
                          className="fixed top-1/2 left-4 py-1 px-3 z-50 text-white text-4xl bg-black bg-opacity-10 hover:bg-opacity-35 rounded-full duration-150"
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          style={{ transform: "translateY(-50%)", zIndex: 50 }}
                        >
                          <FaLongArrowAltLeft />
                        </button>
                        <button
                          className="fixed top-1/2 right-4 py-1 px-3 z-50 text-white text-4xl bg-black bg-opacity-10 hover:bg-opacity-35 rounded-full duration-150"
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          style={{ transform: "translateY(-50%)", zIndex: 50 }}
                        >
                          <FaLongArrowAltRight />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center pt-4">
            <div className="flex justify-between text-xl w-11/12 text-gray-400">
              <div className="flex gap-1">
                <BiMessageRounded />
                <p className="text-sm ">{project.comments}</p>
              </div>

              <div
                className={`cursor-pointer flex gap-1 ${
                  retweets[projectIndex] ? "text-green-500" : "text-gray-400"
                }`}
                onClick={() => toggleRetweets(projectIndex)}
              >
                {retweets[projectIndex] ? <FaRetweet /> : <FaRetweet />}
                <p className="text-sm ">{project.retweets}</p>
              </div>

              <div
                className={` cursor-pointer flex gap-1 ${
                  favorites[projectIndex] ? "text-red-500" : "text-gray-400"
                }`}
                onClick={() => toggleFavorites(projectIndex)}
              >
                {favorites[projectIndex] ? (
                  <MdOutlineFavorite />
                ) : (
                  <MdFavoriteBorder />
                )}
                <p className="text-sm ">{project.likes}</p>
              </div>

              <div className="flex gap-1">
                <IoStatsChart />
                <p className="text-sm ">{project.stats}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
