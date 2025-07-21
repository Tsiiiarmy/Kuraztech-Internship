function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center px-10 py-20 gap-12">
      {/* Left */}
      <div className="md:w-1/2">
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Best Destinations around the world</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Travel, enjoy <br /> and live a new <span className="text-indigo-600">full life</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.
        </p>
        <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition">
          Find out more
        </button>
      </div>

      {/* Right */}
      <div className="md:w-1/2">
        <img src="C:\Users\hp\Documents\GitHub\KurazTech-Internship\Jadoo_UI\jadoo-ui\src\assets\photo1.png" alt="Hero" className="w-full" />
      </div>
    </section>
  )
}

export default Hero
