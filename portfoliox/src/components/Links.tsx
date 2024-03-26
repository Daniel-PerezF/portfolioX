import { useDarkMode } from "../context/useDarkMode";
import { links } from "../data";

export function Links() {
  const { darkMode } = useDarkMode();

  return (
    <div className="w-full flex flex-col items-center">
      <div className="pt-12 pb-10 ">
        <h3 className="text-2xl font-bold">Heres all my Links!</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center text-center px-2">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`border px-5 py-2 rounded-lg duration-150 ease-in-out w-48 ${
              darkMode
                ? "bg-gray-600 hover:bg-gray-700 hover:scale-105 text-light border-gray-500 "
                : "bg-gray-300 hover:bg-gray-400 hover:scale-105 text-dark  border-gray-400"
            }`}
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
