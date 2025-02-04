import { useEffect, useState } from "react";
import { useDarkMode } from "../context/useDarkMode";
import { IoMdArrowBack, IoMdArrowForward, IoMdClose } from "../icons/icons";
import { useSwipeable } from "react-swipeable";

export function About() {
  const { darkMode } = useDarkMode();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = ["/me.png", "/c-0823.jpg"];

  const openModal = (image: string) => {
    const index = images.indexOf(image);
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(
      selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1
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
      <div
        className={` md:p-4 mb-4 mx-2 md:mx-0 rounded-lg pb-6  ${
          darkMode
            ? "hover:bg-[#37363c] bg-[#303034] duration-300 ease-in-out"
            : "hover:bg-[#e5e5e5] bg-[#eeeeee] duration-300 ease-in-out"
        }`}
      >
        <div className="w-full flex justify-center">
          <div className="flex justify-center  w-11/12 flex-col">
            <div
              className={` ${
                darkMode ? "" : "outline-gray-200"
              }  rounded-2xl  mb-4`}
            >
              {" "}
              <p className="pt-4 pb-6">
                Hi! I'm Daniel, a full stack developer driven by a lifelong
                curiosity about technology and how things work. This early
                fascination eventually led me to explore coding, where I found a
                powerful outlet for creativity and problem solving.
                <br />
                <br />
                After completing an intensive full stack development program at
                LearningFuze, I discovered a true passion for web development
                and design. Now, as a developer, I'm constantly expanding my
                skills and exploring new ways to innovate.
                <br />
                <br />
                I'm always open to new collaborations and growth opportunities
                in the tech industry. If you have exciting projects or potential
                partnerships in mind, let's connect!
              </p>
              <div
                className={`flex overflow-hidden rounded-2xl mb-6  ${
                  darkMode ? " " : " "
                }`}
              >
                <div className="flex gap-1">
                  {images.map((image, index) => (
                    <div key={index} className="w-full relative">
                      <img
                        loading="lazy"
                        src={image}
                        className="w-full aspect-[7/8] object-cover cursor-pointer rounded-lg"
                        alt="images of me and my cohort from learningfuze"
                        onClick={() => openModal(image)}
                      />
                      {window.innerWidth > 640 && (
                        <div
                          className="absolute inset-0 bg-black opacity-0 hover:opacity-35 transition-opacity duration-300 cursor-pointer ease-in-out"
                          onClick={() => openModal(image)}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>

                {modalOpen && (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      closeModal();
                    }}
                    className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 overflow-y-scroll   ${
                      darkMode
                        ? "bg-dark/50 backdrop-blur-md text-light"
                        : "bg-light/50 backdrop-blur-md text-dark"
                    } px-4`}
                  >
                    <div className="relative">
                      <IoMdClose
                        className={`${darkMode ? "hover:bg-[#858585]" : "hover:bg-dark"} p-1 rounded-full z-50 top-3 left-3 fixed duration-300 transition-all ease-in-out bg-opacity-10 hover:bg-opacity-25  cursor-pointer`}
                        size={38}
                        onClick={closeModal}
                      />
                      <div className="w-full flex justify-center">
                        {" "}
                        <img
                          loading="lazy"
                          src={images[selectedImageIndex]}
                          className=" max-w-[420px] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[720px] max-h-[90vh]"
                          alt="images of me and my cohort from learningfuze"
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
        </div>
      </div>
    </div>
  );
}
