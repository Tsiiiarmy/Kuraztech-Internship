import React from "react";
import Logo from "../assets/Logo.png"; 

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-20 py-8 bg-white" style={{ fontFamily: 'Google Sans' }}> 
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
          <button className="border border-gray-700 px-4 py-2 rounded-md cursor-pointer">Sign up</button>
          <select className="bg-transparent text-gray-700 cursor-pointer">
            <option>EN</option>
            <option>AMH</option>
            <option>KOR</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
