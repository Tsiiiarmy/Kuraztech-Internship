function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 shadow-md">
      <h1 className="text-2xl font-bold text-indigo-600">Jadoo</h1>
      <ul className="flex gap-8 text-gray-700 font-medium">
        <li className="hover:text-indigo-500 cursor-pointer">Destinations</li>
        <li className="hover:text-indigo-500 cursor-pointer">Hotels</li>
        <li className="hover:text-indigo-500 cursor-pointer">Flights</li>
        <li className="hover:text-indigo-500 cursor-pointer">Bookings</li>
      </ul>
    </nav>
  )
}

export default Navbar
