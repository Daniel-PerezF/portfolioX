import { useState } from "react";
import { useDarkMode } from "../context/useDarkMode";
import { LinksProps, linkData } from "../data";
import { FaRegCopy, IoClose, IoMdCheckmarkCircleOutline } from "../icons/icons";

export function LinksContent({ onClose }: { onClose: () => void }) {
  const { darkMode } = useDarkMode();
  const [copiedIds, setCopiedIds] = useState<number[]>([]);

  function isCopied(id: number): boolean {
    return copiedIds.includes(id);
  }

  function copyToClipboard(event: React.MouseEvent, id: number, url: string) {
    event.preventDefault();

    navigator.clipboard.writeText(url).then(
      function () {
        setCopiedIds((prevIds) => [...prevIds, id]);
        setTimeout(
          () =>
            setCopiedIds((prevIds) =>
              prevIds.filter((prevId) => prevId !== id)
            ),
          5000
        );
      },
      function (err) {
        console.error("Failed to copy URL to clipboard: ", err);
      }
    );
  }

  return (
    <div
      className={`flex flex-col items-center gap-3 h-full overflow-y-scroll ${
        darkMode
          ? "bg-dark/85 backdrop-blur-md text-light"
          : "bg-light/90 text-dark backdrop-blur-sm"
      } px-4`}
      onClick={onClose}
    >
      <div
        className={`max-w-[750px] w-full h-min pt-5 pb-20 flex flex-col items-center rounded-md mt-16  ${
          darkMode ? "bg-[#303034]" : "bg-[#e6e3e3]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pt-8 pb-0 sm:pb-3 flex flex-col justify-center items-center ">
          <LinkPfp />
          <p className={`py-4`}>Links</p>
        </div>
        <div className="relative">
          <IoClose
            className={`${darkMode ? "text-light" : "text-dark"} z-50 top-3 left-3 fixed text-4xl hover:scale-105 duration-150 ease-in-out cursor-pointer`}
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col gap-3 text-center w-full max-w-[350px] md:max-w-[450px] justify-center ">
          {linkData.map((link: LinksProps) => (
            <a
              aria-label={`Opens link to ${link.name}`}
              key={link.id}
              href={link.url}
              id="websiteLink"
              target="_blank"
              rel="noopener noreferrer"
              className={`h-[55px] flex gap-3 text-center w-full items-center justify-between px-4 py-4 rounded-full hover:scale-101 ease-in-out duration-300 transition-transform  ${
                darkMode
                  ? "bg-[#585b66] text-light"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <link.icon className="text-xl " />
              <p className=" ">{link.name}</p>

              {isCopied(link.id) && (
                <div className="max-w-fit">
                  <IoMdCheckmarkCircleOutline className="text-xl text-green-400 animate-slide-up " />
                  <span className="text-sm text-green-400 animate-slide-up absolute top-4 right-10" />
                </div>
              )}
              {!isCopied(link.id) && link.name !== "Resume" && (
                <div className="tooltip">
                  <span className="tooltiptext text-sm text-green-400">
                    Copy
                  </span>
                  <FaRegCopy
                    className="text-xl animate-slide-down "
                    onClick={(e) => {
                      copyToClipboard(e, link.id, link.copy);
                    }}
                  />
                </div>
              )}
              {link.name === "Resume" && (
                <div className="invisible">
                  <FaRegCopy />
                </div>
              )}
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
        className={`rounded-full h-32 w-32 object-cover bg-white m-4 ${
          darkMode ? "" : ""
        } `}
      />
    </div>
  );
}
