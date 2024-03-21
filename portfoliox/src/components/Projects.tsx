import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useDarkMode } from "../context/useDarkMode";
import {
  FaLink,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaRetweet,
} from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { IoClose, IoStatsChart } from "react-icons/io5";
import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { IconProps, projects } from "../data/data";

export function Projects() {
  const { darkMode } = useDarkMode();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [favorites, setFavorites] = useState<IconProps>(() => {
    const savedFavorites = localStorage.getItem("projectsFavorites");
    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });
  const [retweets, setRetweets] = useState<IconProps>(() => {
    const savedRetweets = localStorage.getItem("projectsRetweets");
    return savedRetweets ? JSON.parse(savedRetweets) : {};
  });

  const toggleFavorites = (index: number) => {
    setFavorites((prevFavorites) => {
      const newFavorites = { ...prevFavorites, [index]: !prevFavorites[index] };
      localStorage.setItem("projectsFavorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };
  const toggleRetweets = (index: number) => {
    setRetweets((prevRetweets) => {
      const newRetweets = { ...prevRetweets, [index]: !prevRetweets[index] };
      localStorage.setItem("projectsRetweets", JSON.stringify(newRetweets));
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
          className="border border-1 pb-2 md:p-4 mb-4 mx-2 md:mx-0"
        >
          <div>
            <div className="flex justify start gap-1">
              <div className="">
                <img
                  src={project.pfp}
                  alt=""
                  className={`rounded-full h-14 w-14  object-cover bg-white  ring-1 m-4 ${
                    darkMode ? "ring-black" : "ring-white"
                  }`}
                />
              </div>

              <div className="text-lg font-bold flex pt-4 gap-2 ">
                <div className="flex flex-col">
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
          <div className="w-full flex justify-center">
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
                      <FaLink className="self-center  mt-1" />
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaCode className="self-center mt-[0.15rem] text-lg" />
                    </a>
                  </div>
                </div>

                <div>
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
                  darkMode ? "outline-black outline-1" : "outline-gray-200"
                } outline-1 rounded-md outline mb-4 grid grid-cols-2 gap-2`}
              >
                {project.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    className="object-cover cursor-pointer aspect-[2/1] rounded-md"
                    alt=""
                    onClick={() => {
                      openModal(projectIndex, imageIndex);
                    }}
                  />
                ))}
                {modalOpen && (
                  <div
                    onClick={closeModal}
                    className=" fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-65"
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
                          alt=""
                          onClick={() => {
                            closeModal();
                          }}
                        />
                        <button
                          className="absolute top-1/2 left-4 py-1 px-3 z-50 text-white text-4xl bg-black bg-opacity-25 hover:bg-opacity-35 rounded-full duration-150"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent closing when clicking on the button
                            prevImage();
                          }}
                        >
                          <FaLongArrowAltLeft />
                        </button>
                        <button
                          className="absolute top-1/2 right-4 py-1 px-3 z-50 text-white text-4xl bg-black bg-opacity-25 hover:bg-opacity-35 rounded-full duration-150"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent closing when clicking on the button
                            nextImage();
                          }}
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
