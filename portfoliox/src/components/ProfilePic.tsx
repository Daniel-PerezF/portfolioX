import { useDarkMode } from "../context/useDarkMode";

export function ProfilePic({ src, alt }: { src: string; alt: string }) {
  const { darkMode } = useDarkMode();

  return (
    <div className="w-full">
      <img
        src={src}
        alt={alt}
        className={`rounded-full h-28 w-28 object-cover bg-white ring-4 m-4  ${
          darkMode ? "ring-black" : "ring-white"
        } `}
      />
    </div>
  );
}
