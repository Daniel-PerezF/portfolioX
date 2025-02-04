import { FaLink } from "../icons/icons";
import { useDarkMode } from "../context/useDarkMode";
import { education, experiences } from "../data";

export function Experience() {
  const { darkMode } = useDarkMode();

  return (
    <>
      <div className="h-full">
        {experiences.map((exp, index) => (
          <div
            key={exp.id + index}
            className={`pb-2 md:p-4 mb-4 mx-2 md:mx-0 rounded-lg ${
              darkMode
                ? "hover:bg-[#37363c] bg-[#303034] duration-300 ease-in-out"
                : "hover:bg-[#e5e5e5] bg-[#eeeeee] duration-300 ease-in-out"
            }`}
          >
            <div className="w-full flex justify-center pt-4">
              <div className="flex w-11/12 justify-start gap-4 mb-4">
                {exp.logo && (
                  <div className="pl-3">
                    <img
                      src={exp.logo}
                      alt={exp.name}
                      className="w-12 h-12 object-cover rounded-lg aspect-square"
                    />
                  </div>
                )}

                <div className="flex">
                  <div className="">
                    <div className="font-bold">{exp.role}</div>
                    <div className="font-medium text-[14px]">{exp.company}</div>
                    <div
                      className={`font-light text-sm mt-[1px] ${darkMode ? "text-gray-300" : "text-gray-500"}`}
                    >
                      {exp.date}
                    </div>
                  </div>
                </div>

                <div className="flex gap mr-12">
                  {exp.url && (
                    <div className="tooltip">
                      <span className="tooltiptext text-xs">View Live</span>
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex self-center"
                        aria-label="Opens link to experience item"
                      >
                        <FaLink
                          className={`text-md duration-300 ease-in-out text-gray-400 ${
                            darkMode
                              ? "text-[#97AEC4] hover:text-[#7C9AB6]"
                              : "text-[#7C9AB6] hover:text-[#6286A7]"
                          } `}
                        />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center pb-6 ">
              <div className="flex w-11/12 flex-wrap">
                {exp.description.map((item, index) => (
                  <div key={index + item} className="mr-2">
                    <div className="ml-3 flex">
                      <div className="pt-1">•</div>
                      <div className="ml-2 ">{item}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`w-min mx-auto mb-6 mt-6 rounded-md py-2 px-4 ${darkMode ? " bg-[#37363c]" : " bg-lighter"}`}
      >
        Education
      </div>
      <div className="h-full">
        {education.map((edu, index) => (
          <div
            key={edu.id + index}
            className={`pb-2 md:p-4 mb-4 mx-2 md:mx-0 rounded-lg ${
              darkMode
                ? "hover:bg-[#37363c] bg-[#303034] duration-300 ease-in-out"
                : "hover:bg-[#EBEBEB] bg-[#eeeeee] duration-300 ease-in-out"
            }`}
          >
            <div className="w-full flex justify-center pt-4">
              <div className="flex w-11/12 justify-start gap-4 mb-4">
                {edu.logo && (
                  <div className="pl-3">
                    <img
                      src={edu.logo}
                      alt={edu.name}
                      className="min-w-min h-12 object-cover rounded-lg aspect-square"
                    />
                  </div>
                )}

                <div className="flex pl-4 sm:pl-0">
                  <div className="">
                    <div className="font-bold">{edu.program}</div>
                    <div className="font-medium text-[14px]">{edu.name}</div>
                    <div
                      className={`font-light text-sm mt-[1px] ${darkMode ? "text-gray-300" : "text-gray-500"}`}
                    >
                      {edu.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center pb-6 ">
              <div className="flex w-11/12 flex-wrap">
                {edu.description.map((item, index) => (
                  <div key={index + item} className="mr-2">
                    <div className="ml-3 flex">
                      <div className="pt-1">•</div>
                      <div className="ml-2 ">{item}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
