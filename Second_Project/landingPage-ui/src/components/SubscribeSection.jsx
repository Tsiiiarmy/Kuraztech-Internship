import React from 'react';
import { FaPaperPlane, FaEnvelope } from 'react-icons/fa';
import left from '../assets/leftt.png';
import right from '../assets/right.png';

const SubscribeSection = () => {
  return (
    <section className="relative bg-[#F8F9FE] rounded-[20px] mx-4 md:mx-auto mt-10 py-26 px-8 max-w-5xl overflow-hidden">
      {/* Decorative Send Icon */}
      <div className="absolute -top-0 right-0 bg-[#6246EA] p-4 rounded-full shadow-md ">
        <FaPaperPlane className="text-white text-xl" />
      </div>

      {/* Background Circles */}
      <div className="absolute -left-20 bottom-0 opacity-10">
        <img src={left} alt="left-deco" className="w-60" />
      </div>
      <div className="absolute -right-20 top-0 opacity-10">
        <img src={left} alt="right-deco" className="w-60" />
      </div>

      {/* Content */}
      <div className="text-center relative z-10">
        <h2 className="text-xl md:text-2xl font-semibold font-poppins text-gray-600 mb-8" style={{fontFamily: 'Poppins, sans-serif'}}>
          Subscribe to get information, latest news and other<br /> interesting offers about Jadoo
        </h2>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-md w-full md:w-[300px]">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Your email"
              className="outline-none flex-grow font-poppins"
            />
          </div>
          <button
            type="submit"
            className="bg-[#FF7152] text-white font-poppins font-medium px-6 py-3 rounded-lg shadow-md hover:bg-[#ff5c3d] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
