import { ProfilePic } from ".";

export function Banner() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative">
        <div className="absolute top-2/3 lg:top-[13rem] left-0 lg:left-[1rem] z-10">
          <ProfilePic />
        </div>
        <img
          src="/cyber-banner.jpeg"
          alt=""
          className="relative aspect-[3/1] object-cover"
        />
      </div>
    </div>
  );
}
