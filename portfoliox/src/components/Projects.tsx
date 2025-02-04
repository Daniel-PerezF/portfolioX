import { useEffect, useState } from "react";
import { Project, projects } from "../data";

import { useDarkMode } from "../context/useDarkMode";
import {
  FaCode,
  FaLink,
  IoMdArrowBack,
  IoMdArrowForward,
  IoMdClose,
} from "../icons/icons";

import { useSwipeable } from "react-swipeable";

export function Projects() {
  const { darkMode } = useDarkMode();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project>();
  const openModal = (projectIndex: number, imageIndex: number) => {
    setSelectedProject(projects[projectIndex]);
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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
  });

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
          <div className="w-full flex justify-center">
            <div className="flex justify-center  w-11/12 flex-col">
              <div className="pb-2">
                <div className="flex gap-2 justify-between pr-4">
                  <p className="font-bold mb-4 pl-3"> {project.title}</p>
                  <div className="flex justify-end gap-4">
                    <div className="tooltip">
                      {project.link && (
                        <a
                          href={project.link}
                          target={project.id === 2 ? "_self" : "_blank"}
                          rel={project.id === 2 ? "" : "noopener noreferrer"}
                          aria-label={`Opens live site for project ${project.name}`}
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
                      )}
                    </div>
                    {project.code && (
                      <div className="tooltip">
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Opens link to code for project ${project.name}`}
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
                }  rounded-lg mb-6 gap-[3px] overflow-hidden`}
              >
                <div className="grid grid-cols-2 w-full gap-1">
                  {project.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="relative">
                      <img
                        loading="lazy"
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
              </div>
            </div>
          </div>
        </div>
      ))}
      {modalOpen && (
        <div
          onClick={(e) => {
            e.preventDefault();
            closeModal();
          }}
          className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 overflow-y-scroll ${
            darkMode
              ? "bg-dark/50  backdrop-blur-md text-light"
              : "bg-light/50 backdrop-blur-md text-dark"
          } px-4`}
        >
          <div className="relative">
            <div>
              <IoMdClose
                className={`${darkMode ? "hover:bg-white/10" : "hover:bg-dark/10"} p-1 rounded-full z-50 top-3 left-3 fixed duration-150 ease-in-out cursor-pointer`}
                size={38}
                onClick={closeModal}
              />
            </div>
            <div className="w-full flex justify-center">
              {" "}
              <img
                loading="lazy"
                src={projects[selectedProjectIndex].images[selectedImageIndex]}
                className=" max-w-[420px] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[720px] max-h-[90vh]"
                alt={`${selectedProject?.title} project images in modal`}
                onClick={(e) => e.stopPropagation()}
                {...swipeHandlers}
              />
              <button
                aria-label="Left toggle arrow for images modal"
                className={`fixed top-1/2 left-4 py-1 px-3 z-50 text-4xl h-10 w-10 flex items-center justify-center transition-all ease-in-out duration-300 ${
                  darkMode ? "hover:bg-[#858585]" : "hover:bg-dark"
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
                aria-label="Right toggle arrow for images modal"
                className={`fixed top-1/2 right-4 py-1 px-3 z-50 text-4xl h-10 w-10 flex items-center justify-center transition-all ease-in-out duration-300 ${
                  darkMode ? "hover:bg-[#858585]" : "hover:bg-dark"
                } bg-opacity-10 hover:bg-opacity-25 rounded-full`}
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                style={{ transform: "translateY(-50%)", zIndex: 50 }}
              >
                <IoMdArrowForward className="flex-shrink-0" size={30} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
