import { useDarkMode } from "../context/useDarkMode";

export function ProfilePic({ src, alt }: { src: string; alt: string }) {
  const { darkMode } = useDarkMode();

  return (
    <div className="w-full">
      <img
        src={src}
        alt={alt}
        className={`rounded-full h-28 w-28 object-cover m-4 ring-4 transition-all ease-in-out duration-200 ${darkMode ? "ring-light" : "ring-dark"}`}
      />
    </div>
  );
}
