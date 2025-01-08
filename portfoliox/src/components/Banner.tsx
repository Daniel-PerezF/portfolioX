import { useDarkMode } from "../context/useDarkMode";
import { BannerProps } from "../data";

export function Banner({ darkModeImage, lightModeImage }: BannerProps) {
  const { darkMode } = useDarkMode();

  return (
    <div className="w-full flex justify-center">
      <div className="relative aspect-[3/1] w-full">
        <img
          src={lightModeImage}
          alt="light mode banner"
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 rounded-none lg:rounded-lg ${
            darkMode ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={darkModeImage}
          alt="dark mode banner"
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 rounded-none lg:rounded-lg ${
            darkMode ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
