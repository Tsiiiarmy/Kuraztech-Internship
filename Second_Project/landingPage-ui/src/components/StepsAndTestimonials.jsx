import React from "react";
import tripImage from "../assets/trip-greece.png";
import testimonialImage from "../assets/testimonial.png";
import { FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    color: "bg-yellow-400",
    title: "Choose Destination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    color: "bg-orange-400",
    title: "Make Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    color: "bg-cyan-600",
    title: "Reach Airport on Selected Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

const StepsAndTestimonials = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-14 mb-28">
        {/* Left: Steps */}
        <div className="flex-1">
          <p className="text-sm font-poppins text-gray-500 tracking-widest font-bold uppercase mb-2">Easy and Fast</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#181e4b] mb-10 leading-tight" style={{ fontFamily: 'Volkhov' }}>
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
                  <p className="text-gray-500 text-sm font-poppins">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Trip Card Image */}
        <div className="flex-1 flex justify-center items-start">
          <div className="rounded-3xl shadow-lg shadow-blue-100 overflow-hidden w-[340px]">
            <img
              src={tripImage}
              alt="Trip to Greece"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

    {/* Testimonials Section */}
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
    {/* Left: Title and text */}
    <div className="text-center lg:text-left flex-1">
        <p className="text-sm font-poppins text-gray-500 tracking-widest font-bold uppercase mb-2">TESTIMONIALS</p>
        <h2 className="text-4xl md:text-5xl font-volkhov font-bold text-[#181e4b] mb-10" style={{ fontFamily: 'Volkhov' }}>
        What People Say <br /> About Us.
        </h2>

        {/* Dots (static mockup) */}
        <div className="flex justify-center lg:justify-start mt-6 gap-2">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
        </div>
    </div>

    {/* Right: Testimonial Image */}
    <div className="flex-1 flex justify-center lg:justify-end">
        <img
        src={testimonialImage}
        alt="Testimonial"
        className="rounded-2xl shadow-md w-full max-w-xl py-30"
        />
    </div>
    </div>
    </section>
  );
};

export default StepsAndTestimonials;
