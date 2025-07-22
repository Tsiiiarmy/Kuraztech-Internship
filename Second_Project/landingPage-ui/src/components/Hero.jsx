import React from "react";
import photo1 from "../assets/photo1.png";
import plane1 from "../assets/plane.png";
import plane2 from "../assets/plane.png";
import BlobShape from "../assets/Decore.png";

const Hero = () => {
  return (
    <section className="flex justify-start items-center gap-x-60 px-20 py-10 relative overflow-hidden">
      {/* Left Text Content */}
      <div className="max-w-lg space-y-6 z-10 gap-x-6">
        <h2 className="text-base font-bold text-[#df6951]" style={{ fontFamily: 'Poppins' }}>
          BEST DESTINATIONS AROUND THE WORLD
        </h2>
        <h1 className="text-6xl font-extrabold text-[#181e4b] leading-tight" style={{ fontFamily: 'Volkhov' }}>
          Travel,{" "}
          <span className="relative inline-block">
            <span className="z-10 relative">enjoy</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 z-0"></span>
          </span>
          <br />
          and live a new <br />
          and full life
        </h1>
        <p className="text-gray-500 text-sm" style={{ fontFamily: 'Poppins' }}>
          Built Wicket longer admire do barton vanity itself do in it. <br />
          Preferred to sportsmen it engrossed listening. Park gate <br /> sell they west hard for the.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-6">
          <button
            className="px-6 py-3 rounded-md text-white font-semibold"
            style={{ backgroundColor: "#F1A501" }}
          >
            Find out more
          </button>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-[#DF6951] flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6.79 5.093a.5.5 0 0 1 .832-.374l3.5 2.907a.5.5 0 0 1 0 .748l-3.5 2.907a.5.5 0 0 1-.832-.374V5.093z"/>
              </svg>
            </div>

            <span className="text-sm text-gray-700 font-medium">Play Demo</span>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="z-10">
        <img src={photo1} alt="Traveler girl" className="w-[450px]" />
      </div>

      {/* Decorative Planes */}
      <img src={plane1} alt="Plane" className="absolute top-16 left-190 w-30 h-30" />
      <img src={plane2} alt="Plane" className="absolute top-16 left-273 w-30 h-30" />
      <img
        src={BlobShape}
        alt="Blob Shape"
        className="absolute top-0 right-0 -z-10 w-[700px] opacity-90"
      />
    </section>
  );
};

export default Hero;
