import Logo from "./icon/Logoicon";
import Bg from "../assets/img/Decore.png";
import Elipse from "../assets/img/Ellipse8.png";
import Traveller from "../assets/img/Traveller1.png";
import Plane from "./icon/Planeicon";

// components

import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import Feature4 from "./Feature4";
import Footer from "./Footer";

const Hero = () => {
  return (
    <section className="h-[full] w-[1440px] z-10 bg-hero top-0 relative">
      <div className="flex gap-[222px] relative  pt-[49px] justify-center">
        <div className="absolute right-[600px] top-[180px]">
          <Plane />
        </div>
        <div className="absolute z-10 right-[100px] top-[100px]">
          <Plane />
        </div>
        <div>
          <Logo />
        </div>
        <div className="flex gap-[62px] items-center">
          <p className="font-DMsans font-normal text-[17px] text-[#212832]">
            Desitnations
          </p>
          <p className="font-DMsans font-normal text-[17px] text-[#212832]">
            Hotels
          </p>
          <p className="font-DMsans font-normal text-[17px] text-[#212832]">
            Flights
          </p>
          <p className="font-DMsans font-normal text-[17px] text-[#212832]">
            Bookings
          </p>
          <p className="font-DMsans font-normal text-[17px] text-[#212832]">
            Login
          </p>
          <div className="h-[40px] border border-[#212832] rounded-[5px] flex w-[102px]">
            <p className="font-DMsans m-auto font-normal text-[17px] text-[#212832]">
              Sign up
            </p>
          </div>
          <select className="bg-[#FFF1DA]" name="language" id="language">
            <option value="EN">EN</option>
          </select>
        </div>
      </div>
      <div className="absolute right-0 top-0 -z-10">
        <img src={Bg} alt="" />
      </div>
      <div className="mt-[135px] relative ml-[150px]">
        <h1 className="font-secondary font-bold text-[#DF6951] text-[20px]">
          Best Destinations around the world
        </h1>
        <h2 className="font-primary font-bold mt-[24px] text-[#181E4B] leading-[89px] text-[84px] w-[545px]">
          Travel, enjoy and live a new and full life
        </h2>
        <p className="font-secondary mt-[30px] font-medium text-[16px] w-[400px] leading-[30px]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex mt-[34px] gap-[44px]">
          <div className="w-[170px] h-[60px] rounded-[10px] flex bg-[#F1A501]">
            <p className="text-white m-auto font-DMsans font-medium text-[18px] ">
              Find out more
            </p>
          </div>
          <div className="flex gap-[21px]">
            <div>
              <img src={Elipse} alt="" />
            </div>
            <p className="font-secondary font-medium pt-[12px] text-[17px]">
              Play Demo
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-[99px] right-[200px]">
        <img src={Traveller} alt="" />
      </div>

      <Feature1 />
    </section>
  );
};

export default Hero;
