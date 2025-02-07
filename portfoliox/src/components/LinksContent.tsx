import { useDarkMode } from "../context/useDarkMode";
import { links, Links } from "../data";
import { IoMdClose, MdOpenInNew } from "../icons/icons";

export function LinksContent({ onClose }: { onClose: () => void }) {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col items-center gap-3 h-full ${
        darkMode
          ? "bg-dark/50 backdrop-blur-md text-light"
          : "bg-light/50 backdrop-blur-md text-dark "
      } px-4`}
      onClick={onClose}
    >
      <div
        className={`max-w-[550px] w-full h-min pt-5 pb-20 flex flex-col items-center rounded-md mt-16  ${
          darkMode ? "bg-[#303034]" : "bg-[#e6e3e3]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pt-8 pb-0 sm:pb-3 flex flex-col justify-center items-center ">
          <LinkPfp />
          <p className="py-4 font-medium">@dxnieldev</p>
        </div>
        <div className="relative">
          <IoMdClose
            className={`${darkMode ? "hover:bg-[#858585]" : "hover:bg-dark"} p-1 rounded-full z-50 top-3 left-3 fixed duration-300 transition-all ease-in-out bg-opacity-10 hover:bg-opacity-25  cursor-pointer`}
            size={38}
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col gap-3 text-center w-full max-w-[280px] md:max-w-[380px] justify-center ">
          {links.map((link: Links) => (
            <a
              aria-label={`Opens link to ${link.name}`}
              key={link.id}
              href={link.url}
              id="websiteLink"
              target="_blank"
              rel="noopener noreferrer"
              className={`h-[55px] flex gap-3 text-center w-full items-center justify-between px-4 py-4 rounded-xl  ease-in-out duration-300 transition border-transparent border-2 hover:border-orange ${
                darkMode
                  ? "bg-[#585b66] text-light"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <link.icon className="text-xl" />
              <p className=" ">{link.name}</p>
              <MdOpenInNew className="text-xl" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LinkPfp() {
  const { darkMode } = useDarkMode();
  return (
    <div className="w-full">
      <img
        src="/yusuke.jpeg"
        alt=""
        className={`rounded-full h-32 w-32 object-cover bg-white m-4  ring-2 ${darkMode ? "ring-light" : "ring-dark"}`}
      />
    </div>
  );
}
