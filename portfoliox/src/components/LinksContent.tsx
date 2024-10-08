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
      className={`flex flex-col items-center gap-3 h-full bg-gradient-to-b overflow-y-scroll ${
        darkMode ? "  bg-[#2C2C34]" : "bg-[#ECCB9E]"
      } px-4 pb-8`}
    >
      <div className="pt-8 pb-0 sm:pb-3 flex flex-col justify-center items-center ">
        <LinkPfp />
        <h3 className={`text-2xl font-bold`}>Daniel Perez</h3>
        <p className={``}>I write code and stuff</p>
      </div>
      <div className="relative">
        <IoClose
          className="text-white z-50 top-3 left-3 fixed text-4xl hover:scale-105 duration-150 ease-in-out cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="flex flex-col gap-3 text-center w-full max-w-[750px] justify-center ">
        {linkData.map((link: LinksProps) => (
          <a
            aria-label={`Opens link to ${link.name}`}
            key={link.id}
            href={link.url}
            id="websiteLink"
            target="_blank"
            rel="noopener noreferrer"
            className={`h-[55px] flex gap-3 text-center w-full max-w-[750px] justify-between border px-4 py-4 rounded-full hover:scale-101 ease-in-out duration-300 transition-transform  ${
              darkMode ? "bg-white  text-dark" : "bg-white text-dark"
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
                <span className="tooltiptext text-sm text-green-400">Copy</span>
                <FaRegCopy
                  className="text-xl animate-slide-down "
                  onClick={(e) => {
                    copyToClipboard(e, link.id, link.copy);
                  }}
                />
              </div>
            )}
            {link.id === 6 && (
              <div className="invisible">
                <FaRegCopy />
              </div>
            )}
          </a>
        ))}
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
