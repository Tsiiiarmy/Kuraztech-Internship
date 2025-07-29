import React, { useState } from "react";
import girlInRedDress from "../assets/trip-greecee.png";
import romeIcon from "../assets/rome-profile.png";
import mikeTaylor from "../assets/mike-taylor.png"; 
import { FaCheckCircle, FaHeart, FaMapMarkerAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const steps = [
  {
    color: "bg-yellow-400",
    title: "Choose Destination",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    color: "bg-orange-400",
    title: "Make Payment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    color: "bg-cyan-600",
    title: "Reach Airport on Selected Date",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

const TripCard = () => {
  const [showRomeTrip, setShowRomeTrip] = useState(false);

  return (
    <div className="relative w-[340px] bg-white rounded-3xl shadow-xl shadow-blue-100 overflow-hidden transition-all">
      <img src={girlInRedDress} alt="Trip to Greece" className="w-full h-60 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold text-[#181e4b]">Trip To Greece</h3>
        <p className="text-sm text-gray-500">14–29 June by Robbin Joseph</p>
        <div className="flex items-center gap-4 mt-3">
          <FaMapMarkerAlt className="text-gray-500 text-sm" />
          <FaCalendarAlt className="text-gray-500 text-sm" />
          <FaUsers className="text-gray-500 text-sm" />
        </div>
        <p className="text-sm text-gray-500 mt-2">24 people going</p>
      </div>

      {/* Hoverable Heart */}
      <div
        className="absolute bottom-4 right-4 z-10"
        onMouseEnter={() => setShowRomeTrip(true)}
        onMouseLeave={() => setShowRomeTrip(false)}
      >
        <div className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors cursor-pointer">
          <FaHeart className="text-[#9995da]" />
        </div>

        {/* Hover Box */}
        {showRomeTrip && (
          <div className="absolute -top-24 right-0 bg-white rounded-xl shadow-xl p-4 w-56">
            <div className="flex items-center gap-3 mb-3">
              <img src={romeIcon} alt="Trip to Rome" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-xs font-semibold text-gray-500">Ongoing</p>
                <h4 className="font-bold text-[#181e4b] text-sm">Trip to Rome</h4>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: "40%" }}></div>
            </div>
            <p className="text-xs text-purple-600 mt-1">40% completed</p>
          </div>
        )}
      </div>
    </div>
  );
};

const TestimonialCard = () => {
  return (
    <div className="relative max-w-md">
      {/* Main Testimonial */}
      <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md relative z-20">
        <img
          src={mikeTaylor}
          alt="Mike Taylor"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div style={{fontFamily: "poppins"}}>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
            “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <p className="font-bold text-sm text-[#181e4b]">Mike taylor</p>
          <p className="text-xs text-gray-400">Lahore, Pakistan</p>
        </div>
      </div>

      {/* Chris Thomas below the main card */}
      <div className="pl-26 mt-3" style={{fontFamily: "poppins"}}>
        <p className="font-bold text-sm text-[#181e4b]">Chris Thomas</p>
        <p className="text-xs text-gray-400">CEO of Red Button</p>
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 space-y-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 cursor-pointer">
          <IoChevronUp />
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 cursor-pointer">
          <IoChevronDown />
        </div>
      </div>
    </div>
  );
};


const StepsAndTestimonials = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-14 mb-28">
        {/* Left: Steps */}
        <div className="flex-1">
          <p className="text-sm font-poppins text-gray-500 tracking-widest font-bold uppercase mb-2">
            Easy and Fast
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#181e4b] mb-10 leading-tight"
            style={{ fontFamily: "Volkhov" }}
          >
            Book Your Next Trip <br /> In 3 Easy Steps
          </h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg ${step.color}`}
                >
                  <FaCheckCircle className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-bold font-poppins text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm font-poppins">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Trip Card */}
        <div className="flex-1 flex justify-center items-start">
          <TripCard />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16 ">
        {/* Left: Title and Dots */}
        <div className="text-center lg:text-left flex-1">
          <p className="text-sm font-poppins text-gray-500 tracking-widest font-bold uppercase mb-2">TESTIMONIALS</p>
          <h2
            className="text-4xl md:text-5xl font-volkhov font-bold text-[#181e4b] mb-10"
            style={{ fontFamily: "Volkhov" }}
          >
            What People Say <br /> About Us.
          </h2>

          {/* Dots */}
          <div className="flex justify-center lg:justify-start mt-6 gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Right: Testimonial UI */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

export default StepsAndTestimonials;
