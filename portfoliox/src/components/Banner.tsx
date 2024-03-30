import { useDarkMode } from "../context/useDarkMode";
import { BannerProps } from "../data";

export function Banner({ darkModeImage, lightModeImage }: BannerProps) {
  const { darkMode } = useDarkMode();
  const imageUrl = darkMode ? darkModeImage : lightModeImage;
  return (
    <div className="w-full flex justify-center">
      <div className="relative ">
        <img
          src={imageUrl}
          alt="twitter style banner"
          className="relative aspect-[3/1] object-cover "
        />
      </div>
    </div>
  );
}
