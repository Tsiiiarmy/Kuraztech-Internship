import React from "react";
import logo from "../assets/logoo.png";
import googlePlay from "../assets/googleplay.png";
import appStore from "../assets/playstore.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="bg-white px-6 md:px-20 py-3 text-[#5E6282]">
      <div className="flex flex-col md:flex-row justify-between gap-12 py-20">
        {/* Logo & Description */}
        <div className="max-w-sm">
          <img src={logo} alt="Jadoo Logo" className="mb-4" />
          <p className="text-sm leading-relaxed text-gray-500" style={{ fontFamily: 'Poppins' }}>
            Book your trip in minutes, get full <br />control for much longer.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-10" style={{ fontFamily: 'Poppins' }}>
          <div>
            <h4 className="font-bold mb-3 text-[#080809]">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#080809]" >Contact</h4>
            <ul className="space-y-2 text-sm text-gray-500" >
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[#080809]">More</h4>
            <ul className="space-y-2 text-sm">
              <li>Airline fees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>
        </div>

        {/* App Section */}
        <div className="max-w-xs " style={{ fontFamily: 'Poppins' }}>
            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
            <div className="bg-white shadow-md p-3 rounded-full">
                <FontAwesomeIcon icon={faFacebookF} className="text-[#080809]" />
            </div>
            <div className="bg-white shadow-md p-3 rounded-full">
                <FontAwesomeIcon icon={faInstagram} className="text-[#080809]" />
            </div>
            <div className="bg-white shadow-md p-3 rounded-full">
                <FontAwesomeIcon icon={faTwitter} className="text-[#080809]" />
            </div>
            </div>
          <h4 className="font-extrabold mb-4  text-gray-500">Discover our app</h4>
          <div className="flex gap-4">
            <img src={googlePlay} alt="Google Play" className="w-28 h-auto" />
            <img src={appStore} alt="App Store" className="w-28 h-auto" />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
        <div className="mt-10 text-sm text-center border-t pt-3 border-gray-200">
             &copy; All rights reserved @jadoo.co
        </div>
    </footer>
  );
};

export default Footer;
