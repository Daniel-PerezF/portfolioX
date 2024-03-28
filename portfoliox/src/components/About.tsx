import { useState } from "react";
import { useDarkMode } from "../context/useDarkMode";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaRetweet,
  IoClose,
  MdFavoriteBorder,
  MdOutlineFavorite,
  RiVerifiedBadgeFill,
} from "../icons/icons";

export function About() {
  const { darkMode } = useDarkMode();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = sessionStorage.getItem("aboutFavorites");
    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });
  const [retweets, setRetweets] = useState(() => {
    const savedRetweets = sessionStorage.getItem("aboutRetweets");
    return savedRetweets ? JSON.parse(savedRetweets) : {};
  });

  const toggleRetweets = () => {
    setRetweets((prevState: boolean) => !prevState);
    sessionStorage.setItem("aboutRetweets", JSON.stringify(!retweets));
  };
  const toggleFavorites = () => {
    setFavorites((prevState: boolean) => !prevState);
    sessionStorage.setItem("aboutFavorites", JSON.stringify(!favorites));
  };
  const images = ["/ssme.png", "/c-0823.jpg"];

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
  const retweetCount = retweets ? "3" : "4";
  const likeCount = favorites ? "8" : "9";
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
                src="/memoji.PNG"
                alt="my memoji"
                className={`rounded-full h-14 w-14  object-cover bg-white  ring-1 m-4 ${
                  darkMode ? "ring-black" : "ring-white"
                }`}
              />
            </div>

            <div className="text-lg font-bold flex pt-4 gap-2 ">
              <div className="flex flex-col min-w-[108px]">
                {" "}
                <h3>Daniel Perez</h3>
                <div className="text-gray-400 text-sm font-light">
                  @danielperez
                </div>
              </div>

              <RiVerifiedBadgeFill className="text-blue-400 mt-[0.35rem]" />
              <p className="font-normal text-gray-400 text-sm pt-1">
                August 22, 2023
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
                Hey there! I'm Daniel, a software developer driven by a lifelong
                fascination with technology. From childhood days tinkering with
                our household computer to my recent curiosity in AI and coding,
                technology has always captivated me.
                <br />
                <br />
                After completing an intensive full-stack software development
                course at LearningFuze coding bootcamp, I uncovered my true
                passion for coding and web design. I've always had a love for
                creativity and expression, and I found a new outlet for it
                through code.
                <br />
                <br />
                Now, as a software developer, I'm eager to continue learning and
                growing in this dynamic field. I'm actively seeking new avenues
                for collaboration and growth within the software development
                sphere. If you have any exciting projects or opportunities on
                the horizon, I'd love to chat and see how we can potentially
                work together!
              </p>
              <div
                className={`flex overflow-hidden rounded-2xl  ${
                  darkMode ? " " : " "
                }`}
              >
                <div className="flex gap-1">
                  {images.map((image, index) => (
                    <div key={index} className="w-full relative">
                      <img
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
                          src={images[selectedImageIndex]}
                          className=" max-w-[420px] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[720px]"
                          alt="images of me and my cohort from learningfuze"
                          onClick={() => {
                            closeModal();
                          }}
                        />
                        <button
                          className="fixed top-1/2 left-4 py-1 px-3 z-50 text-white text-4xl bg-black bg-opacity-25 hover:bg-opacity-35 rounded-full duration-150"
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          style={{ transform: "translateY(-50%)", zIndex: 50 }}
                        >
                          <FaLongArrowAltLeft />
                        </button>
                        <button
                          className="fixed top-1/2 right-4 py-1 px-3 z-50 text-white text-4xl bg-black bg-opacity-25 hover:bg-opacity-35 rounded-full duration-150"
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
        </div>
        <div className="w-full flex justify-center pt-4">
          <div className="flex justify-around text-xl w-11/12 text-gray-400">
            <div
              className={`flex gap-1 cursor-pointer group duration-150 ease-in-out ${
                retweets
                  ? "text-gray-400 group-hover:text-green-500 "
                  : "text-green-500"
              } cursor-pointer`}
              onClick={() => {
                toggleRetweets();
              }}
            >
              <FaRetweet
                className={`${
                  retweets
                    ? "group-hover:text-green-500 text-gray-400"
                    : "text-green-500"
                }`}
              />
              <p className="text-sm group-hover:text-green-500">
                {retweetCount}
              </p>
            </div>
            <div
              className={`flex gap-1 duration-150 ease-in-out group ${
                favorites
                  ? "text-gray-400 group-hover:text-red-500 "
                  : "text-red-500"
              } cursor-pointer`}
              onClick={() => {
                toggleFavorites();
              }}
            >
              {favorites ? (
                <MdFavoriteBorder
                  className={` ${
                    favorites ? "group-hover:text-red-500" : "text-gray-400"
                  }`}
                />
              ) : (
                <MdOutlineFavorite />
              )}
              <p className="text-sm group-hover:text-red-500 ">{likeCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
