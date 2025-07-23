import React from "react";
import Logo from "../assets/Logo.png";
import BlobShape from "../assets/Decore.png";
import photo1 from "../assets/photo1.png";
import plane1 from "../assets/plane.png";
import plane2 from "../assets/plane.png";

const HeroWithNavbar = () => {
  return (
    <section className="relative overflow-hidden bg-white">
        <div className="relative z-20">
        {/* Background Blob */}
      <img
        src={BlobShape}
        alt="Blob Shape"
        className="absolute top-0 right-0 -z-10 w-[555px] opacity-80"
      />

      {/* Navbar */}
      <nav
        className="flex justify-between items-center px-20 py-8"
        style={{ fontFamily: "Google Sans" }}
      >
        <img src={Logo} alt="Jadoo Logo" className="w-24" />

        <div className="flex items-center gap-10">
          <ul className="flex gap-10 text-gray-700 text-sm font-medium">
            <li className="cursor-pointer">Destinations</li>
            <li className="cursor-pointer">Hotels</li>
            <li className="cursor-pointer">Flights</li>
            <li className="cursor-pointer">Bookings</li>
          </ul>
          <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
            <button className="cursor-pointer">Login</button>
            <button className="border border-gray-700 px-4 py-2 rounded-md cursor-pointer">
              Sign up
            </button>
            <select className="bg-transparent text-gray-700 cursor-pointer">
              <option>EN</option>
              <option>AMH</option>
              <option>KOR</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex justify-start items-center gap-x-60 px-20 py-10 relative z-10">
        {/* Left Text */}
        <div className="max-w-lg space-y-6">
          <h2
            className="text-base font-bold text-[#df6951]"
            style={{ fontFamily: "Poppins" }}
          >
            BEST DESTINATIONS AROUND THE WORLD
          </h2>
          <h1
            className="text-6xl font-extrabold text-[#181e4b] leading-tight"
            style={{ fontFamily: "Volkhov" }}
          >
            Travel,{" "}
            <span className="relative inline-block">
              <span className="z-10 relative">enjoy</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 z-0"></span>
            </span>
            <br />
            and live a new <br />
            and full life
          </h1>
          <p className="text-gray-500 text-sm" style={{ fontFamily: "Poppins" }}>
            Built Wicket longer admire do barton vanity itself do in it. <br />
            Preferred to sportsmen it engrossed listening. Park gate <br /> sell
            they west hard for the.
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
                  <path d="M6.79 5.093a.5.5 0 0 1 .832-.374l3.5 2.907a.5.5 0 0 1 0 .748l-3.5 2.907a.5.5 0 0 1-.832-.374V5.093z" />
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

        {/* Planes */}
        <img
          src={plane1}
          alt="Plane"
          className="absolute top-13 left-[790px] w-30 h-30"
        />
        <img
          src={plane2}
          alt="Plane"
          className="absolute top-16 left-[1087px] w-30 h-30"
        />

      </div>
        </div>
    </section>
  );
};

export default HeroWithNavbar;
