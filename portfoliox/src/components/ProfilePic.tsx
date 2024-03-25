import { useDarkMode } from "../context/useDarkMode";

export function ProfilePic() {
  const { darkMode } = useDarkMode();

  return (
    <div className="w-full">
      <img
        src="/memoji.PNG"
        alt="my memoji"
        className={`rounded-full h-28 w-28 object-cover bg-white ring-4 m-4  ${
          darkMode ? "ring-black" : "ring-white"
        } `}
      />
    </div>
  );
}
