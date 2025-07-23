import React from "react";
import romeImg from "../assets/rome.png";
import londonImg from "../assets/london.png";
import europeImg from "../assets/europe.png";
import { FaMapMarkerAlt } from "react-icons/fa"; 
import rightdecore from "../assets/zigzag.png"; 

const destinations = [
  {
    image: romeImg,
    location: "Rome, Italy",
    price: "$5.42k",
    duration: "10 Days Trip",
  },
  {
    image: londonImg,
    location: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
  },
  {
    image: europeImg,
    location: "Full Europe",
    price: "$15k",
    duration: "28 Days Trip",
  },
];

const DestinationsSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white text-center">
      {/* Section Title */}
      <div className="mb-14">
        <p className="text-sm  text-gray-500 tracking-widest font-poppins font-bold uppercase">
          Top Selling
        </p>
        <h2 className="text-4xl md:text-5xl font-volkhov font-bold text-[#181e4b] mt-3" style={{ fontFamily: 'Volkhov' }}>
          Top Destinations
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-15">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden text-left"
          >
            <img
              src={item.image}
              alt={item.location}
              className="w-full h-90 object-fill rounded-t-3x1 transition-transform duration-300 hover:scale-105"
            />

            <div className="p-5 space-y-3">
              {/* Location + Price */}
              <div className="flex justify-between items-center font-poppins font-medium text-gray-800 text-sm">
                <p>{item.location}</p>
                <p className="text-gray-600">{item.price}</p>
              </div>

              {/* Duration with icon */}
              <div className="flex items-center text-gray-500 text-sm font-poppins">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                <span>{item.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;