import { useState } from "react";
import { useDarkMode } from "../context/useDarkMode";
import { IoClose } from "../icons/icons";

export function ProfilePic() {
  const { darkMode } = useDarkMode();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full">
      <img
        src="/memoji.PNG"
        alt=""
        className={`rounded-full h-28 w-28 object-cover bg-white ring-4 m-4  ${
          darkMode ? "ring-black" : "ring-white"
        } `}
        onClick={openModal}
      />
      {/* {modalOpen && (
        <div
          onClick={closeModal}
          className="fixed top-0 left-0  w-full h-full flex items-center justify-center bg-black bg-opacity-65 z-50"
        >
          <div className=" ">
            <IoClose
              className="text-white  top-14 left-2 fixed text-4xl hover:scale-10 duration-150 ease-in-out cursor-pointer"
              onClick={closeModal}
            />
          </div>
          <div className="relative">
            <div className="w-full">
              <img
                src="/memoji.PNG"
                alt=""
                className={`rounded-full w-[200px] sm:w-[120px] md:w-[220px] lg:w-[320px] h-[200px] sm:h-[120px] md:h-[220px] lg:h-[320px] object-cover bg-white  ring-4 m-4 ${
                  darkMode ? "ring-dark" : "ring-light"
                }`}
              />
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
