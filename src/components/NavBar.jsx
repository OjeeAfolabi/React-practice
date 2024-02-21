import image from "../assets/instagram.jpg";
import image1 from "../assets/jcole.png";

import { PiHouseThin } from "react-icons/pi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoCompassOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

function NavBar() {
  return (
    <nav className="flex justify-between items-center pl-20 pr-20 shadow-lg" >
      <div>
        <img className="h-14" src={image} alt="" />
      </div>
      <div>
      <input type="text" placeholder="Search" className="border border-slate-300 text-center" /></div>
      <div className="flex *:text-2xl gap-4 items-center">
        <PiHouseThin />
        <IoPaperPlaneOutline />
        <IoCompassOutline />
        <CiHeart />
        <img className="h-10 w-10 rounded-full" src={image1} alt="" />
      </div>
    </nav>
  );
}

export default NavBar;
