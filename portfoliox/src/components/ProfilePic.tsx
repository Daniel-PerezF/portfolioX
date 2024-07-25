export function ProfilePic({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full">
      <img
        src={src}
        alt={alt}
        className={`rounded-full h-28 w-28 object-cover bg-white m-4`}
      />
    </div>
  );
}
