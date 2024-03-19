import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { HiMiniCake } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";

export function ProfileAbout() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end py-4">
        <button className=" bg-pop px-4 py-2 rounded-full text-white">
          Follow
        </button>
      </div>
      <div className="px-4">
        <div className="text-2xl font-bold flex items-center gap-2">
          <h3>Daniel Perez</h3>
          <RiVerifiedBadgeFill className="text-blue-400" />
        </div>
        <div className="text-gray-400">@danielperez</div>
        <div>Bring ideas to life with code!</div>
        <div className="pb-4">
          Full Stack Software Engineer. Creative. Problem-Solver.
        </div>
        {/* Icons */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-400">
          <div className="flex gap-1">
            <BsFillSuitcaseLgFill className="self-center " />
            Open to Work
          </div>
          <div className="flex gap-1">
            <IoLocation className="self-center " />
            Orange County, CA
          </div>
          <div className="flex gap-1">
            <FaLink className="self-center" />
            <Link className="text-orange" to="/LinksPage">
              /links
            </Link>
          </div>
          <div className="flex gap-1">
            <HiMiniCake className="self-center " />
            October 21st
          </div>
          <div className="flex gap-1">
            <IoCalendarOutline className="self-center " />
            Joined March 2024
          </div>
        </div>
      </div>
    </div>
  );
}
