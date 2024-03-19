import { ProfilePic } from ".";

export function Banner() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative">
        <div className="absolute top-2/3 lg:top-[13rem] left-0 lg:left-[1rem] z-10">
          <ProfilePic />
        </div>
        <img src="/banner-4.jpeg" alt="" className="relative " />
      </div>
    </div>
  );
}
