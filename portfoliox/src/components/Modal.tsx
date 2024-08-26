import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, closeModal, darkMode, children }: any) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={closeModal}
      className={`fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black backdrop-blur-[0.5px] ${
        darkMode ? "bg-opacity-80" : "bg-opacity-90"
      }`}
    >
      <div className="relative">
        <IoClose
          className="text-white z-50 top-3 left-3 fixed text-4xl hover:scale-105 duration-150 ease-in-out cursor-pointer"
          onClick={closeModal}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
