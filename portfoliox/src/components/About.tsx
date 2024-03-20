// import { useDarkMode } from "../context/useDarkMode";
// export function About() {
//   const { darkMode } = useDarkMode();

//   return (
//     <div className={`h-full pb-10 ${darkMode ? "bg-dark" : "bg-light"}`}>
//       <div className={`h-full w-full px-4  `}>
//         <h3 className="mb-2 "> Hey there, I&apos;m Daniel!</h3>
//         <img src="/ssme.png" alt="" className="mb-2 rounded-2xl" />
//         <p>
//           ...I'm Daniel, a software developer driven by a lifelong fascination
//           with technology. From childhood days tinkering with our household
//           computer to my recent curiosity in AI and coding, technology has
//           always captivated me.
//           <br />
//           <br />
//           After completing an intensive full-stack software development course
//           at LearningFuze coding bootcamp, I uncovered my true passion for
//           coding and web design. I've always had a love for creativity and
//           expression, and I found a new outlet for it through code.
//           <br />
//           <br />
//           Now, as a software developer, I'm eager to continue learning and
//           growing in this dynamic field. I'm actively seeking new avenues for
//           collaboration and growth within the software development sphere. If
//           you have any exciting projects or opportunities on the horizon, I'd
//           love to chat and see how we can potentially work together!
//         </p>
//       </div>
//       <img src="/sign.png" alt="" />
//     </div>
//   );
// }

import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useDarkMode } from "../context/useDarkMode";
import { FaRetweet } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

export function About() {
  const { darkMode } = useDarkMode();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("aboutFavorites");
    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });
  const [retweets, setRetweets] = useState(() => {
    const savedRetweets = localStorage.getItem("aboutRetweets");
    return savedRetweets ? JSON.parse(savedRetweets) : {};
  });

  const images = ["/c-jr-0823.jpg", "/c-0823.jpg"];

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

  const toggleRetweets = () => {
    setRetweets((prevState: boolean) => !prevState);
    localStorage.setItem("aboutRetweets", JSON.stringify(!retweets));
  };
  const toggleFavorites = () => {
    setFavorites((prevState: boolean) => !prevState);
    localStorage.setItem("aboutFavorites", JSON.stringify(!favorites));
  };
  return (
    <div className="h-full">
      <div className="border border-1 p-4">
        <div>
          <div className="flex justify start gap-1">
            <div className="">
              <img
                src="/memoji.PNG"
                alt=""
                className={`rounded-full h-14 w-14  object-cover bg-white  ring-1 m-4 ${
                  darkMode ? "ring-black" : "ring-white"
                }`}
              />
            </div>

            <div className="text-lg font-bold flex pt-4 gap-2 ">
              <div className="flex flex-col">
                {" "}
                <h3>Daniel Perez</h3>
                <div className="text-gray-400 text-sm font-light">
                  @danielperez
                </div>
              </div>

              <RiVerifiedBadgeFill className="text-blue-400 mt-[0.35rem]" />
              <p className="font-normal text-gray-400 text-sm pt-1">
                Feburary 2024 - Present
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex justify-center  w-11/12 flex-col">
            <div
              className={`${
                darkMode ? "outline-black" : "outline-gray-200"
              } outline-1 rounded-md outline mb-4`}
            >
              <div className="flex overflow-hidden rounded-md gap-1 bg-white">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="w-1/2 aspect-[7/8] object-cover cursor-pointer"
                    alt=""
                    onClick={() => openModal(image)}
                  />
                ))}

                {modalOpen && (
                  <div
                    onClick={closeModal}
                    className=" fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-65"
                  >
                    <div className="relative">
                      <div className="w-full flex justify-center">
                        {" "}
                        <img
                          src={images[selectedImageIndex]}
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

            <p>
              Hey there! I'm Daniel, a software developer driven by a lifelong
              fascination with technology. From childhood days tinkering with
              our household computer to my recent curiosity in AI and coding,
              technology has always captivated me.
              <br />
              <br />
              After completing an intensive full-stack software development
              course at LearningFuze coding bootcamp, I uncovered my true
              passion for coding and web design. I've always had a love for
              creativity and expression, and I found a new outlet for it through
              code.
              <br />
              <br />
              Now, as a software developer, I'm eager to continue learning and
              growing in this dynamic field. I'm actively seeking new avenues
              for collaboration and growth within the software development
              sphere. If you have any exciting projects or opportunities on the
              horizon, I'd love to chat and see how we can potentially work
              together!
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center pt-4">
          <div className="flex justify-between text-xl w-11/12 text-gray-400">
            <div className="flex gap-1">
              <BiMessageRounded />
              <p className="text-sm ">1.2K</p>
            </div>
            <div className="flex gap-1">
              <FaRetweet
                className={`${retweets ? "" : "text-green-400"}`}
                onClick={() => {
                  toggleRetweets();
                }}
              />
              <p className="text-sm ">3.2K</p>
            </div>
            <div
              className={`flex gap-1 ${favorites ? "" : "text-red-500"}`}
              onClick={() => {
                toggleFavorites();
              }}
            >
              {favorites ? <MdFavoriteBorder /> : <MdOutlineFavorite />}
              <p className="text-sm ">1.1k</p>
            </div>
            <div className="flex gap-1">
              <IoStatsChart />
              <p className="text-sm ">2.1M</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
