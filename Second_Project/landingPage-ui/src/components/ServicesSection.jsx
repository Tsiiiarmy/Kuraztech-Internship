import React from "react";
import weatherIcon from "../assets/weather.png";
import flightIcon from "../assets/flight.png";
import micIcon from "../assets/mic.png";
import gearIcon from "../assets/gear.png";

const services = [
  {
    icon: weatherIcon,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    icon: flightIcon,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    highlight: true, // To style this differently
  },
  {
    icon: micIcon,
    title: "Local Events",
    description: "Barton vanity itself do in it. Preferred to men it engrossed listening.",
  },
  {
    icon: gearIcon,
    title: "Customization",
    description: "We deliver outsourced aviation services for military customers",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-50 px-6 md:px-20 bg-white text-center">
      {/* Top Text */}
      <div className="mb-14">
        <p className="text-sm text-gray-500 tracking-widest font-poppins font-bold uppercase">
          CATEGORY
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#181e4b] mt-3" style={{ fontFamily: 'Volkhov' }}>
          We Offer Best Services
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center px-6 py-10 rounded-2xl transition-all duration-300 ${
              service.highlight
                ? "bg-white shadow-xl scale-105"
                : "bg-transparent"
            }`}
          >
            <div className="w-16 h-16 mb-5 flex items-center justify-center">
              <img src={service.icon} alt={service.title} className="w-full h-auto" />
            </div>
            <h3 className="text-lg font-bold mb-2 font-poppins text-gray-800">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 font-poppins">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
