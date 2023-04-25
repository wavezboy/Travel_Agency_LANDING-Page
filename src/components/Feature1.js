import React from "react";
import Red from "./icon/RedBg";
import sat from "../assets/img/Satelite.png";
import mic from "../assets/img/Mic.png";
import plane from "../assets/img/plane.png";
import setting from "../assets/img/setting.png";

export default function Feature1() {
  return (
    <div className="mt-[230px] mb-[100px]">
      <div className=" flex flex-col items-center justify-center">
        <p className="font-secondary font-semibold text-[18px]">CATEGORY</p>
        <h2 className="font-primary font-bold text-[50px] text-[#14183E] mt-[10px]">
          We Offer Best Services
        </h2>
      </div>
      <div className="mt-[68px]"></div>
      <div className="relative  w-[0px] group">
        <div className="h-[314px] relative ml-[200px] shadow-md shadow-gray-300 hover:shadow-lg hover:shadow-gray-400 transition-all duration-500  w-[267px] bg-white rounded-[36px] flex flex-col items-center justify-center ">
          <div>
            <img src={plane} alt="" />
          </div>
          <h1 className="font-DMsans font-semibold mt-[20px] text-[20px]">
            Calculated Weather
          </h1>
          <div className="w-[181px] pl-[10px] mt-[15px] flex items-center justify-center h-[78px]">
            <p className="font-secondary leading-[26px]  w-[150px] font-normal text-[16px]">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>
          <div></div>
        </div>
        <div className="absolute top-[240px] opacity-0 group-hover:opacity-100 -z-10 left-[170px]">
          <Red />
        </div>
      </div>
    </div>
  );
}
